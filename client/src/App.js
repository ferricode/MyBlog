import { Routes, Route, useNavigate } from 'react-router-dom';

import { useEffect, useState } from 'react';

import * as authService from './services/authService';
import * as postService from './services/postService';

import { Layout } from './components/Layout/Layout';
import { Home } from './components/Home/Home';
import { Register } from './components/Register/Register';
import { Login } from './components/Login/Login';
import { Logout } from './components/Logout/Logout';
import { Posts } from './components/Posts/Posts';

import { AuthContext } from './contexts/AuthContext';

function App() {
  const navigate = useNavigate();
  const [posts, setPosts] = useState([]);
  const [auth, setAuth] = useState([]);
  //const [auth, setAuth] = useState({});

  useEffect(() => {
    postService.getAll()
      .then(result => {
        console.log(result);
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

    const { repeatPassword, ...registerData } = values;

    if (repeatPassword !== registerData.password) {
      console.log(repeatPassword);
      console.log(registerData.password);
      console.log('Pass is not matching');
      return;
      //TODO: Add form-validations
    }

    try {
      const result = await authService.register(registerData);

      setAuth(result);

      navigate('/');
    } catch (error) {
      console.log('Register Error');
    }
  };

  const onLogout = async () => {
    //await authService.logout();

    setAuth({});
  };
  const contextValues = {
    onLoginSubmit,
    userId: auth._id,
    token: auth.accessToken,
    userEmail: auth.email,
    userName: auth.userName,
    isAuthenticated: !!auth.accessToken,
    onRegisterSubmit,
    onLogout

  };

  return (
    <AuthContext.Provider value={contextValues}>
      <Routes>
        <Route path='/' element={<Layout />} >
          <Route index element={<Home />} />
          <Route path='register' element={<Register />} />
          <Route path='login' element={<Login />} />
          <Route path='logout' element={<Logout />} />
          <Route path='photos' element={<Home />} />
          <Route path='posts' element={<Posts posts={posts} />} />
        </Route >
      </Routes>
    </AuthContext.Provider>
  );
}

export default App;
