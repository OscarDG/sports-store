import { NextApiRequest, NextApiResponse } from 'next';
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient();

export default async function handler(req: NextApiRequest, res: NextApiResponse){
    if(req.method === 'POST'){
        try{
            const { email } = req.body;

            if(!email || typeof email !== "string"){
                return res.status(400).json({ error: "Valid email is required" });
            }

            const existingSubscriber = await prisma.subscriber.findUnique({
                where: {email},
            });

            if(existingSubscriber){
                return res.status(409).json({ message: "Email already subscribed" });
            }

            await prisma.subscriber.create({
                data: {email},
            });

            return res.status(200).json({ message: "Subscription successful!" });
        }catch(error) {
            return res.status(500).json({ error: "Internal Server Error" });
        }
    }

    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
}