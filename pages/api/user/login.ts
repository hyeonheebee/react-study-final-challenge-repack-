import { NextApiRequest, NextApiResponse } from "next";

import client from "../../../lib/server/client";
import withHandler, { ResponseType } from "../../../lib/server/withHandler";

async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseType>
) {
  const { phone, email } = req.body;
  const authMethod = email ? { email } : phone ? { phone: +phone } : null;
  if (!authMethod) return res.status(400).json({ success: false });
  const user = await client.user.findUnique({
    where: {
      ...authMethod,
    },
  });
  let tokenObj;
  if (user) {
    tokenObj = await client.token.findUnique({
      where: { userId: user.id },
    });
  }

  return res.json({ success: true, user, token: tokenObj?.token });
}
export default withHandler(["POST"], handler);
