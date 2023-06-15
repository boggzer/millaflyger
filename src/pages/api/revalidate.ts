import { NextApiRequest, NextApiResponse } from 'next';

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
}