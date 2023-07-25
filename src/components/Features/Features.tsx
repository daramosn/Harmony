import Image from 'next/image'

import { FEATURES_LIST as features } from '../../db/features'

import './Features.scss'

const Features = () => {
    return (
        <section className="features">
            <ul className="features__list">
                {features.map((feature) => (
                    <li className="features__item" key={feature.id}>
                        <Image
                            className="features__item-icon"
                            src={feature.icon}
                            alt="icon"
                        />
                        <h4 className="features__item-title">
                            {feature.title}
                        </h4>
                        <p className="features__item-description">
                            {feature.description}
                        </p>
                    </li>
                ))}
            </ul>
        </section>
    )
}

export default Features
