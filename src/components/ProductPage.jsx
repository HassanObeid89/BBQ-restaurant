export default function ProductPage({product}) {
    // const ingredients = product.map((ingredient)=> ingredient.ingredients)
    return (
        <div>
            {product.name} <br/>
            {product.description}
            <img src={product.imgURL} alt={product.description}/>
            {product.ingredients}
        </div>
    )
}
