import { isValidSignature, SIGNATURE_HEADER_NAME } from '@sanity/webhook'
import type { NextApiRequest, NextApiResponse } from 'next'

const secret = process.env.SANITY_REVALIDATE_TOKEN;

export default async function handler(req: NextApiRequest, res: NextApiResponse<Record<string, unknown>>) {
    const signature = req.headers[SIGNATURE_HEADER_NAME]
    const body = await readBody(req) // Read the body into a string
    
    const message = [`Secret: ${secret}`, `Signature: ${signature}`, `Body: ${body}`, Object.keys(req.headers).join('/')]
    if (!isValidSignature(body, signature as any, secret)) {
        //res.status(401).json({ success: false, message: `Invalid signature - ${secret}, ${body}, ${signature}`, })
        //return
        message.push('Invalid signature.')
    }

    try {
        message.push(`Slug: ${JSON.parse(req.body)?.slug}`)
        //await res.revalidate(`https://nextjs-ssr-test.d3v2rqv1ub3q0i.amplifyapp.com/projects/${slug}`)
        await res.revalidate(`/projects`)

        return res.json({ message })//json({ revalidated: true })

    } catch (err) {
        message.push(`Error: ${err}`);
        return res.status(500).send({ message });//send({ message: 'Error revalidating', error: err, res: Object.keys(res).join(', ') })
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