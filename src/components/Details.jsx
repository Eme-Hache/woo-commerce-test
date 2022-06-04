import detail1 from '../assets/detail1.png'
import detail2 from '../assets/detail2.png'

import '../styles/components/details.scss'

const Details = () => {
    return (
        <section className='details'>
            <div className='details__container'>
                <article className='details__art details__art--first'>
                    <div className='details__img details__img--first'>
                        <img src={detail1} alt='detail1' />
                    </div>

                    <div className='details__details details__details--first'>
                        <h2 className='title title--article title--white'>
                            Develop Without Limits
                        </h2>

                        <p className='text text--base text--white details__text'>
                        WooCommerce is developer friendly, too. Built with a REST API, WooCommerce is scalable and can integrate with virtually any service. Design a complex store from scratch, extend a store for a client, or simply add a single product to a WordPress site—your store, your way.
                        </p>

                        <button className='button button--green button--rounded details__button'>
                            Read the Documentation
                        </button>
                    </div>
                </article>

                <article className='details__art details__art--last'>
                    <div className='details__img details__img--last'>
                        <img src={detail2} alt='detail1' />
                    </div>

                    <div className='details__details details__details--last'>
                        <h2 className='title title--article title--white'>
                            Know our Global Community
                        </h2>

                        <p className='text text--base text--white details__text'>
                        WooCommerce is one of the fastest-growing eCommerce communities. We’re proud that the helpfulness of the community and a wealth of online resources are frequently cited as reasons our users love it. There are 80+ meetups worldwide!
                        </p>

                        <button className='button button--green button--rounded details__button'>
                            Read the Documentation
                        </button>
                    </div>
                </article>
            </div>
        </section>
    )
}

export default Details