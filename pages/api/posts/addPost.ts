// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import client from "@/prisma/client";
import type { NextApiRequest, NextApiResponse } from "next";
import { getServerSession } from "next-auth";
import { authOptions } from "../auth/[...nextauth]";

type Data = {
  message: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  if (req.method === "POST") {
    const session = await getServerSession(req, res, authOptions);
    if (!session) {
      return res.status(401).json({
        message: "Por favor efetue o login para poder adicionar posts",
      });
    }
    const title: string = req.body.title;

    // validations
    if (title.length > 300) {
      return res
        .status(403)
        .json({ message: "O texto precisa possuir menos que 300 caracteres." });
    }
    if (!title.length) {
      return res.status(403).json({ message: "Não deixe este item vazio." });
    }

    // Pegar usuário
    const prismaUser = await client.user.findUnique({
      where: {
        email: session.user?.email!,
      },
    });

    // criar o post
    try {
      const result = await client.post.create({
        data: {
          title,
          userId: prismaUser?.id!,
        },
      });
      return res.status(200).json({ message: JSON.stringify(result) });
    } catch (error) {
      res.status(403).json({ message: "Algo deu errado!" });
    }
  }
}
