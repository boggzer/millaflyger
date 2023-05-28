// Projects
export const getProjects = `*[_type == 'project']{
  title,
  'slug': slug.current,
  'image': images[0].imageRow[0]{
    ...(file.asset->{
      'url': @.url,
      'lqip': @.metadata.lqip,
      'aspectRatio': @.metadata.dimensions.aspectRatio,
      'palette': @.metadata.palette
    })
  }
}`;
export const getProjectBySlug = `*[_type == 'project' && slug.current == $slug][0]{
  title,
  'slug': slug.current,
  'rows': images[] {
    'images': imageRow[].file.asset->
  }
}`;
export const getProjectSlugs = `*[_type == 'project' && defined(slug.current)][].slug.current`;

// Index page
export const getIndexPage = `*[_type == 'index'][0]`;
