import { useState } from 'react'
import { Select } from '../../UI/select'
import styles from './searchSection.module.css'

const options_1 = [
    { label: 'React', value: 'react' },
    { label: 'Vue', value: 'vue' },
    { label: 'Angular', value: 'angular' },
]

const options_2 = [
    { label: 'React', value: 'react' },
    { label: 'Vue', value: 'vue' },
    { label: 'Angular', value: 'angular' },
]

const options_3 = [
    { label: 'React', value: 'react' },
    { label: 'Vue', value: 'vue' },
    { label: 'Angular', value: 'angular' },
]

const options_4 = [
    { label: 'React', value: 'react' },
    { label: 'Vue', value: 'vue' },
    { label: 'Angular', value: 'angular' },
]

export const SearchSection = () => {
    const [selectValue, setSelectValue] = useState<string>('select')
    return (
        <div className={styles.search_section_container}>
            <form action="" className={styles.search}>
                <Select
                    className={styles.search_select}
                    options={options_1}
                    value={selectValue}
                    onChange={setSelectValue}
                    placeholder="Fffff"
                />
                <Select
                    className={styles.search_select}
                    options={options_2}
                    value={selectValue}
                    onChange={setSelectValue}
                    placeholder="Fffff"
                />
                <Select
                    className={styles.search_select}
                    options={options_3}
                    value={selectValue}
                    onChange={setSelectValue}
                    placeholder="Fffff"
                />
                <Select
                    className={styles.search_select}
                    options={options_4}
                    value={selectValue}
                    onChange={setSelectValue}
                    placeholder="Fffff"
                />
            </form>
        </div>
    )
}
