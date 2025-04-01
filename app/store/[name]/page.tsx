import { Products } from "@/app/types"
import { monaSans } from '@/app/fonts'
import clsx from "clsx";
import FwButton from "@/app/ui/FwButton";
import BwButton from "@/app/ui/BwButton";
import Image from "next/image";

export async function staticParams(){
    //Define the params that are used for Static Path
    try{
        const response = await fetch("/api/products");
        if(!response.ok){
            throw new Error("Failed to fetch products");
        }

        const products: Products[] = await response.json();

        return products.map((product) => ({
            name: product.name
        }))

    }catch(error){
        console.error(error)
    }
}

export default async function Page ({params}: {params: Promise<{name: string}>}){
    const {name} = await params

    //Fetch the products data within the Page component
    try{
        const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/api/products`);
        if(!response.ok){
            throw new Error("Failed to fetch product details");
        }

        const products: Products[] = await response.json();

        //Look for the specific product based on the param given
        const product = products.find((p) => p.name.toLocaleLowerCase() === name.toLocaleLowerCase());

        if(!product){
            return <div>Product not found</div>;
        }

        return(
            <main>
                <section className={`product_section flex flex-row w-[100%] h-[95vh]`}>
                    <div className="product_image flex flex-col justify-evenly items-center w-[50%] drop-shadow-md">
                        <div className="w-[80%] h-[80%] overflow-hidden rounded-2xl">
                            <Image className='object-cover w-[100%] h-[100%]' src={`/${product.tag}.webp`} width={400} height={500} alt={product.name} />
                        </div>
                    </div>
                    <div className={`${monaSans.className} product_info relative flex flex-col justify-evenly items-center w-[50%]`}>
                        <h2 className="absolute top-30 left-2 w-[400px] h-auto pb-2 text-3xl border-b-1">{product.name}</h2>
                        <span className={clsx(product.category === 'Sports' ? `bg-yellow-500`: product.category === 'Gadgets'? 'bg-green-300' : product.category === 'Clothes'? 'bg-mainred': null, `absolute top-31 right-60 flex items-center w-auto h-auto p-2 rounded-4xl text-[0.8rem]`)}>{product.category}</span>
                        <p className="absolute top-45 left-2 w-[400px]">{product.description}</p>
                        <p className="absolute top-70 left-2 w-[200px] text-[1.2rem] font-bold">${product.price} USD</p>
                        <div className="absolute bottom-40 left-2 flex flex-row justify-between w-[50%]">
                            <div className="w-[35%] h-[50px]">
                                <BwButton width={'100'} height={'100'} href="/store" text="Go back"/>
                            </div>
                            <div className="w-[35%] h-[50px]">
                                <FwButton width={'100'} height={'100'} href={`store/${encodeURIComponent(product.name)}`} text='Buy it'/>
                            </div>
                        </div>
                    </div>
                </section> 
            </main>  
        )

    }catch(error){
        console.error(error)
        return <div>Error loading product details</div>
    }
  
}



