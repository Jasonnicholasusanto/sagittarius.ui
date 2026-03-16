import {
  CreatedWatchlistResponse,
  GetMyWatchlistsResponse,
  WatchlistDetailCreateRequest,
} from "@/schemas/watchlist";
import { apiClient } from "@/services/api/client";
import { Endpoints } from "@/services/api/endpoints";

export async function getWatchlistTypes(): Promise<string[] | null> {
  return apiClient<string[]>(
    `${Endpoints.Watchlists.Base}${Endpoints.Watchlists.WatchlistTypes}`,
    {
      method: "GET",
      version: Endpoints.Watchlists.BaseVersion,
    },
  );
}

export async function getWatchlistQuantityTypes(): Promise<string[] | null> {
  return apiClient<string[]>(
    `${Endpoints.Watchlists.Base}${Endpoints.Watchlists.WatchlistQuantityTypes}`,
    {
      method: "GET",
      version: Endpoints.Watchlists.BaseVersion,
    },
  );
}

export async function getMyWatchlists(): Promise<GetMyWatchlistsResponse> {
  return apiClient<GetMyWatchlistsResponse>(
    `${Endpoints.Watchlists.Base}${Endpoints.Watchlists.MyWatchlists}`,
    {
      method: "GET",
      version: Endpoints.Watchlists.BaseVersion,
    },
  );
}

export async function createWatchlist(
  payload: WatchlistDetailCreateRequest,
): Promise<CreatedWatchlistResponse> {
  return apiClient<CreatedWatchlistResponse>(`${Endpoints.Watchlists.Base}`, {
    method: "POST",
    version: Endpoints.Watchlists.BaseVersion,
    body: JSON.stringify(payload),
  });
}
