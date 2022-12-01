import { NavLink } from 'react-router-dom';


export default function Error() {
    return <div className='errContainer'>
        <h1 className='errTitle'>404</h1>
        <p className='errP'>Oups! La page que vous demandez n'existe pas.</p>
        <NavLink to="/" className={ 'errHLk' }> Retourner sur la page d'acceuil </NavLink>
    </div>
}
