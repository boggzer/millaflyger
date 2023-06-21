import { definePreview } from 'next-sanity/preview';
import { sanityConfig } from './config';

function onPublicAccessOnly() {
    throw new Error(`Unable to load preview as you're not logged in`)
}
export const usePreview = definePreview({ ...sanityConfig, onPublicAccessOnly })