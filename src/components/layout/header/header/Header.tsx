// import { type ReactNode } from 'react'
import { Button } from '../../../UI/button'
import styles from './header.module.css'
import logo from '../../../../assets/logo.svg'
import account from '../../../../assets/account 1.svg'
import { useEffect, useState } from 'react'

interface NavItem {
    label: string
    href: string
    nav_logo?: string
}

const nav_items: NavItem[] = [
    { label: 'Главная', href: '/' },
    { label: 'Машины', href: '/cars' },
    { label: 'Запчасти', href: '/spare-parts' },
    { label: 'Услуги', href: '/services' },
]

export const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    useEffect(() => {
        const handleResize = () => {
            return window.innerWidth >= 768 && setIsMenuOpen(false)
        }

        window.addEventListener('resize', handleResize)
        return () => window.removeEventListener('resize', handleResize)
    }, [])

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
                                    <Button className={styles.nav_button}>
                                        {itm.label}
                                    </Button>
                                </a>
                            </li>
                        ))}
                    </ul>
                </nav>
                <div className={styles.profile_and_language_container}>
                    <Button className={styles.account_btn}>
                        <img src={account} alt="" />
                    </Button>
                    <Button className={styles.switch_language_btn}>
                        кыргызча
                    </Button>
                </div>
                <Button
                    className={`${styles.burger} ${isMenuOpen ? styles.burger_active : ''}`}
                >
                    <span className={styles.burger_line} />
                    <span className={styles.burger_line} />
                    <span className={styles.burger_line} />
                </Button>
            </div>
        </header>
    )
}
