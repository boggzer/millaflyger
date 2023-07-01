import type { SanityClient } from '@sanity/client';
import { client } from './sanity.client';

export function getClient(previewToken?: string): SanityClient {
  return previewToken
    ? client.withConfig({
        token: previewToken,
        useCdn: false,
        ignoreBrowserTokenWarning: true,
        perspective: 'previewDrafts',
      })
    : client;
}
