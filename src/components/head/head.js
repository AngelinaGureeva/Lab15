import "./head.css"
import {Link} from 'react-router-dom'
export function Head(){
    return(
        <div className="head">
            <Link to="/">Новости</Link> &nbsp;
            <Link to="/contacts">Контакты</Link> &nbsp;
            <Link to="/about">О проекте</Link>
        </div>
    );
}

export default Head;