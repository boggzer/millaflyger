import React from 'react';
import { ListItemBuilder, StructureBuilder } from 'sanity/desk';

import { Icon } from './utils/components';

export const structure = (S: StructureBuilder) =>
  S.list()
    .title('Base')
    .items([
      S.listItem()
        .title('Website')
        .icon(() => <Icon type='index' />)
        .child(
          S.list()
            .title('Pages')
            .items([
              S.listItem()
                .id('index')
                .title('Index Page')
                //.icon(() => <Icon type='index' />)
                .child(S.document().schemaType('index').documentId('index')), // Prevent array wrap to single line https://github.com/prettier/prettier-vscode/issues/352#issuecomment-417471927
              S.listItem()
                .id('about')
                .title('About Page')
                //.icon(() => <Icon type='about' />)
                .child(S.document().schemaType('about').documentId('about')),
            ]),
        ),
      ...S.documentTypeListItems().reduce(
        (acc: ListItemBuilder[], item: ListItemBuilder) => {
          if (['index', 'about'].includes(`${item.getId()}`)) {
            return acc;
          }

          return [...acc, item.icon(() => <Icon type={`${item.getId()}`} />)];
        },
        [],
      ),
    ]);
