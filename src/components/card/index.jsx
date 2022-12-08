import data from '../../data/logements.json'
import { Link } from 'react-router-dom'


export default function Card() {

    return <>
        { data && data.map( ( flat, index ) => (
            <div key={ flat.id } className='card'>
                <Link key={ `${ flat }-${ index }` } className='cardContainer bg-black' to={ `/apartment/${ flat.id }` }>
                    <img key={ flat.cover } className='cardImg' src={ flat.cover } alt={ flat.title } />
                    <p key={ flat.title } className='cardTitle'>{ flat.title }</p>
                </Link>
            </div>
        ) ) }
    </>
}
