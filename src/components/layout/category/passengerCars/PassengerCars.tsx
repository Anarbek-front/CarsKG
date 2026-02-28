import { Button } from '../../../UI/button'
import { CarCard } from '../../../UI/card'
import styles from './passenger_cars.module.css'
// import toyota from ''

const arrCars = [
    {
        brand: 'Toyota',
        model: '3 Series',
        image: 'https://c4.wallpaperflare.com/wallpaper/283/205/175/2018-camry-toyota-xle-wallpaper-preview.jpg',
        year: 2018,
        logo: 'https://upload.wikimedia.org/wikipedia/commons/4/44/BMW.svg',
        price: 18900,
        currency: '$',
        mileage: '92 000 км',
        location: 'Бишкек',
        href: '/cars/1',
    },
    {
        brand: 'Toyota',
        model: '3 Series',
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS05yz9nRsK-jq_oTnT5UDdqHWyob4yl0PBvg&s',
        year: 2018,
        logo: 'https://upload.wikimedia.org/wikipedia/commons/4/44/BMW.svg',
        price: 18900,
        currency: '$',
        mileage: '92 000 км',
        location: 'Бишкек',
        href: '/cars/1',
    },
    {
        brand: 'Toyota',
        model: '3 Series',
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTug4lXfBv1zcysVNhp6BSQsN5t3d7Yu2aV_g&s',
        year: 2018,
        logo: 'https://upload.wikimedia.org/wikipedia/commons/4/44/BMW.svg',
        price: 18900,
        currency: '$',
        mileage: '92 000 км',
        location: 'Бишкек',
        href: '/cars/1',
    },
    {
        brand: 'Toyota',
        model: '3 Series',
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYvRCR0OgQ9LSStYk_L_7iE5WO4XboykeMcA&s',
        year: 2018,
        logo: 'https://upload.wikimedia.org/wikipedia/commons/4/44/BMW.svg',
        price: 18900,
        currency: '$',
        mileage: '92 000 км',
        location: 'Бишкек',
        href: '/cars/1',
    },
]

export const PassengerCars = () => {
    return (
        <div className={styles.passenger_cars}>
            <div className={styles.navigate}>
                <h2>Легковые авто</h2>
                <Button variant="secondary">Смотреть все</Button>
            </div>
            <div className={styles.cards}>
                {arrCars.map(
                    ({
                        brand,
                        currency,
                        href,
                        image,
                        location,
                        logo,
                        mileage,
                        model,
                        price,
                        year,
                    }) => (
                        <CarCard
                            brand={brand}
                            img={image}
                            logo={logo}
                            href={href}
                            model={model}
                            mileage={mileage}
                            location={location}
                            price={price}
                            currency={currency}
                            year={year}
                        />
                    ),
                )}
            </div>
        </div>
    )
}
