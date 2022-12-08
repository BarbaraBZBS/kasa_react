import MImg from '../../assets/M_H_Mask_Group.jpg'
import DImg from '../../assets/D_H_Mask_Group.jpg'
import MAboutPic from '../../assets/M_A_Mask_Group.jpg'
import DAboutPic from '../../assets/D_A_Mask_Group.jpg'
import { useEffect, useState } from 'react'

export default function Banner() {
    const [ currentPage, setCurrentPage ] = useState()

    useEffect( () => {
        if ( window.location.pathname === '/' ) {
            setCurrentPage( 'home' )
        }
        if ( window.location.pathname === '/About' ) {
            setCurrentPage( 'about' )
        }
    }, [] )

    return <>
        { currentPage === 'home' && (
            <div className='bannerImgContainer'>
                <picture>
                    <source media="(max-width: 419px)" srcSet={ MImg } />
                    <source media="(min-width: 420px)" srcSet={ DImg } />
                    <img className='bannerDImg' src={ DImg } alt="nature" />
                </picture>
                <h1 className='bannerTitle'>Chez vous,&nbsp;
                    <span className='bannerSpan'>partout et ailleurs</span>
                </h1>
            </div>
        ) }
        { currentPage === 'about' && (
            <div className='aBannerImgContainer'>
                <picture>
                    <source media="(max-width: 398px)" srcSet={ MAboutPic } />
                    <source media="(min-width: 399px)" srcSet={ DAboutPic } />
                    <img className='aBannerDImg' src={ DAboutPic } alt="nature" />
                </picture>
            </div>
        ) }

    </>
}
