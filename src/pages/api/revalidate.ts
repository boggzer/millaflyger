import { parseBody } from 'next-sanity/webhook'
import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
    message: string
}

const secret = process.env.SANITY_WEBHOOK_SECRET || '123TEST' // temporary during dev

export default async function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
    if (req.method !== 'POST') {
        console.error('Must be a POST request')
        return res.status(405).json({ message: 'Must be a POST request' })
    }

    const { isValidSignature, body } = await parseBody(req, secret);

    if (!isValidSignature) {
        const message = 'Invalid signature';
        console.warn(message);
        return res.status(401).json({ message });
    }

    try {
        const { type, slug } = body;

        await res.revalidate(`https://nextjs-ssr-test.d3v2rqv1ub3q0i.amplifyapp.com/projects/${slug}`)
        await res.revalidate(`https://nextjs-ssr-test.d3v2rqv1ub3q0i.amplifyapp.com/projects`)

        return res.json({ message: `Revalidated '${type}' with slug '${slug}'` })

    } catch (err) {
        return res.status(500).send({ message: 'Error revalidating' })
    }
}