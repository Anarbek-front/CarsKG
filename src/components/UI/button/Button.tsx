import type { ButtonHTMLAttributes, ReactNode } from 'react'
import styles from './button.module.css'

type ButtonVariant = 'primary' | 'secondary' | 'outline' | 'ghost' | 'danger'
type ButtonSize = 'sm' | 'md' | 'lg'

interface IBtnProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    children: ReactNode
    variant?: ButtonVariant
    size?: ButtonSize
    isLoading?: boolean
    leftIcon?: ReactNode
    rightIcon?: ReactNode
    fullWidth?: boolean
}

export const Button = ({
    children,
    size = 'md',
    variant = 'primary',
    className = '',
    type = 'button',
    isLoading = false,
    disabled,
    leftIcon,
    rightIcon,
    fullWidth,
    ...rest
}: IBtnProps) => {
    const isDisabled = disabled || isLoading

    console.log(rightIcon)

    const btn_class = [
        styles.btn,
        styles[variant],
        styles[size],
        fullWidth ? styles.fullWidth : '',
        isLoading ? styles.isLoading : '',
        className,
    ]
        .filter(Boolean)
        .join(' ')

    return (
        <button
            type={type}
            className={btn_class}
            disabled={isDisabled}
            aria-busy={isLoading}
            aria-disabled={isDisabled}
            {...rest}
        >
            {isLoading && (
                <span className={styles.spinner} aria-hidden="true" />
            )}
            {!isLoading && leftIcon && (
                <span className={styles.icon}>{leftIcon}</span>
            )}
            <span className={styles.text}>{children}</span>
            {!isLoading && rightIcon && (
                <span className={styles.icon}>{rightIcon}</span>
            )}
        </button>
    )
}
