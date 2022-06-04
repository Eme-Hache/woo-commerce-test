import HeroIMG from '../assets/hero.png'

import '../styles/components/hero.scss'

const Hero = () => {
    return (
        <main className='hero'>
            <div className='hero__content'>
                <h1 className='title title--principal'>
                    Building exactly the eCommerce website you want.
                </h1>
                <h2 className='text text--base hero__text'>
                    WooCommerce is a customizable, open-source eCommerce platform built on WordPress. Get started quickly and make your way.
                </h2>

                <div className='hero__buttons'>
                    <button className='hero__button button button--purple button--rounded'>
                        <span className='button__text'>
                            Start a New Store
                        </span>
                    </button>

                    <span className='hero__link'>
                        or
                        <a className='link link--blue' href='#'>
                            Customize & Extend ›
                        </a>
                    </span>
                </div>
            </div>

            <div className='hero__image'>
                <img src={HeroIMG} alt='hero' />
            </div>
        </main>
    )
}

export default Hero