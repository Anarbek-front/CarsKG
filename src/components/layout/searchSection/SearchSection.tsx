import { useState } from 'react'
import { Select } from '../../UI/select'
import styles from './searchSection.module.css'
import { Button } from '../../UI/button'
import searchContCar from '../../../assets/search_cont_car.svg'

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
            <div className={styles.img_search_cont}>
                <p className={styles.form_text}>
                    Площадка номер 1 в Кыргызстане по купл-продаже авто
                </p>
                <img src={searchContCar} alt="search_cont_car" />
            </div>
            <form action="" className={styles.search}>
                <div className={styles.select_cont}>
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
                </div>
                <Button variant="secondary">Найти</Button>
            </form>
        </div>
    )
}
