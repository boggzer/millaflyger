/* import { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    if (req.query.secret !== process.env.NEXT_PUBLIC_API_ROUTE_TOKEN) {
        return res.status(401).json({ message: 'Invalid token' });
    }

    try {
        const paths = (req.query.paths as string).split(',');

        for (let i = 0; i < paths.length; i++) {
            await res.revalidate(paths[i]);
        }

        return res.json({ revalidated: true });
    } catch (err) {
        return res.status(500).send('Error revalidating');
    }
} */

/* export function createImprovedPublishAction(originalPublishAction) {
    const PublishAndRevalidate = (props) => {
        const originalResult = originalPublishAction(props)

        const [status, setStatus] = useState('pending');

        const label = useMemo(() => {
            switch (status) {
                case 'success':
                    return 'Updated';
                case 'error':
                    return 'Something went wrong';
                default:
                    return 'Update post';
            }
        }, [status]);


        return {
            ...originalResult,
            onHandle: async () => {
                // Add our custom functionality
         /*        console.log('Hello world!')
                if (props.type === 'project') {
                    try {
                        await revalidatePaths([`/projects/${props.draft.slug.current}`, '/projects']);

                        setStatus('success');
                    } catch (err) {
                        setStatus('error');
                    } finally {
                        // Signal that the action is completed
                        props.onComplete();
                    }
                } 
                // then delegate to original handler
                originalResult.onHandle()
            },
        }
    }
    return PublishAndRevalidate
} 

async function revalidatePaths(paths: string[]) {
    try {
        const endpoint = new URL('https://www.millaflyger.com/api/projects');

        endpoint.searchParams.append('paths', paths.join(','));
        endpoint.searchParams.append('secret', import.meta.env.SANITY_STUDIO_API_ROUTE_TOKEN);

        return fetch(endpoint.href);
    } catch (err) {
        // eslint-disable-next-line no-console
        console.error(err);

        return null;
    }
} */

import { isValidRequest } from '@sanity/webhook'
import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
  message: string
}

const secret = process.env.SANITY_WEBHOOK_SECRET

export default async function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
  if (req.method !== 'POST') {
    console.error('Must be a POST request')
    return res.status(405).json({ message: 'Must be a POST request' })
  }

  if (!isValidRequest(req, secret)) {
    res.status(401).json({ message: 'Invalid signature' })
    return
  }

  try {
    const {
      body: { type, slug },
    } = req

    switch (type) {
      case 'project':
        await res.revalidate(`/projects/${slug}`)
        await res.revalidate(`/projects`)

        return res.json({ message: `Revalidated '${type}' with slug '${slug}'` })
    }

    return res.json({ message: 'No managed type' })
  } catch (err) {
    return res.status(500).send({ message: 'Error revalidating' })
  }
}