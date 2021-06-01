import React, { useState, useEffect } from 'react';
import './App.css';
import Header from './Components/Header'
import $ from 'jquery'
import ListWrapper from './Components/ListWrapper';

function App() {
  const [ users, setUsers ] = useState([])
  const [ filteredUsers, setFilteredUsers ] = useState([])
  const [ inputValue, setInputValue ] = useState('')

  const getData = () => {
    $.getJSON('https://teacode-recruitment-challenge.s3.eu-central-1.amazonaws.com/users.json',
    (data) => (setUsers(data.sort((a,b)=> (a.last_name.toLowerCase() > b.last_name.toLowerCase() ? 1 : -1)))))
  };

  const updateInput = (e) => {
    setInputValue(e.target.value)
    console.log(inputValue)
    setFilteredUsers(users.filter((item)=> item.first_name.toLowerCase().includes(inputValue.toLowerCase()) || item.last_name.toLowerCase().includes(inputValue.toLowerCase())))
};
  useEffect(() => {
    getData()
    if (users) {setFilteredUsers(users)}
  }, [])

  return (
    <div className='App'>
      <Header />
      <ListWrapper users={filteredUsers} updateInput={updateInput} />
    </div>
  );
}

export default App;
