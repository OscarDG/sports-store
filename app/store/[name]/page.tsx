import { Products } from "@/app/types"
import Cart from "@/app/ui/Cart"

export async function generateStaticParams(){
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
        return products.map((product) => ({
            name: product.name
        }));

    } catch (error) {
        console.error(error);
        return []
    }
}

export async function generateMetadata({params}: {params: {name: string}}){

    try{
        const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/api/products`);
        if(!response.ok){
            throw new Error("Failed to fetch product details");
        }

        const products: Products[] = await response.json();
        const product = products.find((product) => product.name.toLowerCase() === params.name.toLowerCase());

        return {
            title: product ? product.name : "Product not found",
            description: product ? product.description : "Product not found",
        };

    } catch(error){
        console.error(error);
        return {
        title: "Products not found",
        description: "Error loading product details",
        };
    }
}

export default async function Page({params}: {params: {name: string}}){ 

    const { name } = params;

    try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/api/products`);
        if (!response.ok) {
            throw new Error("Failed to fetch product details");
        }

        const products: Products[] = await response.json();
        const product = products.find((p) => p.name.toLowerCase() === name.toLowerCase());

        if (!product) {
            return <div>Product not found</div>;
        }

        return (
            <main>
                <Cart product={product} name={name} />
            </main>
        );
    } catch (error) {
        console.error(error);
        return <div>Error loading product details</div>;
    }
}




