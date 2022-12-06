import { useState } from 'react'
import { useParams } from 'react-router-dom'
import data from '../../data/logements.json'


export default function Slideshow() {
    const { id } = useParams()
    const [ flatData ] = useState( data.find( ( flat ) => flat.id === id ) )

    return <div>
        { flatData.pictures.map( ( pic, index ) => {
            return <img src={ pic[ index ] } alt={ flatData.title } />
        } ) }
        <img src={ flatData.pictures } alt={ flatData.title } />
    </div>
}
