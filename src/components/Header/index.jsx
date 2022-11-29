import { NavLink } from 'react-router-dom';
import MLogo from '../../assets/M_Head_LOGO.png';
import DLogo from '../../assets/D_Head_LOGO.png';

export default function Header() {
    return <header>
        <nav>
            <div>
                <NavLink to="/">
                    <picture>
                        <source media="(max-width: 480px)" srcSet={ MLogo } />
                        <source media="(min-width: 481px)" srcSet={ DLogo } />
                        <img src={ DLogo } alt="Kasa Logo" />
                    </picture>
                </NavLink>
            </div>
            <ul>
                <li>
                    <NavLink to="/" className={ ( { isActive } ) => {
                        return ( 'navLk' + ( isActive ? 'activeLk' : 'inactiveLk' ) )
                    } }>
                        <p>Accueil</p>
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/About">
                        <p>À Propos</p>
                    </NavLink>
                </li>
            </ul>
        </nav>
    </header>
}
