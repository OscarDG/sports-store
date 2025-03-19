import { Products } from "../types";

type headerProducts = {
    products: Products[]
}

export default function ProductsSect({products}:headerProducts){

    return (
        <section className="relative flex flex-col justify-center items-center w-[100%] h-[100vh]">
        <div className="flex flex-col w-[90%] h-[90%] bg-amber-400">
            {products.map((product) => (
                <div key={product.id}>
                    <h2>{product.name}</h2>
                    <p>{product.price}</p>
                    <p>{product.category}</p>
                </div>
            ))}
        </div>
        </section>
    )
}