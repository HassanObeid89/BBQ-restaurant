export default function CategoryPage({category}) {

    return (
        <div>
            {category.Name} <br/>
            {category.Description}
            <img src={category.imgURL} alt={category.Description}/>
        </div>
    )
}
