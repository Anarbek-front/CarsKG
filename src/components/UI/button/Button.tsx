import type { ButtonHTMLAttributes, ReactNode } from 'react'
import styles from './button.module.css'

type ButtonVariant = 'primary' | 'secondary' | 'outline' | 'ghost' | 'danger'

interface IBtnProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    children: ReactNode
    variant?: ButtonVariant
}

export const Button = ({
    children,
    variant = 'primary',
    ...rest
}: IBtnProps) => {
    const btn_class = [styles.btn, styles[variant]].filter(Boolean).join(' ')
    return (
        <button {...rest} className={btn_class}>
            {children}
        </button>
    )
}
