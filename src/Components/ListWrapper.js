import React from 'react'
import ListItem from './ListItem'

const ListWrapper = ({ users }) => {


    return (
        <div id='ListWrapper'>
           <form>
           <input placeholder='Filter' type='text' className='LoginInputs'></input>
           <button>Filter</button>
           </form>
           <ListItem />
        </div>
    )
}

export default ListWrapper
