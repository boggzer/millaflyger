import { NextApiRequest, NextApiResponse } from 'next';

export default function preview(req: NextApiRequest, res: NextApiResponse) {
  res.setDraftMode({ enable: true });
  res.writeHead(307, {
    Location: req.query.slug ? `/projects/${req.query.slug}` : '',
  });
  res.end();
}
