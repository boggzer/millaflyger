import { isValidSignature, SIGNATURE_HEADER_NAME } from '@sanity/webhook'
import type { NextApiRequest, NextApiResponse } from 'next'

export default async function handler(req: NextApiRequest, res: NextApiResponse<Record<string, unknown>>) {
    const signature = req.headers[SIGNATURE_HEADER_NAME]
    const body = await readBody(req) // Read the body into a string

    if (!isValidSignature(body, signature as string, process.env.SANITY_REVALIDATE_TOKEN)) {
        return res.status(401).json({ message: 'Invalid signature' })
    }

    try {
        await res.revalidate('/projects')
        await res.revalidate(`/projects/${JSON.parse(body)?.slug}`)

        return res.json({ revalidated: true })

    } catch (err) {
        return res.status(500).send({ message: 'Error revalidating', error: err })
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