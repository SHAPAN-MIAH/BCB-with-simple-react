import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserPlus } from '@fortawesome/free-solid-svg-icons'
import './Info.css';


const Info = (props) => {
    console.log(props)
    const {img, name, salary, club, stats} = props.cricketer;
    const handelAddPlayer = props.handelAddPlayer;
    return (
        <div className='info-display'>
            <img src={img} alt=""/>
            <h5>{name}</h5>
            <h6 className="salary">Salary: ${salary}</h6>
            <div>
            <h6>Club: {club}</h6>
            <h6>Stats: {stats}</h6>                         
            </div>
            <button onClick={() => handelAddPlayer(props.cricketer)} className='btn btn-warning addBtn'><FontAwesomeIcon icon={faUserPlus} /> add to team</button>
        </div>
    );
};

export default Info;