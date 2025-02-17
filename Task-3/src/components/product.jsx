function Product(Props){
    return(
        <div className="product" >
            <img src={Props.product.image} alt="product img" />
            <h2>{Props.product.title}</h2>
            <p className="description">{Props.product.description}</p>
            <div className="price">
                <span> <span className="lastPrice">{Math.round(Props.product.price)+50}$</span>  {Math.round(Props.product.price)}$</span>
                <button>Buy</button>
            </div>
            
        </div>
    )
}
export default Product