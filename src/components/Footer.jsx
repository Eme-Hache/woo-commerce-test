import footer from '../assets/footer-image.png'
import '../styles/components/footer.scss'

const Footer = () => {
    return (
        <footer className='footer'>
            <section>
                <h1 className='footer__maintitle'>
                    Supported by real people
                </h1>

                <p className='footer__caption'>
                    Our team of Happiness Engineers works remotely from 68 countries providing customers support across multiple time zones.
                </p>

                <div className='footer__image'>
                    <img src={footer} alt='WooCommerce Team' />
                </div>
            </section>

            <section className='footer__getstarted'>

            </section>
        </footer>
    )
}

export default Footer