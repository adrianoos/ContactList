import React, { useState, useEffect } from 'react';
import './App.css';
import Header from './Components/Header'
import $, { data } from 'jquery'
import ListWrapper from './Components/ListWrapper';

function App() {
  const [ users, setUsers ] = useState([])

  const getData = () => {
    $.getJSON('https://teacode-recruitment-challenge.s3.eu-central-1.amazonaws.com/users.json',
    (data) => (setUsers(data)))
  };


  useEffect(() => {
    getData()
    console.log(users)
  }, [])

  return (
    <div className='App'>
      <Header />
      <ListWrapper users={users}/>
    </div>
  );
}

export default App;
