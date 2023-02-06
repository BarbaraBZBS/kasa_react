import { useRef, useState, useEffect } from 'react'
import { faChevronUp } from '@fortawesome/free-solid-svg-icons'
import { faChevronDown } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


export default function Collapse( props ) {
    const [ open, setOpen ] = useState( false )
    const [ currentPage, setCurrentPage ] = useState()
    const toggle = () => {
        setOpen( !open )
    }
    const contentRef = useRef()
    if ( contentRef.current ) console.log( contentRef.current.scrollHeight )

    useEffect( () => {
        if ( window.location.pathname === '/about' ) {
            setCurrentPage( 'about' )
        }
    }, [] )

    return <>
        <div className='collapse' style={ { visibility: 'visible' } }>
            <button className={ currentPage === 'about' ? 'collapseBtnAb' : 'collapseBtnAp' } style={ { position: 'relative', zIndex: '10' } } onClick={ toggle }>
                <p>{ props.label }</p>
                { open ? ( <FontAwesomeIcon icon={ faChevronUp } className="chevron" /> ) : ( <FontAwesomeIcon icon={ faChevronDown } className="chevron" /> ) }
            </button>
            <div className='contentParent'
                ref={ contentRef }
                style={ { height: open ? contentRef.current.scrollHeight + 10 + 'px' : '0px', position: 'relative', zIndex: '-10', bottom: '16px' } }>
                <div className={ currentPage === 'about' ? 'contentAb' : 'contentAp' }>{ props.children }</div>
            </div>
        </div>
    </>
}
