import {
    forwardRef,
    useCallback,
    useId,
    useMemo,
    useState,
    type ChangeEvent,
    type ReactNode,
    type Ref,
} from 'react'
import type { JSX } from 'react/jsx-runtime'
import clsx from 'clsx'
import styles from './select.module.css'

export interface SelectOption<T> {
    label: string
    value: T
    disabled?: boolean
}

export interface SelectProps<T> {
    options: SelectOption<T>[]
    value?: T
    defaultValue?: T
    onChange?: (value: T) => void
    placeholder?: string
    renderOption?: (option: SelectOption<T>, isSelected: boolean) => ReactNode
    getOptionKey?: (option: SelectOption<T>) => string | number
    disabled?: boolean
    className?: string
    fullWidth?: boolean
}

const SelectReusable = <T,>(
    {
        options,
        onChange,
        renderOption,
        getOptionKey,
        placeholder = 'Select...',
        disabled,
        className = '',
        defaultValue,
        value,
        fullWidth,
    }: SelectProps<T>,
    ref: Ref<HTMLSelectElement>,
) => {
    const [internalValue, setInternalValue] = useState<T | undefined>(
        defaultValue,
    )

    const isControlled = value !== undefined
    const id = useId()

    const selectedValue = isControlled ? value : internalValue

    const handleChange = useCallback(
        (evnt: ChangeEvent<HTMLSelectElement>) => {
            const selectedIndex = evnt.target.selectedIndex
            const selectedOption = options[selectedIndex]

            if (!selectedOption) return

            if (!isControlled) setInternalValue(selectedOption.value)

            onChange?.(selectedOption.value)
        },
        [isControlled, onChange, options],
    )

    const memoizedOptions = useMemo(() => options, [options])

    return (
        <div
            className={clsx(
                styles.wrapper,
                fullWidth && styles.fullWidth,
                disabled && styles.disabled,
                className,
            )}
        >
            <select
                id={id}
                ref={ref}
                disabled={disabled}
                className={styles.select}
                value={
                    selectedValue !== undefined
                        ? memoizedOptions.findIndex(
                              (op) => op.value === selectedValue,
                          )
                        : ''
                }
                onChange={handleChange}
            >
                {selectedValue === undefined && (
                    <option value="" disabled>
                        {placeholder}
                    </option>
                )}
                {memoizedOptions.map((opt, idx) => {
                    const isSelected = opt.value === selectedValue
                    return (
                        <option
                            key={getOptionKey?.(opt ?? idx)}
                            value={idx}
                            disabled={opt.disabled}
                        >
                            {renderOption
                                ? renderOption(opt, isSelected)
                                : opt.label}
                        </option>
                    )
                })}
            </select>
            <span className={styles.chevron} aria-hidden="true" />
            {/* {helperText && (
                <div
                    id={`${id}-help`}
                    className={clsx(styles.helper, error && styles.helperError)}
                >
                    {helperText}
                </div>
            )} */}
        </div>
    )
}

export const Select = forwardRef(SelectReusable) as <T>(
    props: SelectProps<T> & { ref?: React.Ref<HTMLSelectElement> },
) => JSX.Element
