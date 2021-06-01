import React from 'react'

const ListItem = ({ avatar, firstName, lastName }) => {
    return (
        <div id='ListItem'>
            <img src={avatar} alt="avatar picture"></img>
          <p>{firstName}</p>
          <p>{lastName}</p>

        </div>
    )
}

export default ListItem


// AWATAR || FIRST NAME   , LAST NAME   ,   CHECKBOX

//<input type="checkbox" id="scales" name="scales"
//checked />