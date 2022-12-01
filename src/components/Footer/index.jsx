import MLogo from '../../assets/M_Foot_LOGO.png';
import DLogo from '../../assets/D_Foot_LOGO.png';

export default function Footer() {
    return <footer className='footerContainer'>
        <div className='logoFooter'>
            <picture>
                <source media="(max-width: 480px)" srcSet={ MLogo } />
                <source media="(min-width: 481px)" srcSet={ DLogo } />
                <img src={ DLogo } alt="Kasa Logo" />
            </picture>
        </div>
        <div>
            <p className='footerInfo'>©️ 2020 Kasa. All rights reserved</p>
        </div>
    </footer>
}
