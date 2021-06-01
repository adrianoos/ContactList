import React from 'react'

const ListWrapper = ({ users }) => {


    return (
        <div id='ListWrapper'>
           <form>
           <input placeholder='Filter' type='text' className='LoginInputs'></input>
           <button>Filter</button>
           </form>
        </div>
    )
}

export default ListWrapper
