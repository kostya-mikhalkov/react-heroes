import { useState, useEffect } from "react";
import { useHttp } from "../../hooks/http.hook";
import { useDispatch } from "react-redux";
import { heroesPushed } from "../../slice/sliceHeroes";

// Задача для этого компонента:
// Реализовать создание нового героя с введенными данными. Он должен попадать
// в общее состояние и отображаться в списке + фильтроваться
// Уникальный идентификатор персонажа можно сгенерировать через uiid
// Усложненная задача:
// Персонаж создается и в файле json при помощи метода POST
// Дополнительно:
// Элементы <option></option> желательно сформировать на базе
// данных из фильтров

const HeroesAddForm = () => {
    const [name, setName] = useState('');
    const [descr, setDescr] = useState('');
    const [state, setState] = useState({});
    const dispatch = useDispatch();
    const {postRequest} = useHttp();
    const requestPost = (e) => {
        e.preventDefault();
        postRequest('http://localhost:3001/heroes', state)
        .then(data => {
            dispatch(heroesPushed(data))
            setState({})
            setName('');
            setDescr('')
        })     
    }
    

    return (
        <form className="border p-4 shadow-lg rounded"
              onSubmit={(e) => requestPost(e)}>
            <div className="mb-3">
                <label htmlFor="name" className="form-label fs-4">Имя нового героя</label>
                <input 
                    required
                    type="text" 
                    name='name'
                    className="form-control" 
                    id="name" 
                    placeholder="Как меня зовут?"
                    value={name}
                    onChange={(e) => {
                        setState({
                            ...state,
                            name: e.target.value
                        })
                        setName(e.target.value)
                    }}/>
            </div>

            <div className="mb-3">
                <label htmlFor="text" className="form-label fs-4">Описание</label>
                <textarea
                    required
                    name="text" 
                    className="form-control" 
                    id="text" 
                    placeholder="Что я умею?"
                    style={{"height": '130px'}}
                    value={descr}
                    onChange={(e) => {
                        setState({
                        ...state,
                        description: e.target.value
                                })
                        setDescr(e.target.value)
                    }
                    }/>
            </div>

            <div className="mb-3">
                <label htmlFor="element" className="form-label">Выбрать элемент героя</label>
                <select 
                    required
                    className="form-select" 
                    id="element" 
                    name="element"
                    onChange={(e) => setState({
                        ...state,
                        element: e.target.value
                    })}>
                    <option >Я владею элементом...</option>
                    <option value="fire">Огонь</option>
                    <option value="water">Вода</option>
                    <option value="wind">Ветер</option>
                    <option value="earth">Земля</option>
                </select>
            </div>

            <button type="submit" className="btn btn-primary">Создать</button>
        </form>
    )
}

export default HeroesAddForm;