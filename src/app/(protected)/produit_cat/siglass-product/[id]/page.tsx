"use client";

import ProductSelectedView from "@/features/Products/siglass-products/views/product-selected-view";
import { useParams } from "next/navigation";

export default function Page() {
    const {id} = useParams<{id:string}>()
    return (    
        <ProductSelectedView id={id}/>
    )
}