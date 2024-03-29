import { useState } from 'react'
import { useParams } from 'react-router-dom'
import Collapse from '../../components/Collapse'
import data from '../../data/logements.json'
import Slideshow from '../../components/Slideshow'
import { faStar } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'



export default function Apartment() {

    const { id } = useParams()
    const [ flatData ] = useState( data.find( ( flat ) => flat.id === id ) )
    const totalStars = 5
    const activeStars = flatData.rating
    const slides = flatData.pictures

    return <main className='flatMainContainer'>
        <div className='slideContainer'>
            { flatData.pictures.length > 1 ?
                <Slideshow slides={ slides } key={ flatData.id } /> :
                <img src={ flatData.cover } alt={ flatData.title } className='flatImg' />
            }
        </div>
        <div className='flatDetails'>
            <div className='infoContainer'>
                <div className='flatInfo'>
                    <h1 className='flatTitle'>{ flatData.title }</h1>
                    <h2 className='flatLocation'>{ flatData.location }</h2>
                    <div className='tagsContainer'>
                        { flatData.tags && flatData.tags.map( ( tag, index ) => (
                            <p className='tags'
                                key={ `${ tag }-${ index }` }>{ [ tag ] }</p>
                        ) ) }
                    </div>
                </div>
                <div className='starsAndHostContainer'>
                    <div className='starsContainer'>
                        { [ ...new Array( totalStars ) ].map( ( arr, index ) => {
                            return index < activeStars ?
                                <FontAwesomeIcon
                                    icon={ faStar }
                                    key={ `${ arr }-${ index }` }
                                    className='activeStar'
                                /> :
                                <FontAwesomeIcon
                                    icon={ faStar }
                                    key={ `${ arr }-${ index }` }
                                    className='inactiveStar'
                                />
                        } ) }
                    </div>
                    <div key={ flatData.host.name } className='host'>
                        <div className='hostNameContainer'>
                            <p className='hostName'>{ flatData.host.name }</p>
                        </div>
                        <div className='hostPicContainer'>
                            <img className='hostPic' src={ flatData.host.picture } alt={ flatData.host.name } />
                        </div>
                    </div>
                </div>
            </div>
            <div className='flatCollapseContainer'>
                <div className='flatDescripCollapse'>
                    <Collapse label="Description">
                        <p>{ flatData.description }</p>
                    </Collapse>
                </div>
                <div className='flatEquipCollapse'>
                    <Collapse label="Équipements">
                        { flatData.equipments && flatData.equipments.map( ( equip, index ) => (
                            <div>
                                <p key={ `${ equip }-${ index }` }>{ [ equip ] }</p>
                            </div>
                        )
                        ) }
                    </Collapse>
                </div>
            </div>
        </div>
    </main>
}
