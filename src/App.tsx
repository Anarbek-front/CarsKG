import { PassengerCars } from './components/layout/category/passengerCars'
import { Header } from './components/layout/header/header'
import { SearchSection } from './components/layout/searchSection'

export const App = () => {
    return (
        <>
            <Header />
            <SearchSection />
            <PassengerCars />
        </>
    )
}
