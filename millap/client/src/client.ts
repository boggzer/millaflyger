import client from '@sanity/client';

export default client({
  projectId: '6i2hyzqu',
  dataset: 'production',
  useCdn: true,
  apiVersion: '2021-05-14',
  token: process.env.SANITY_AUTH_TOKEN,
});
