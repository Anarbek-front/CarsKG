import {} from 'react'
import { Button } from '../../../UI/button'
import styles from './header.module.css'
import logo from '../../../../assets/logo.svg'
import account from '../../../../assets/account 1.svg'

interface NavItem {
    label: string
    href: string
}

const nav_items: NavItem[] = [
    { label: 'Главная', href: '/' },
    { label: 'Машины', href: '/cars' },
    { label: 'Запчасти', href: '/spare-parts' },
    { label: 'Услуги', href: '/services' },
]

export const Header = () => {
    // const [isScrolled, setIsScrolled] = useState(false)

    return (
        <header className={`${styles.header}`}>
            <div className={styles.container}>
                <a href="/" className={styles.logo_link}>
                    <img className={styles.header_logo} src={logo} alt="" />
                </a>
                <nav className={styles.nav} aria-label="Header навигация">
                    <ul className={styles.nav_list}>
                        {nav_items.map((itm) => (
                            <li key={itm.href}>
                                <a href={itm.href} className={styles.nav_link}>
                                    {itm.label}
                                </a>
                            </li>
                        ))}
                    </ul>
                </nav>
                <div className={styles.profile_and_language_container}>
                    <Button>
                        <img src={account} alt="" />
                    </Button>
                </div>
            </div>
        </header>
    )
}
