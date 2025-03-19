import {prisma} from '@/app/api/prisma'

export async function GET() {
   try{
    const products = await prisma.product.findMany();

    const formattedProducts = products.map(({id, name, price, category}) => ({
        id,
        name,
        price,
        category,
        available: true
    }));

    return new Response(
        JSON.stringify(formattedProducts),
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