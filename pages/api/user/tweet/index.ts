import { NextApiRequest, NextApiResponse } from "next";

import client from "../../../../lib/server/client";
import withHandler, { ResponseType } from "../../../../lib/server/withHandler";

async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseType>
) {
  if (req.method === "GET") {
    const tweets = await client.tweet.findMany({});
    return res.json({ success: true, tweets });
  }
  if (req.method === "POST") {
    const {
      data: { text },
      user: { id },
    } = req.body;

    let userTweet;
    if (!id || !text) return res.status(400).json({ success: false });
    const user = await client.user.findUnique({
      where: {
        id,
      },
    });
    userTweet = await client.tweet.create({
      data: {
        tweet: text,
        user: {
          connect: {
            id: user?.id,
          },
        },
      },
    });

    return res.json({ success: true, userTweet });
  }
}

export default withHandler(["GET", "POST"], handler);
