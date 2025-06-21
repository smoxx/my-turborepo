import CreateProduct from "./create-product/create-product";
import Products from "./products/products";

export const dynamic = "force-dynamic"

export default function Page() {
  return (
    <div className="flex flex-col gap-10 max-w-md mx-auto py-10">
      <CreateProduct />
      <Products />
    </div>
  )
}
