import feature1 from '../assets/feature1.png'
import feature2 from '../assets/feature2.png'
import feature3 from '../assets/feature3.png'
import subf1 from '../assets/subf1.png'
import subf2 from '../assets/subf2.png'
import subf3 from '../assets/subf3.png'
import '../styles/components/features.scss'

const Features = () => {
    return (
        <section className='features'>
            <h1 className='title title--secondary'>Your eCommerce made simple</h1>

            <div className='features__content'>
                <article className='features__item features__item--up'>
                    <div className="features__images">
                        <img src={feature1} className='features__image' alt="" />
                        
                        <div className='features__image features__image--first'>
                            <img src={subf1} alt="" />
                        </div>
                    </div>

                    <h2 className='title title--article'>
                        All You Need to Start
                    </h2>

                    <p className='text text--base features__text'>
                        Add WooCommerce plugin to any WordPress site and set up a new store in minutes.
                    </p>

                    <a href='#' className='link link--blue features__text'>
                        Ecommerce for WordPress ›
                    </a>
                </article>

                <article className='features__item features__item--middle'>
                    <div className="features__images">
                        <img src={feature2} className='features__image' alt="" />

                        <div className='features__image features__image--second'>
                            <img src={subf2} alt="" />
                        </div>
                    </div>

                    <h2 className='title title--article'>
                        Customize and Extend
                    </h2>

                    <p className='text text--base features__text'>
                        From subscriptions to gym classes to luxury cars, WooCommerce is fully customizable.
                    </p>

                    <a href='#' className='link link--blue features__text'>
                        Browse Extensions ›
                    </a>
                </article>

                <article className='features__item features__item--bottom'>
                    <div className="features__images">
                        <img src={feature3} className='features__image' alt="" />

                        <div className='features__image features__image--last'>
                            <img src={subf3} alt="" />
                        </div>
                    </div>

                    <h2 className='title title--article'>
                        Active Community
                    </h2>

                    <p className='text text--base features__text'>
                        WooCommerce is one of the fastest-growing eCommerce communities.
                    </p>

                    <a href='#' className='link link--blue features__text'>
                        Check our Forums ›
                    </a>
                </article>
            </div>
        </section>
    )
}

export default Features