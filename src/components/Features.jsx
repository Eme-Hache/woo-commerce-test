import feature1 from '../assets/feature1.png'
import feature2 from '../assets/feature2.png'
import feature3 from '../assets/feature3.png'
import subf1 from '../assets/subf1.png'
import subf2 from '../assets/subf2.png'
//import subf2 from '../assets/subf2.png'
import '../styles/components/features.scss'

const Features = () => {
    return (
        <section className='features'>
            <h1 className='features__title'>Your eCommerce made simple</h1>

            <div className='features__content'>
                <article className='features__item up'>
                    <div className="features__item-imgs">
                        <img src={feature1} className='features__item-principal' alt="" />
                        
                        <div className='features__item-subf1'>
                            <img src={subf1} alt="" />
                        </div>
                    </div>

                    <h2 className='features__item-title'>
                        All You Need to Start
                    </h2>

                    <p className='features__item-text'>
                        Add WooCommerce plugin to any WordPress site and set up a new store in minutes.
                    </p>

                    <a href='#' className='features__item-link'>
                        Ecommerce for WordPress ›
                    </a>
                </article>

                <article className='features__item middle'>

                    <div className="features__item-imgs">
                        <img src={feature2} className='features__item-principal' alt="" />

                    </div>

                    <h2 className='features__item-title'>
                        Customize and Extend
                    </h2>

                    <p className='features__item-text'>
                        From subscriptions to gym classes to luxury cars, WooCommerce is fully customizable.
                    </p>

                    <a href='#' className='features__item-link'>
                        Browse Extensions ›
                    </a>
                </article>

                <article className='features__item bottom'>
                    <div className="features__item-imgs">
                        <img src={feature3} className='features__item-principal' alt="" />

                    </div>

                    <h2 className='features__item-title'>
                        Active Community
                    </h2>

                    <p className='features__item-text'>
                        WooCommerce is one of the fastest-growing eCommerce communities.
                    </p>

                    <a href='#' className='features__item-link'>
                        Check our Forums ›
                    </a>
                </article>
            </div>
        </section>
    )
}

export default Features