import { PreviewImageRow } from '../utils/components';

export default {
  name: 'project',
  title: 'Projects',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Project title',
      type: 'string',
      validation: (Rule) => Rule.required().min(1),
      initialValue: 'Title',
    },
    {
      name: 'slug',
      title: 'Slug',
      description: `Finish writing the project title and then click 'generate'.`,
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
    },
    {
      name: 'coverImage',
      type: 'image',
      title: 'Cover image',
      description:
        '* Required. Cover image showed in the list of all projects at /projects.',
      accept: 'image/*',
      validation: (Rule) =>
        Rule.custom((file) =>
          typeof file === 'undefined' ? 'Image file is required' : true,
        ),
    },
    {
      name: 'images',
      type: 'array',
      description: '* Required',
      title: 'Images',
      validation: (Rule) =>
        Rule.custom((blocks) => (blocks.length ? true : 'Image is required.')),
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
                  name: 'Image',
                  type: 'object',
                  fields: [
                    {
                      name: 'alt',
                      type: 'string',
                      title: 'Alternative text',
                      description:
                        'Write a sentence of what the image depicts. This is important for SEO and accessibility.',
                      validation: (Rule) => [
                        Rule.max(100),
                        Rule.min(10).warning(
                          'Please include a thorough description.',
                        ),
                      ],
                    },
                    {
                      name: 'file',
                      type: 'image',
                      title: 'Image file',
                      accept: 'image/*',
                      description: '* Required',
                      validation: (Rule) =>
                        Rule.custom((file) =>
                          typeof file === 'undefined'
                            ? 'Image file is required'
                            : true,
                        ),
                    },
                  ],
                  preview: {
                    select: {
                      media: 'file',
                    },
                  },
                },
              ],
              options: {
                layout: 'grid',
              },
            },
          ],
          components: {
            preview: PreviewImageRow,
          },
          preview: {
            select: {
              media: 'imageRow',
            },
            prepare: (selection) => {
              return { ...selection, layout: 'media' };
            },
          },
        },
      ],
      preview: {
        select: {
          images: 'images',
          image: 'images.0.imageRow.0.file',
        },
        prepare: ({ images, image }) => {
          return {
            title: `Gallery block of ${Object.keys(images).length} images`,
            subtitle: `Alt text: ${image.alt}`,
            media: image,
          };
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
  ],
  preview: {
    select: {
      title: 'title',
    },
  },
};
