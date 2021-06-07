import React from 'react'
import { FaCheckCircle } from 'react-icons/fa';
import { FaRegCheckCircle } from 'react-icons/fa';

const ListItem = ({ avatar, firstName, lastName, id, logClicked, clickedIDs }) => {

    return (
        <div id='ListItem' onClick={() => logClicked(id)}>
            <img src={avatar} alt="avatar picture"></img>
            <p>{firstName}</p>
            <p>{lastName}</p>
            { !clickedIDs.includes(id) ? <FaRegCheckCircle /> : <FaCheckCircle /> }
        </div>
    )
}

export default ListItem;
