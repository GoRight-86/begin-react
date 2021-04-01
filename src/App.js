// import logo from './logo.svg';
import './App.css';
import React, { useRef, useState } from 'react';
import Hello from './Hello';
import Wrapper from './Wrapper';
import Counter from './Counter';
import InputSample from './InputSample';
import InputSample2 from './InputSample2';
import UserList from './UserList';
import UserList2 from './UserList2';
import CreateUser from './CreateUser';

function App() {
  const name = 'react';
  const style = {
    backgroundColor: 'black',
    color: 'aqua',
    fontSize: 24,
    padding: '1rem'
  }
  // onChange
  const [inputs, setInputs] = useState({
    username: '',
    email: ''
  });
  const { username, email } = inputs;
  const onChange = e => {
    const { name, value } = e.target;
    setInputs({
      ...inputs,
      [name]: value
    });
  };
  // onCreate
  const [users,setUsers] = useState([
    {
      id: 1,
      username: 'velopert',
      email: 'public.velopert@gmail.com'
    },
    {
      id: 2,
      username: 'tester',
      email: 'tester@example.com'
    },
    {
      id: 3,
      username: 'liz',
      email: 'liz@example.com'
    },
  ]);
  const nextId = useRef(4);
  const onCreate = () => {
    const user = {
      id: nextId.current,
      username,
      email
    };
    setUsers([...users, user]);
    setInputs({
      username: '',
      email: ''
    })
    nextId.current += 1;
  };
  // onRemove
  const onRemove = id => {
    setUsers(users.filter(user => user.id !== id));
  };

  return (
    <Wrapper>
      <Hello name='react' color='red' isSpecial />
      <Hello name='ddddddd' color='pink' />
      <Hello color='green' />
      <div style={style}>{name}</div>
      <div className='gray-box'></div>
      <br />
      <Counter />
      <br />
      <InputSample />
      <br />
      <InputSample2 />
      <br />
      <UserList />
      <br />
      <CreateUser
        username={username}
        email={email}
        onChange={onChange}
        onCreate={onCreate}
      />
      <UserList2 users={users} onRemove={onRemove} />
    </Wrapper>
  );
}

export default App;
