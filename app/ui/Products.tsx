import { useEffect, useState } from "react"

interface Product {
    id: string,
    name: string,
    price: number,
    category: string,
    thumb: string
}

export default function ProductsSect(){

    const [products, setProducts] = useState<Product[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        async function fetchProducts() {
            try{
                const response = await fetch("/api/products");
                if(!response.ok){
                    throw new Error("Failed to fetch products");
                }

                const data: Product[] = await response.json();
                setProducts(data);
            }catch(error){
                console.error(error)
                setError(error instanceof Error? error.message : "Unknown error");
            }finally{
                setLoading(false);
            }
        }

        fetchProducts();
    }, [])

    if(loading) return <p>Loading products...</p>
    if(error) return <p>Error: {error}</p>

    return (
        <>
        <div className="w-[100%] h-[100vh]">{products.length}</div>
        <div>
            {products.map((product) => (
                <div key={product.id}>
                    <h2>{product.name}</h2>
                    <p>{product.price}</p>
                    <p>{product.category}</p>
                </div>
            ))}
        </div>
        </>
    )
}