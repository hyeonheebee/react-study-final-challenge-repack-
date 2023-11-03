import { NextApiRequest, NextApiResponse } from "next";
import { getName, getPassword } from "../../../lib/client/utils";

import client from "../../../lib/server/client";
import withHandler, { ResponseType } from "../../../lib/server/withHandler";

async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseType>
) {
  const getNameURL = "https://nickname.hwanmoo.kr/?format=json&count=2";
  let randomName;
  randomName = await getName(getNameURL);

  const { phone, email, username } = req.body;
  const authMethod = email ? { email } : phone ? { phone: +phone } : null;
  if (!authMethod) return res.status(400).json({ success: false });

  const randomString = getPassword();
  const existUser = await client.user.findUnique({
    where: {
      ...authMethod,
    },
  });
  if (existUser) return res.json({ success: true, user: existUser });
  if (!existUser) {
    const userToken = await client.token.create({
      data: {
        token: randomString,
        user: {
          connectOrCreate: {
            where: {
              ...authMethod,
            },
            create: {
              name: username ? username : randomName ? randomName : "Anonymous",
              ...authMethod,
            },
          },
        },
      },
    });

    return res.json({ success: true, token: userToken.token, user: existUser });
  }
}
export default withHandler(["POST"], handler);
