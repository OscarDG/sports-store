import {prisma} from '@/app/api/prisma'

export async function GET() {

   try{
    const products = await prisma.product.findMany({
        where: {available: true}
    });

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