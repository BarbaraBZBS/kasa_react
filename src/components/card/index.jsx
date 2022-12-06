import data from '../../data/logements.json'
import { Link } from 'react-router-dom'


export default function Card() {

    return <>
        { data && data.map( ( flat ) => (
            <Link key={ flat.id } className='cardContainer bg-black' to={ `/apartment/${ flat.id }` }>
                <img className='cardImg' src={ flat.cover } alt={ flat.title } />
                <p className='cardTitle'>{ flat.title }</p>
            </Link>
        ) ) }
    </>
}
