import { Routes, Route } from 'react-router-dom';

import { Layout } from './components/Layout/Layout';
import { Home } from './components/Home/Home';
import { Register } from './components/Register/Register';
import { Login } from './components/Login/Login';

import { useEffect, useState } from 'react';

function App() {
  const [posts, setPosts] = useState([]);

  return (
    <Routes>
      <Route path='/' element={<Layout />} >
        <Route index element={<Home />} />
        <Route path='register' element={<Register />} />
        <Route path='login' element={<Login />} />
        <Route index element={<Home />} />
      </Route >
    </Routes>
  );
}

export default App;
