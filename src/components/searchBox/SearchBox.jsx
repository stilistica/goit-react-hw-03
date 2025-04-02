import s from './SearchBox.module.css'

export default function SearchBox({name, onFilter}) {
    return (
        <div className={s.container}>
            <p>Find contacts by name</p>
            <input
            type="text"
            value={name}
            onChange={(e) => onFilter(e.target.value)}
            className={s.input}/>
        </div>
    );
}

