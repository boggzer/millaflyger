import { isValidSignature, SIGNATURE_HEADER_NAME } from '@sanity/webhook'
import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
    message: string
}

const secret = process.env.SANITY_WEBHOOK_SECRET || '123TEST' // temporary during dev

export default async function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
    const signature = req.headers[SIGNATURE_HEADER_NAME]
    const body = await readBody(req) // Read the body into a string
    if (!isValidSignature(body, signature, secret)) {
        res.status(401).json({ success: false, message: 'Invalid signature' })
        return
    }

    try {
        const { body: { type, slug } } = req;

        await res.revalidate(`https://nextjs-ssr-test.d3v2rqv1ub3q0i.amplifyapp.com/projects/${slug}`)
        await res.revalidate(`https://nextjs-ssr-test.d3v2rqv1ub3q0i.amplifyapp.com/projects`)

        return res.json({ message: `Revalidated '${type}' with slug '${slug}'` })

    } catch (err) {
        return res.status(500).send({ message: 'Error revalidating' })
    }
}

// Next.js will by default parse the body, which can lead to invalid signatures
export const config = {
    api: {
        bodyParser: false,
    },
}

async function readBody(readable) {
    const chunks = []
    for await (const chunk of readable) {
        chunks.push(typeof chunk === 'string' ? Buffer.from(chunk) : chunk)
    }
    return Buffer.concat(chunks).toString('utf8')
}