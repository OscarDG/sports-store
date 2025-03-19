import { Products } from "../types";

type headerProducts = {
    products: Products[]
}

export default function ProductsSect({products}:headerProducts){

    return (
        <section className="relative flex flex-col w-[100%] h-[100vh]">
        <div>
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