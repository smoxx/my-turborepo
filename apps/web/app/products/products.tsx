import { Product } from "@repo/types"

export default async function Products() {
  const response = await fetch(`${process.env.API_URL}/products`, {
    next: { tags: ["products"] },
  })

  const products: Product[] = await response.json()

  return (
    <div className="">
      <h1>Products</h1>
      <div className="grid grid-cols-3 gap-2">
        {products.map((product) => (
          <div key={product.id} className="flex flex-col gap-2 border rounded p-4">
            <h2 className="text-lg font-bold">{product.name}</h2>
            <p className="text-sm text-gray-500">{product.price}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
