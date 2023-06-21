import { SanityDocument } from '@sanity/client';
import Iframe from 'sanity-plugin-iframe-pane';
import { DefaultDocumentNodeResolver } from 'sanity/desk';

function getPreviewUrl(doc: SanityDocument) {
  const host =
    process.env.NODE_ENV === 'development'
      ? 'http://localhost:3000'
      : process.env.SANITY_BASE_URL;
  // TODO allow preview of other types like index page
  return `${host}/api/preview?slug=/projects/${doc?.slug?.current ?? ''}`;
}

export const defaultDocumentNode: DefaultDocumentNodeResolver = (
  S,
  { schemaType },
) => {
  switch (schemaType) {
    case `project`:
      return S.document().views([
        S.view.form(),
        S.view
          .component(Iframe)
          .options({
            url: getPreviewUrl,
          })
          .title('Preview'),
      ]);
    default:
      return S.document().views([S.view.form()]);
  }
};
