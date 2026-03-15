import { createClient } from "@/lib/supabase/server";
import { environment } from "@/lib/utils/env";
import { redirect } from "next/navigation";

export const API_BASE_URL =
  environment.nextPublicFinforumApiUrl || "http://localhost:8000";

export async function getAccessToken(): Promise<string | null> {
  const supabase = await createClient();
  const { data, error } = await supabase.auth.getSession();
  if (error || !data?.session) {
    redirect("/auth/login");
  }
  return data.session?.access_token ?? null;
}

export class ApiError extends Error {
  status: number;
  constructor(message: string, status: number) {
    super(message);
    this.name = "ApiError";
    this.status = status;
  }
}

export async function apiFetch<T>(
  url: string,
  options: RequestInit = {},
): Promise<T> {
  const isFormData = options.body instanceof FormData;

  const res = await fetch(url, {
    ...options,
    headers: {
      // Only set Content-Type if not sending FormData
      ...(isFormData
        ? {}
        : {
            "Content-Type": "application/json",
          }),

      ...(options.headers || {}),
    },
    credentials: "include",
  });

  const rawBody = await res.text();

  let parsedBody;
  try {
    parsedBody = rawBody ? JSON.parse(rawBody) : {};
  } catch {
    parsedBody = rawBody;
  }

  if (!res.ok) {
    const message =
      (parsedBody && (parsedBody.detail || parsedBody.error)) ||
      (typeof parsedBody === "string"
        ? parsedBody
        : JSON.stringify(parsedBody)) ||
      `Request failed with status ${res.status}`;

    throw new ApiError(message, res.status);
  }

  return parsedBody as T;
}
