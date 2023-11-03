import { NextApiRequest, NextApiResponse } from "next";

import client from "../../../../../lib/server/client";
import withHandler, {
  ResponseType,
} from "../../../../../lib/server/withHandler";

async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseType>
) {
  const { id } = req.query;
  let singleTweet;
  let user;
  let existedLike;
  if (!id) return res.status(400).json({ success: false });

  singleTweet = await client.tweet.findUnique({
    where: {
      id: +id,
    },
  });
  if (singleTweet) {
    user = await client.user.findUnique({
      where: {
        id: singleTweet.userId,
      },
    });
    existedLike = await client.like.findFirst({
      where: {
        tweetId: +id,
        userId: user?.id,
      },
    });
  }

  return res.json({ success: true, singleTweet, user, existedLike });
}

export default withHandler(["GET"], handler);
