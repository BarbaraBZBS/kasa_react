import { useState } from 'react'
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons'
import { faChevronRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'



export default function Slideshow( { slides } ) {
    const [ currentIndex, setCurrentIndex ] = useState( 0 )
    const goToPrevious = () => {
        const isFirstSlide = currentIndex === 0
        const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1
        setCurrentIndex( newIndex )
    }
    const goToNext = () => {
        const isLastSlide = currentIndex === slides.length - 1
        const newIndex = isLastSlide ? 0 : currentIndex + 1
        setCurrentIndex( newIndex )
    }

    return <div className='slider'>
        <FontAwesomeIcon icon={ faChevronLeft } className='leftArrow' onClick={ goToPrevious } />
        <FontAwesomeIcon icon={ faChevronRight } className='rightArrow' onClick={ goToNext } />
        <div className='slide'
            style={ { backgroundImage: `url(${ slides[ currentIndex ] })` } }>
        </div>
        <div className='numOfSlides'>{ currentIndex + 1 }/{ slides.length }</div>
    </div >
}