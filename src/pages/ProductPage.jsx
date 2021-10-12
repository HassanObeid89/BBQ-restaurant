export default function ProductPage({product}) {
    const {name,description,imgURL,price} = product
    // const ingredients = product.map((ingredient)=> ingredient.ingredients)
    return (
        <li>
            <h1>product page</h1>
            <span>@{name}@</span>
            <span>@{price}@</span>
            <span>@{description}@</span>
            <img src={imgURL} alt={description}/>
            {/* {product.ingredients} */}
        </li>
    )
}
