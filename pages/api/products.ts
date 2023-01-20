import type { NextApiRequest , NextApiResponse} from 'next';




function handler   (req : NextApiRequest , res : NextApiResponse) {

      res.status(200).json({name : 'hello ali'})
}

export default handler