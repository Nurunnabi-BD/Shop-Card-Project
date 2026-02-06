function SingleProduct({ product, cart, setCart }) {
  return (
    <>
      <div className="card bg-base-100 w-80 shadow-sm">
        <figure>
          <img src={product.image} alt={product.title} />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{product.title}</h2>
          <p>{product.description}</p>
          <div className="card-actions place-content-between items-center">
            <h2>${product.price}</h2>
            {cart.includes(product) ? (
              <button
                onClick={() => setCart(cart.filter((c) => c.id !== product.id))}
                className="btn btn-success"
              >
                Remove from Card
              </button>
            ) : (
              <button
                onClick={() => setCart([...cart, product])}
                className="btn btn-primary"
              >
                Add Card
              </button>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
export default SingleProduct;
