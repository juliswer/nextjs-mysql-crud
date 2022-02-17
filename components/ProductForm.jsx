export function ProductForm() {

    const handleSubmit = e => {
        e.preventDefault();
        console.log('creating a product')
    }

  return (
    <div className="bg-gray-300">
    <form onSubmit={handleSubmit}>

        <label htmlFor="name">Name: </label>
        <input type="text" name="name" />

        <label htmlFor="price">Price:</label>
        <input type="text" name="price" id="price" />

        <label htmlFor="description">Description: </label>
        <textarea name="description" rows="2"></textarea>

        <button>Save Product</button>
    </form>
    </div>
  )
}