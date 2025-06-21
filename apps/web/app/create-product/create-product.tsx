import createProduct from "./actions/create-product"

export default function CreateProduct() {
  return (
    <div>
      <h1>Create Product</h1>
      <form action={createProduct} className="flex flex-col gap-2">
        <div className="flex flex-col gap-2">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            name="name"
            id="name"
            placeholder="Name"
            className="border border-gray-300 rounded-md p-2"
          />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="price">Price:</label>
          <input
            type="number"
            name="price"
            id="price"
            placeholder="Price"
            className="border border-gray-300 rounded-md p-2"
          />
        </div>
        <button type="submit" className="bg-blue-500 text-white rounded-md p-2">
          Create product
        </button>
      </form>
    </div>
  )
}
