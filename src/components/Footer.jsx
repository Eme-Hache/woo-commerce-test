import automattic from '../assets/automattic.png'
import instagram from '../assets/instagram.png'
import item1 from '../assets/footer-item-1.png'
import item2 from '../assets/footer-item-2.png'
import item3 from '../assets/footer-item-3.png'
import footer from '../assets/footer-image.png'
import facebook from '../assets/facebook.png'
import twitter from '../assets/twitter.png'
import logo from '../assets/logo-white.png'
import rss from '../assets/rss.png'

import '../styles/components/footer.scss'

const Footer = () => {
    return (
        <footer className='footer'>
            <section>
                <h1 className='footer__title'>
                    Supported by real people
                </h1>

                <p className='footer__text'>
                    Our team of Happiness Engineers works remotely from 68 countries providing customers support across multiple time zones.
                </p>

                <div className='footer__image'>
                    <img src={footer} alt='WooCommerce Team' />
                </div>
            </section>

            <section className='footer__getstarted'>
                <div className='footer__circle' />

                <h1 className='footer__title footer__title--white'>
                    WooCommerce - the
                    <span className='footer__title footer__title--white footer__title--bold'>
                        most customizable eCommerce platform
                    </span>
                    for building
                    <span className='footer__title footer__title--white footer__title--bold'>
                        your online business.
                    </span>
                </h1>

                <button className='footer__button'>
                    GET STARTED
                </button>
            </section>

            <section className='footer__info'>
                <div className='footer__first'>
                    <div className='footer__items'>
                        <img src={item1} alt='Guarantee' />
                        <img src={item2} alt='Support' />
                        <img src={item3} alt='Payment' />
                    </div>

                    <img src={logo} alt='WooCommercer Logo' />
                </div>

                <div className='footer__second'>
                    <div>
                        <h4 className='footer__caption footer__caption--principal'>
                            WHO WE ARE
                        </h4>

                        <ul className='footer__list'>
                            <li><a className='footer__caption footer__caption--secondary' href="#">About</a></li> 
                            <li><a className='footer__caption footer__caption--secondary' href="#">Team</a></li>
                            <li><a className='footer__caption footer__caption--secondary' href="#">Work With Us</a></li>
                        </ul>
                    </div>
                    <div>
                        <h4 className='footer__caption footer__caption--principal'>
                            WOOCOMMERCE
                        </h4>

                        <ul className='footer__list'>
                            <li><a className='footer__caption footer__caption--secondary' href="#">Features</a></li>
                            <li><a className='footer__caption footer__caption--secondary' href="#">Payments</a></li>
                            <li><a className='footer__caption footer__caption--secondary' href="#">Marketing</a></li>
                            <li><a className='footer__caption footer__caption--secondary' href="#">Shipping</a></li>
                            <li><a className='footer__caption footer__caption--secondary' href="#">Extension Store</a></li>
                            <li><a className='footer__caption footer__caption--secondary' href="#">Ecommerce Blog</a></li>
                            <li><a className='footer__caption footer__caption--secondary' href="#">Development Blog</a></li>
                            <li><a className='footer__caption footer__caption--secondary' href="#">Ideas Board</a></li>
                            <li><a className='footer__caption footer__caption--secondary' href="#">Mobile App</a></li>
                            <li><a className='footer__caption footer__caption--secondary' href="#">Community</a></li>
                            <li><a className='footer__caption footer__caption--secondary' href="#">Style Guide</a></li>
                            <li><a className='footer__caption footer__caption--secondary' href="#">Email Newsletter</a></li>
                        </ul>
                    </div>
                    <div>
                        <h4 className='footer__caption footer__caption--principal'>
                            OTHER PRODUCTS
                        </h4>

                        <ul className='footer__list'>
                            <li><a className='footer__caption footer__caption--secondary' href="#">Sotrefront</a></li>
                            <li><a className='footer__caption footer__caption--secondary' href="#">WooSlider</a></li>
                            <li><a className='footer__caption footer__caption--secondary' href="#">Sensei</a></li>
                            <li><a className='footer__caption footer__caption--secondary' href="#">Sensei Extensions</a></li>
                        </ul>
                    </div>
                    <div>
                        <h4 className='footer__caption footer__caption--principal'>
                            SUPPORT
                        </h4>

                        <ul className='footer__list'>
                            <li><a className='footer__caption footer__caption--secondary' href="#">Documentation</a></li>
                            <li><a className='footer__caption footer__caption--secondary' href="#">Customizations</a></li>
                            <li><a className='footer__caption footer__caption--secondary' href="#">Support Policy</a></li>
                            <li><a className='footer__caption footer__caption--secondary' href="#">Contact</a></li>
                            <li><a className='footer__caption footer__caption--secondary' href="#">COVID-19 Resources</a></li>
                            <li><a className='footer__caption footer__caption--secondary' href="#">Privacy Notice For</a></li>
                            <li><a className='footer__caption footer__caption--secondary' href="#">California Users</a></li>
                        </ul>
                    </div>
                    <div>
                        <h4 className='footer__caption footer__caption--principal'>
                            WE RECOMMEND
                        </h4>

                        <ul className='footer__list'>
                            <li><a className='footer__caption footer__caption--secondary' href="#">WooExperts</a></li>
                            <li><a className='footer__caption footer__caption--secondary' href="#">Hosting Solutions</a></li>
                            <li><a className='footer__caption footer__caption--secondary' href="#">Pre-Sales FAQ</a></li>
                            <li><a className='footer__caption footer__caption--secondary' href="#">Success Stories</a></li>
                            <li><a className='footer__caption footer__caption--secondary' href="#">Design Feedback Group</a></li>
                        </ul>
                    </div>
                </div>
            </section>

            <section className='footer__last'>
                <div className='footer__logos'>
                    <img src={twitter} alt='Twitter' />
                    <img src={facebook} alt='Facebook' />
                    <img src={rss} alt='RSS' />
                    <img src={instagram} alt='Instagram' />
                </div>

                <p className='footer__text footer__text--copyright'>
                    COPYRIGHT AMARIS 2022 -
                    <a href="#">TERMS & CONDITIONS</a>
                    <a href="#">PRIVACY POLICY</a>
                </p>

                <div className='footer__automattic'>
                    <img src={automattic} alt='Automattic' />
                </div>
            </section>
        </footer>
    )
}

export default Footer