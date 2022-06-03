import useScroll from '../hooks/useScroll'
import logo from '../assets/logo.png'

import '../styles/components/header.scss'

const Header = () => {
    const scrollPosition = useScroll()

    return (
        <header className={`${scrollPosition > 1 ? 'header--scrolled' : ''} header`}>
            <figure className='header__logo'>
                <img src={logo} alt='logo' />
            </figure>

            <div className='header__actions'>
                <nav className='header__menu'>
                    <ul>
                        <li>
                            <a className='header__link' href='#'>Sell</a>
                        </li>
                        <li>
                            <a className='header__link' href='#'>Marketplace</a>
                        </li>
                        <li>
                            <a className='header__link' href='#'>Community</a>
                        </li>
                        <li>
                            <a className='header__link' href='#'>Analyze</a>
                        </li>
                        <li>
                            <a className='header__link' href='#'>Downloads</a>
                        </li>
                    </ul>
                </nav>

                <div className='header__right'>
                    <a className='header__link' href='#'>
                        Log In
                    </a>

                    <button className='button button--purple header__button'>
                        Get Started
                    </button>

                    <i className="fa-solid fa-magnifying-glass" />
                </div>
            </div>
        </header>
    )
}

export default Header