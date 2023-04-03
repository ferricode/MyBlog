import { Routes, Route, useNavigate } from 'react-router-dom';

import { useEffect, useState } from 'react';

import * as authService from './services/authService';

import { Layout } from './components/Layout/Layout';
import { Home } from './components/Home/Home';
import { Register } from './components/Register/Register';
import { Login } from './components/Login/Login';

import { AuthContext } from './contexts/AuthContext';

function App() {
  const navigate = useNavigate();
  const [posts, setPosts] = useState([]);
  const [auth, setAuth] = useState([]);
  //const [auth, setAuth] = useState({});

  useEffect(() => {
    fetch(`http://localhost:3030/jsonstore/posts`)   //TODO:change to data/posts
      .then(res => res.json())
      .then(data => {
        const result = Object.keys(data).map(id => ({ id, ...data[id] }));
        setPosts(result);
      });
  }, []);

  const onLoginSubmit = async (data) => {
    try {
      const result = await authService.login(data);

      setAuth(result);

      navigate('/');
    } catch (err) {
      console.log('Login Error');
    }

  };

  const onRegisterSubmit = async (values) => {

    const { repeatPassword, password, ...registerData } = values;

    if (repeatPassword !== password) {
      console.log(repeatPassword);
      console.log(password);
      console.log('Pass is not matching');
      return;
      //TODO: Add form-validations
    }

    try {
      const result = await authService.register(values);

      setAuth(result);

      navigate('/');
    } catch (error) {
      console.log('Register Error');
    }
  };

  const contextValues = {
    onLoginSubmit,
    userId: auth._id,
    token: auth.accessToken,
    userEmail: auth.email,
    isAuthenticated: !!auth.accessToken,
    onRegisterSubmit

  };

  return (
    <AuthContext.Provider value={contextValues}>
      <Routes>
        <Route path='/' element={<Layout />} >
          <Route index element={<Home />} />
          <Route path='register' element={<Register />} />
          <Route path='login' element={<Login />} />
          <Route path='photos' element={<Home />} />
          <Route path='posts' element={<Home />} />
        </Route >
      </Routes>
    </AuthContext.Provider>
  );
}

export default App;
