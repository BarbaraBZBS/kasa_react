import MImg from '../../assets/M_H_Mask_Group.jpg'
import DImg from '../../assets/D_H_Mask_Group.jpg'

export default function Banner() {
    return <div className='bannerImgContainer'>
        <picture className='bannerPic'>
            <source media="(max-width: 419px)" srcSet={ MImg } />
            <source media="(min-width: 420px)" srcSet={ DImg } />
            <img className='bannerDImg' src={ DImg } alt="nature" />
        </picture>

        <h1 className='bannerTitle'>Chez vous,&nbsp;
            <span className='bannerSpan'>partout et ailleurs</span>
        </h1>

    </div>
}
