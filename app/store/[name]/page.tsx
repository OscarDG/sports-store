import { Products } from "@/app/types"
import Cart from "@/app/ui/Cart"

export async function GetParams(){
    //Define the params that are used for Static Path
    try{
        const response = await fetch("/api/products");
        if(!response.ok){
            throw new Error("Failed to fetch products");
        }

        const products: Products[] = await response.json();

        console.log(products)

        if (!Array.isArray(products)){
            throw new Error("Products response is not an array")
        }

        return products.map((product) => ({
            name: product.name,
        }))

    }catch(error){
        console.error(error)
    }
}

export default async function Page({ params }: {params: {name: string} }){

    const { name } = params

    //Fetch the products data within the Page component
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
        )

    }catch(error){
        console.error(error)
        return <div>Error loading product details</div>
    }
  
}



