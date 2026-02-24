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
import styles from './select.module.css'
import type { JSX } from 'react/jsx-runtime'

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
    }: SelectProps<T>,
    ref: Ref<HTMLSelectElement>,
) => {
    const [internalValue, setInternalValue] = useState<T | undefined>(
        defaultValue,
    )

    const isControlled = value !== undefined
    const id = useId()

    const selectedValue = isControlled ? value : internalValue

    const selectClass = [styles.select, styles[className]]
        .filter(Boolean)
        .join(' ')

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
        <select
            id={id}
            ref={ref}
            disabled={disabled}
            className={selectClass}
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
    )
}

export const Select = forwardRef(SelectReusable) as <T>(
    props: SelectProps<T> & { ref?: React.Ref<HTMLSelectElement> },
) => JSX.Element
