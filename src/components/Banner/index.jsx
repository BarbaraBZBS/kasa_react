import MImg from '../../assets/M_Home_IMG.jpg'
import DImg from '../../assets/D_Home_IMG.jpg'

export default function Banner() {
    return <div>
        <picture>
            <source media="(max-width: 480px)" srcSet={ MImg } />
            <source media="(min-width: 481px)" srcSet={ DImg } />
            <img src={ DImg } alt="nature" />
        </picture>
        <div>
            <h1>Chez vous, partout et ailleurs</h1>
        </div>
    </div>
}
