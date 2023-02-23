// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import client from "@/prisma/client";
import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "GET") {
    // Pegar todos os posts
    const data = await client.user.findMany({});

    // criar o post
    try {
      return res.status(200).json(data);
    } catch (error) {
      res.status(403).json({ message: "Algo deu errado!" });
    }
  }
}
