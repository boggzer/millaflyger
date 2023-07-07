import { TextElement } from '../utils/components';

export default {
  name: 'index',
  title: 'Index Page',
  type: 'document',
  fields: [
    {
      name: 'content',
      type: 'array',
      title: 'Content',
      of: [
        {
          type: 'block',
          styles: [
            { title: 'Normal', value: 'normal', component: TextElement },
            { title: 'Heading 1', value: 'h1', component: TextElement },
            { title: 'Heading 2', value: 'h2', component: TextElement },
            { title: 'Heading 3', value: 'h3', component: TextElement },
            { title: 'Heading 4', value: 'h4', component: TextElement },
            { title: 'Heading 5', value: 'h5', component: TextElement },
          ],
          marks: {
            decorators: [
              { title: 'Bold', value: 'strong' },
              { title: 'Cursive', value: 'em' },
            ],
          },
        },
        {
          type: 'image',
          name: 'indexPageImage',
          title: 'Image',
        },
      ],
    },
  ],
};
