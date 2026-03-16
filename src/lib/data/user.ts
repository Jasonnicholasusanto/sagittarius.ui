"use server";

import { UserPublicResponse } from "@/schemas/publicUser";
import { apiClient } from "@/services/api/client";
import { Endpoints } from "@/services/api/endpoints";

export async function getUserByUsername(
  username: string,
): Promise<UserPublicResponse | null> {
  try {
    return await apiClient<UserPublicResponse>(
      `${Endpoints.Users.Base}${Endpoints.Users.UserByUsername(username)}`,
      {
        version: Endpoints.Users.BaseVersion,
      },
    );
  } catch (e: any) {
    if (e?.status === 404) return null;
    throw e;
  }
}
