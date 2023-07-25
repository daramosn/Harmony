import './Feedback.scss'
import { Quote } from '@/assets/icons/Quote'

const Feedback = () => {
    return (
        <section className="feedback">
            <h2 className="feedback__title">What others are saying</h2>

            <div className="feedback__articles">
                <article className="feedback__articles-item">
                    <Quote className="feedback__icon" />
                    <p className="feedback__view">
                        I love the fact that there is a linking road in Mabushi
                        opposite blue Cabana which is really amazing. I love the
                        road network and the structure is impressive.
                    </p>
                    <h5 className="feedback__author">Mr & Mrs Bamidele</h5>
                </article>
                <article className="feedback__articles-item">
                    <Quote className="feedback__icon" />
                    <p className="feedback__view">
                        I love the fact that there is a linking road in Mabushi
                        opposite blue Cabana which is really amazing. I love the
                        road network and the structure is impressive.
                    </p>
                    <h5 className="feedback__author">Mr & Mrs Bamidele</h5>
                </article>
                <article className="feedback__articles-item">
                    <Quote className="feedback__icon" />
                    <p className="feedback__view">
                        I love the fact that there is a linking road in Mabushi
                        opposite blue Cabana which is really amazing. I love the
                        road network and the structure is impressive.
                    </p>
                    <h5 className="feedback__author">Mr & Mrs Bamidele</h5>
                </article>
                <article className="feedback__articles-item">
                    <Quote className="feedback__icon" />
                    <p className="feedback__view">
                        I love the fact that there is a linking road in Mabushi
                        opposite blue Cabana which is really amazing. I love the
                        road network and the structure is impressive.
                    </p>
                    <h5 className="feedback__author">Mr & Mrs Bamidele</h5>
                </article>
            </div>
        </section>
    )
}

export default Feedback
