import { NavLink } from 'react-router-dom';
import MLogo from '../../assets/M_Head_LOGO.png';
import DLogo from '../../assets/D_Head_LOGO.png';

export default function Header() {
    return <header>
        <nav className='headerContainer'>
            <div className='logoNav'>
                <NavLink to="/">
                    <picture>
                        <source media="(max-width: 480px)" srcSet={ MLogo } />
                        <source media="(min-width: 481px)" srcSet={ DLogo } />
                        <img src={ DLogo } alt="Kasa Logo" />
                    </picture>
                </NavLink>
            </div>
            <div className='navContainer'>
                <ul className='navList'>
                    <li>
                        <NavLink to="/" className={ ( { isActive } ) => {
                            return ( ( isActive ? 'navLk activeLk' : 'navLk inactiveLk' ) )
                        } }>
                            Accueil
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/About" className={ ( { isActive } ) => {
                            return ( ( isActive ? 'navLk activeLk' : 'navLk' ) )
                        } }>
                            À Propos
                        </NavLink>
                    </li>
                </ul>

            </div>
        </nav>
    </header>
}
