import Button from '../components/Button'
export default function MenuPage({category}) {
    const {imgURL,name, description} = category
    return (
        <li className='menu-page'>
            <img src={imgURL} alt={description}/>
            <h1>{name}</h1>
            <p>{description}</p>
            <Button text='View'/>
        </li>
    )
}
