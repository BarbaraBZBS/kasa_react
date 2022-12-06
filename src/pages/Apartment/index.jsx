import { useState } from 'react'
import { useParams } from 'react-router-dom'
import Collapse from '../../components/Collapse'
import data from '../../data/logements.json'
import Slideshow from '../../components/Slideshow'

export default function Apartment() {

    const { id } = useParams()
    const [ flatData ] = useState( data.find( ( flat ) => flat.id === id ) )

    return <div>
        { flatData.pictures > 1 ?
            <Slideshow /> : <img src={ flatData.cover } alt={ flatData.title } /> }

        <h1>{ flatData.title }</h1>
        <h2>{ flatData.location }</h2>
        { flatData.tags && flatData.tags.map( ( tag, index ) => (
            <div>
                <p key={ `${ tag }-${ index }` }>{ [ tag ] }</p>
            </div>
        )
        ) }
        <p>{ flatData.rating }</p>
        <div key={ flatData.host.name }>
            <p>{ flatData.host.name }</p>
            <img src={ flatData.host.picture } alt={ flatData.host.name } />
        </div>
        <Collapse label="Description">
            <p>{ flatData.description }</p>
        </Collapse>
        <Collapse label="Équipements">
            { flatData.equipments && flatData.equipments.map( ( equip, index ) => (
                <div>
                    <p key={ `${ equip }-${ index }` }>{ [ equip ] }</p>
                </div>
            )
            ) }
        </Collapse>
    </div>
}
