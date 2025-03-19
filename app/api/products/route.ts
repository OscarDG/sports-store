import { PrismaClient } from "@prisma/client"

const globalForPrisma = global as unknown as { prisma?: PrismaClient};
export const prisma = globalForPrisma.prisma ?? new PrismaClient();

if (process.env.NODE_ENV != "production") globalForPrisma.prisma = prisma;

export async function GET() {
   try{
    const products = await prisma.product.findMany();

    return new Response(
        JSON.stringify(products),
        {status: 200, headers: { "Content-Type": "application/json" }}
    );
   }catch(error){
    console.error("Error fetching products:", error);
    return new Response(
        JSON.stringify({error: "Internal Server Error" }),
        {status: 500, headers: { "Content-Type": "application/json" }}
    );
   }
    
}