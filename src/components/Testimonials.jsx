import '../styles/components/testimonials.scss'

const Testimonials = () => {
    return (
        <section className='testimonials'>
            <h2 className='title title--secondary title--testimonials'>Trusted by Agencies & Store Owners</h2>

            <div className='testimonials__container'>
                <div className='testimonials__wrapper'>
                    <div className='testimonials__card testimonials__card--first'>
                        <p className='text text--base text--large text--center'>
                            No other eCommerce platform allows people to start for free and grow their store as their business grows. More importantly, WooCommerce doesn't charge you a portion of your profits as your business grows!
                        </p>
                    </div>
                    <div className='testimonials__card testimonials__card--second' />
                    <div className='testimonials__card testimonials__card--third' />

                    <div className='testimonials__controls'>
                        <i className="fa-solid fa-arrow-left-long testimonials__arrow testimonials__arrow--left" />
                        <i className="fa-solid fa-arrow-right-long testimonials__arrow testimonials__arrow--right" />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Testimonials