export default {
    name: 'project',
    title: 'Project',
    type: 'document',
    fields: [{
            name: 'title',
            title: 'Project title',
            type: 'string',
            validation: Rule => Rule.required().min(1),
            initialValue: 'Title'
        },
        {
            name: 'slug',
            title: 'Slug',
            description: 'Finish writing the project title and then click \'generate\'.',
            type: 'slug',
            options: {
                source: 'title',
                maxLength: 96,
            },
        },
        {
            name: 'images',
            type: 'array',
            description: '* Required',
            title: 'Images',
            validation: Rule =>
                Rule.custom(blocks => blocks.length ? true : 'Image is required.'),
            of: [{
                title: 'Image row',
                type: 'object',
                fields: [{
                    name: 'imageRow',
                    title: 'Image row',
                    type: 'array',
                    of: [{
                        name: 'Image',
                        type: 'object',
                        fields: [{
                                name: 'alt',
                                type: 'string',
                                title: 'Alternative text',
                                description: 'Write a sentence of what the image depicts. This is important for SEO and accessibility.',
                                validation: Rule => [
                                    Rule.max(100),
                                    Rule.min(10).warning('Please include a thorough description.')
                                ]
                            },
                            {
                                name: 'file',
                                type: 'image',
                                title: 'Image file',
                                accept: 'image/*',
                                description: '* Required',
                                validation: Rule => Rule.custom(file =>
                                    typeof file === 'undefined' ? 'Image file is required' : true
                                )
                            }
                        ]
                    }],
                    options: {
                        layout: 'grid',
                    },
                }, ],
            }, ],
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
    ],
    preview: {
        select: {
            title: 'title',
        }
    },
};