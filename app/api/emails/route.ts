import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function POST(req: Request){
        try{
            const { email } = await req.json();

            if(!email || typeof email !== "string"){
                return new Response(
                    JSON.stringify({ error: 'Valid email is required' }), { status: 400, headers: { 'Content-Type': 'application/json' }}
                );
            }

            const existingSubscriber = await prisma.subscriber.findUnique({
                where: {email},
            });

            if(existingSubscriber){
                return new Response(
                    JSON.stringify({ message: 'Email already subscribed' }), { status: 409, headers: { 'Content-Type': 'application/json' }}
                );
            }

            await prisma.subscriber.create({
                data: {email},
            });

            return new Response(
                JSON.stringify({message: 'Subscription successful!'}), { status: 200, headers: { 'Content-Type': 'application/json' }}
            );

        } catch(error) {
            console.error("Error processing subscription: ", error)
            return new Response(
                JSON.stringify({error: 'Internal Server Error'}),{ status: 500, headers: { 'Content-Type': 'application/json' }}
            );
        }
    }

    export async function GET(){
        return new Response(
            JSON.stringify({error: 'Method not allowed'}),
            { status: 405, headers: { 'Content-Type': 'application/json' } }
        )
    }