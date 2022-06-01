import { useScroll } from '../hooks/useScroll'
import logo from '../assets/logo.png'

import '../styles/components/header.scss'

const Header = () => {
    const { scrollY } = useScroll()

    return (
        <header className={`${scrollY > 1 ? 'scrolled' : ''} header`}>
            <div className='header__left'>
                <figure className='header__logo'>
                    <img src={logo} alt='logo' />
                </figure>

                <nav className='header__menu'>
                    <ul>
                        <li>
                            <a href='#'>Sell</a>
                        </li>
                        <li>
                            <a href='#'>Marketplace</a>
                        </li>
                        <li>
                            <a href='#'>Community</a>
                        </li>
                        <li>
                            <a href='#'>Analyze</a>
                        </li>
                        <li>
                            <a href='#'>Downloads</a>
                        </li>
                    </ul>
                </nav>
            </div>

            <div className='header__actions'>
                <a href='#'>
                    Log In
                </a>

                <button className='button button--purple header__button'>
                    Get Started
                </button>

                <i className="fa-solid fa-magnifying-glass" />
            </div>
        </header>
    )
}

export default Header