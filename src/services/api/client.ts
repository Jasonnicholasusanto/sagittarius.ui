import { environment } from "@/lib/utils/env";
import { ApiError, apiFetch, getAccessToken } from "@/services/api/config";

interface ApiClientOptions extends RequestInit {
  version?: string;
}

function normalizePath(path: string) {
  return path.startsWith("/") ? path : `/${path}`;
}

function joinUrl(base: string, version: string, path: string) {
  const cleanBase = base.replace(/\/+$/, "");
  const cleanVersion = version.replace(/^\/+|\/+$/g, "");
  const cleanPath = normalizePath(path);

  return `${cleanBase}/api/${cleanVersion}${cleanPath}`;
}

export async function apiClient<T>(
  path: string,
  options: ApiClientOptions = {},
): Promise<T> {
  const token = await getAccessToken();

  const {
    version: customVersion,
    headers: optionHeaders,
    ...restOptions
  } = options;

  const version = customVersion || environment.apiVersion;

  const headers: HeadersInit = {
    ...optionHeaders,
    ...(token ? { Authorization: `Bearer ${token}` } : {}),
  };

  const fullUrl = joinUrl(environment.nextPublicFinforumApiUrl, version, path);

  try {
    return await apiFetch<T>(fullUrl, {
      ...restOptions,
      headers,
    });
  } catch (error) {
    if (error instanceof ApiError && error.status === 404) {
      return null as unknown as T;
    }
    throw error;
  }
}
