import React from 'react'
import ListItem from './ListItem'

const ListWrapper = ({ users, updateInput, logClicked, clickedIDs }) => {

    return (
        <div id='ListWrapper'>
           <form>
           <input placeholder='Filter by First or Last name' type='text' onChange={updateInput}></input>
           <button>Filter</button>
           </form>
           { users.map((item) =>
           <ListItem
           avatar={item.avatar}
           firstName={item.first_name}
           lastName={item.last_name}
           key={item.id}
           id={item.id}
           logClicked={logClicked}
           clickedIDs={clickedIDs}
           />)
           }

        </div>
    )
}

export default ListWrapper
