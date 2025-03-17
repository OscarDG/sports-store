'use client';
import StoreHeader from "../ui/StoreHeader";
import ProductsSect from "../ui/Products";
import products from '@/app/api/products.json'

export default function Store(){
    return(
        <>
            <StoreHeader products={products}/>
            <ProductsSect products={products}/>
        </>
    )
}