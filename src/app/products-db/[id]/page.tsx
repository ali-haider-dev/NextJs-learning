
import { getProduct } from "@/prisma-db";
import EditProductForm from "./ProductEditForm";
import { Product } from "../page";
import { notFound } from "next/navigation";
// import SubmitButton from "@/components/submit";

export default async function EditProductPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const product:Product |null = await getProduct(parseInt(id));
  
if(!product){
  notFound();
}
  return (
 <EditProductForm product= {product}/>
  );
}
