import { useRef, useState } from 'react'
import { faChevronUp } from '@fortawesome/free-solid-svg-icons'
import { faChevronDown } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


export default function Collapse( props ) {
    const [ open, setOpen ] = useState( false )
    const toggle = () => {
        setOpen( !open )
    }
    const contentRef = useRef()
    if ( contentRef.current ) console.log( contentRef.current.scrollHeight )

    return <>
        <div className='collapse' style={ { visibility: 'visible' } }>
            <button className='collapseBtn' onClick={ toggle }>
                <p>{ props.label }</p>
                { open ? ( <FontAwesomeIcon icon={ faChevronUp } className="chevron" /> ) : ( <FontAwesomeIcon icon={ faChevronDown } className="chevron" /> ) }
            </button>
            <div className='contentParent'
                ref={ contentRef }
                style={ { height: open ? contentRef.current.scrollHeight + 10 + 'px' : '0px' } }>
                <div className='content'>{ props.children }</div>
            </div>
        </div>
    </>
}
