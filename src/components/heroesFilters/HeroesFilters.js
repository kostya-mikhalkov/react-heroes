import { useSelector, useDispatch } from "react-redux";
import { createSelector } from "reselect";
import { useState } from "react";
import { selectorReduceFire } from "../../selector/selector";
import { filterFire, filterEarth, filterWater, filterWind, filterAll } from "../../slice/sliceHeroes";
// Задача для этого компонента:
// Фильтры должны формироваться на основании загруженных данных
// Фильтры должны отображать только нужных героев при выборе
// Активный фильтр имеет класс active
// Изменять json-файл для удобства МОЖНО!
// Представьте, что вы попросили бэкенд-разработчика об этом

const HeroesFilters = () => {
    const [state, setState] = useState('');
    const fire = useSelector(selectorReduceFire)
    console.log(fire)
    const dispatch = useDispatch();

    return (
        <div className="card shadow-lg mt-4">
            <div className="card-body">
                <p className="card-text">Отфильтруйте героев по элементам</p>
                <div className="btn-group">
                    <button className={state === 'all' ? 'btn btn-outline-dark active' : 'btn btn-outline-dark' }
                            onClick={() => {
                                dispatch(filterAll())
                                setState('all')
                            }}>Все</button>
                    <button className={state === 'fire' ? "btn btn-danger active": "btn btn-danger"} onClick={() => {
                        dispatch(filterFire())
                        setState('fire')
                        }}>Огонь</button>
                    <button className={state === 'water' ? "btn btn-primary active" : "btn btn-primary"}
                            onClick={() => {
                                setTimeout(() => {
                                    dispatch(filterWater())
                                    setState('water')
                                }, 1000)
                            }}>Вода</button>
                    <button className={state === 'wind' ? "btn btn-success active" : "btn btn-success"}
                            onClick={() => {
                                dispatch(filterWind());
                                setState('wind')
                            }}>Ветер</button>
                    <button className={state === 'earth' ? "btn btn-secondary active" : "btn btn-secondary"}
                            onClick={() => {
                                dispatch(filterEarth())
                                setState('earth')
                            }}>Земля</button>
                </div>
            </div>
        </div>
    )
}

export default HeroesFilters;