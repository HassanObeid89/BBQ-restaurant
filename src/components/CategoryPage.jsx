export default function CategoryPage({category}) {

    return (
        <div className='category-page'>
            {category.Name} <br/>
            {category.Description}
            <img src={category.imgURL} alt={category.Description}/>
            
        </div>
    )
}
