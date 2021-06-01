import React, { useState, useEffect } from 'react';
import './App.css';
import Header from './Components/Header'
import $ from 'jquery'
import ListWrapper from './Components/ListWrapper';

function App() {
  const [ users, setUsers ] = useState([])
  const [ filteredUsers, setFilteredUsers ] = useState([])
  const [ inputValue, setInputValue ] = useState('')
  const [ clickedIDs, setClickedIDs ] = useState([])

  const getData = () => {
    $.getJSON('https://teacode-recruitment-challenge.s3.eu-central-1.amazonaws.com/users.json',
    (data) => (setUsers(data.sort((a,b)=> (a.last_name.toLowerCase() > b.last_name.toLowerCase() ? 1 : -1)))))
  };

  const updateInput = (e) => {
    setInputValue(e.target.value)
    console.log(inputValue)
    console.log(users)
    setFilteredUsers(users.filter((item)=> item.first_name.toLowerCase().includes(inputValue.toLowerCase()) || item.last_name.toLowerCase().includes(inputValue.toLowerCase())))
};

const logClicked = (id) => {
  const indexOfID = clickedIDs.indexOf(id)
  if (clickedIDs.includes(id)) {
    setClickedIDs(clickedIDs.filter(item => item !== indexOfID))
  }
  setClickedIDs(prevclickedIDs => [...prevclickedIDs, id])
  console.log(clickedIDs)
  };

  useEffect(() => {
    getData()
  }, [])

  useEffect(() => {
    setFilteredUsers(users)
  }, [users])

  return (
    <div className='App'>
      <Header />
      <ListWrapper users={filteredUsers} updateInput={updateInput} logClicked={logClicked} clickedIDs={clickedIDs}/>
    </div>
  );
}

export default App;
