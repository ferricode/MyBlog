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
import { Photos } from './components/Photos/Photos';
import { CreatePhoto } from './components/CreatePhoto/CreatePhoto';
import { EditPhoto } from './components/EditPhoto/EditPhoto';
import { PhotoDetails } from './components/PhotoDetails/PhotoDetails';
import { RouteGuard } from './components/common/RouteGuard';

import { AuthProvider } from './contexts/AuthContext';
import { PostProvider } from './contexts/PostContext';
import { PhotoProvider } from './contexts/PhotoContext';

function App() {

  return (
    <AuthProvider >
      <PostProvider >
        <PhotoProvider >
          <Routes>
            <Route path='/' element={<Layout />} >
              <Route index element={<Home />} />
              <Route path='register' element={<Register />} />
              <Route path='login' element={<Login />} />
              <Route path='posts' element={<Posts />} />

              <Route element={<RouteGuard />}>
                <Route path='create-post' element={<CreatePost />} />
                <Route path='posts/:postId/edit' element={<EditPost />} />
                <Route path='logout' element={<Logout />} />
              </Route>

              <Route path='posts/:postId/details' element={<PostDetails />} />
              <Route path='photos' element={<Photos />} />

              <Route element={<RouteGuard />}>
                <Route path='photos/:photoId/edit' element={<EditPhoto />} />
                <Route path='create-photo' element={<CreatePhoto />} />
              </Route>

              <Route path='photos/:photoId/details' element={<PhotoDetails />} />
            </Route >
          </Routes>
        </PhotoProvider>
      </PostProvider>
    </AuthProvider>
  );
}

export default App;
