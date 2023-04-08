import { Routes, Route } from 'react-router-dom';

import { Layout } from './components/Layout/Layout';
import { Home } from './components/Home/Home';
import { Register } from './components/Register/Register';
import { Login } from './components/Login/Login';
import { Logout } from './components/Logout/Logout';
import { Posts } from './components/Posts/Posts';
import { CreatePost } from './components/CreatePost/CreatePost';
import { EditPost } from './components/EditPost/EditPost';
import { PostDetails } from './components/PostDetails/PostDetails';

import { AuthProvider } from './contexts/AuthContext';
import { PostProvider } from './contexts/PostContext';

function App() {

  return (
    <AuthProvider >
      <PostProvider >
        <Routes>
          <Route path='/' element={<Layout />} >
            <Route index element={<Home />} />
            <Route path='register' element={<Register />} />
            <Route path='login' element={<Login />} />
            <Route path='logout' element={<Logout />} />
            <Route path='photos' element={<Home />} />
            <Route path='posts' element={<Posts />} />
            <Route path='create-post' element={<CreatePost />} />
            <Route path='posts/:postId' element={<PostDetails />} />
            <Route path='posts/:postId/edit' element={<EditPost />} />
          </Route >
        </Routes>
      </PostProvider>
    </AuthProvider>
  );
}

export default App;
