import data from '../../data/logements.json'


export default function Card() {
    return <>
        { data.map( ( flat ) => (
            <div key={ flat.id } className='cardContainer bg-black'>
                <img className='cardImg' src={ flat.cover } alt={ flat.title } />
                <p className='cardTitle'>{ flat.title }</p>
            </div>
        ) ) }
    </>
}
