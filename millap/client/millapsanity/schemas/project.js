export default {
  name: 'project',
  title: 'Project',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Project title',
      type: 'string',
    },
    {
      name: 'slug',
      title: 'Slug',
      description:
        'Finish writing the project title and then click "generate".',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
    },
    {
      name: 'images',
      type: 'array',
      title: 'Images',
      of: [
        {
          title: 'Image row',
          type: 'object',
          fields: [
            {
              name: 'imageRow',
              title: 'Image row',
              type: 'array',
              of: [
                {
                  type: 'image',
                },
              ],
              options: {
                layout: 'grid',
              },
            },
          ],
        },
      ],
      preview: {
        select: {
          media: 'image.0',
          title: 'hej',
        },
      },
    },
    {
      name: 'tags',
      title: 'Tags',
      type: 'array',
      of: [{ type: 'reference', to: { type: 'tag' } }],
      options: {
        layout: 'tags',
      },
    },
    {
      name: 'publishedAt',
      title: 'Published at',
      type: 'datetime',
    },
  ],
  preview: {
    select: {
      title: 'title',
    },
  },
};
