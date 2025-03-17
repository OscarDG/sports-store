import { Products } from "../types"

type sectionProducts = {
    products: Products[]
}

export default function ProductsSect({products}:sectionProducts){

    return (
        <div className="w-[100%] h-[100vh]">{products.length}</div>
    )
}