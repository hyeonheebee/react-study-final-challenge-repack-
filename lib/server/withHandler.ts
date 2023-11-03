import { NextApiRequest, NextApiResponse } from "next";

export interface ResponseType {
  success: boolean;
  [key: string]: any;
}
export default function withHandler(
  methods: Array<"GET" | "POST" | "DELETE">,
  handlerFn: (req: NextApiRequest, res: NextApiResponse) => void
) {
  return async function (
    req: NextApiRequest,
    res: NextApiResponse
  ): Promise<any> {
    if (!req.method && !methods.includes(req.method as any)) {
      return res.status(405).end();
    }
    try {
      await handlerFn(req, res);
    } catch (error) {
      return res.status(500).json({ error });
    }
  };
}
