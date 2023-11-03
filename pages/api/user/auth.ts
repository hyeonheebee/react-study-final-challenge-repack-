import { NextApiRequest, NextApiResponse } from "next";

import client from "../../../lib/server/client";
import withHandler, { ResponseType } from "../../../lib/server/withHandler";

async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseType>
) {
  const { authorization } = req.headers;
  let tokenObj;
  let user;
  tokenObj = await client.token.findUnique({
    where: { token: authorization },
  });
  user = await client.user.findUnique({
    where: { id: tokenObj?.userId },
  });
  if (user) {
    return res.json({ success: true, user, id: user.id });
  }
}
export default withHandler(["POST"], handler);
