import React from 'react'
import ListItem from './ListItem'

const ListWrapper = ({ users }) => {

    return (
        <div id='ListWrapper'>
           <form>
           <input placeholder='Filter' type='text' className='LoginInputs'></input>
           <button>Filter</button>
           </form>
           { users.map((item) =>
           <ListItem
           avatar={item.avatar}
           firstName={item.first_name}
           lastName={item.last_name}
           key={item.id}
           />)
           }

        </div>
    )
}

export default ListWrapper
