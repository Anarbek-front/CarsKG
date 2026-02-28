import styles from './car_card.module.css'

type Price = string | number

interface ICardCardProps {
    onClick?: () => void
    price: Price
    currency?: string
    brand: string
    year: number
    model: string
    img: string
    logo: string
    location?: string
    mileage?: string
    href?: string
}

export const CarCard = ({
    onClick,
    price,
    currency,
    brand,
    model,
    year,
    img,
    logo,
    location,
    mileage,
}: ICardCardProps) => {
    return (
        <article
            className={styles.car_card}
            role={onClick ? 'button' : undefined}
            tabIndex={onClick ? 0 : undefined}
            onClick={onClick}
            onKeyDown={(e) => {
                if (!onClick) return
                if (e.key === 'Enter' || e.key === ' ') onClick()
            }}
            aria-label={`${brand} ${model}, ${year}, цена ${price} ${currency}`}
        >
            <div className={styles.car_card_media}>
                <img
                    src={img}
                    alt={`${brand} ${model}`}
                    className={styles.car_card_img}
                />
                <div className={styles.car_card_badge}>
                    {mileage ? <span>{mileage}</span> : <span>В наличии</span>}
                </div>
            </div>
            <div className={styles.car_card_body}>
                <div className={styles.car_card_row}>
                    <div className={styles.card_brand}>
                        <img
                            src={logo}
                            alt={`${brand} logo`}
                            className={styles.car_card_logo}
                        />
                        <div className={styles.car_card_meta}>
                            <div className={styles.car_card_topline}>
                                <span className={styles.car_card__year}>
                                    {year}
                                </span>
                                <span className={styles.car_card__model}>
                                    {brand} {model}
                                </span>
                            </div>
                            {location}
                        </div>
                    </div>
                    <div className={styles.car_card_price}>
                        <span className={styles.car_card_price_value}>
                            {price}
                        </span>
                        <span className={styles.car_card_price_cur}>
                            {currency}
                        </span>
                    </div>
                </div>
            </div>
        </article>
    )
}
