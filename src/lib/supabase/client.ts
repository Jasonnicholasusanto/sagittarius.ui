import { createBrowserClient } from '@supabase/ssr'
import { environment } from '../utils/env'

export function createClient() {
  return createBrowserClient(
    environment.nextPublicSupabaseUrl,
    environment.nextPublicSupabasePublishableOrAnonKey
  )
}