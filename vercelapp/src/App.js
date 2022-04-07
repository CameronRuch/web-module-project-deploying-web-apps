import React, { useState } from 'react';

import './App.css';
import Form from './Components/Form';




const initialFormValues = {
  username: '',
  password: '',
  email: '',
  tos: false
}

const initialFormErrors = {
  username: '',
  password: '',
  email: '',
  tos: ''
}

function App() {
  const [formValues, setFormValues] = useState(initialFormValues);
  const [formErrors, setFormErrors] = useState(initialFormErrors);
  const [users, setUsers] = useState([]);

  const handleSubmit = () => {
    setUsers(users)
  }
  
  const handleChange = (name, value) => {

    setFormValues({ ...formValues, [name]: value });
  }

  return (
    <div className="App">
      <Form 
      values={formValues}
      change={handleChange}
      errors={formErrors}
      submit={handleSubmit}
      />
    
    {users.map(user => (
      <div key={user.id}>       
        <p>{user.username} - {user.createdAt}</p>
      </div>
    ))}

    </div>
  )
}

export default App;
