import { Products } from "@/app/types"
import Cart from "@/app/ui/Cart"

export async function getStaticPaths(){
    //Define the params that are used for Static Path
    try{
        const response = await fetch("/api/products");
        if(!response.ok){
            throw new Error("Failed to fetch products");
        }

        const products: Products[] = await response.json();

        if (!Array.isArray(products)){
            throw new Error("Products response is not an array")
        }

        //Generate paths from product names
        const paths= products.map((product) => ({
            params: {name: product.name}
        }));

        return {
            paths, // Returning all paths for static generation
            fallback: false // Set to true if you want to enable dynamic routes
        };

    }catch(error){
        console.error(error);
        return {
            paths: [], // Return an empty array if there's an error
            fallback: false // Set to false to avoid fallback behavior
        };
    }
}

export default async function Page({params}: {params: {name: string}}){ 

    const { name } = params;

    try{
        const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/api/products`);
        if(!response.ok){
            throw new Error("Failed to fetch product details");
        }

        const products: Products[] = await response.json();

        return(
            <main>
                <Cart products={products} name={name}/>
            </main>
        );

    }catch(error){
        console.error(error)
        return <div>Error loading product details</div>
    }
}



