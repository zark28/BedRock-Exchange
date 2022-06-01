import './App.css';
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import Home from './pages';
import About from './pages/aboutPage';
import Blog from './pages/blogPage';
import Contact from './pages/contactPage';
import BlogDetail from './components/BlogDetail';
import LoginPage from './pages/loginPage';
import AdminPage from './pages/adminPage';
import { useEffect, useState } from 'react';
import { LoginContext } from './context/LoginContext';
import NotFoundPage from './pages/NotFoundPage';
import useRequestResource from './hooks/useRequestResource';
import ExternalLinkRedirect from './components/ExternalLinkRedirect';

function App() {
  const { getResources, resources } = useRequestResource({ endpoint: 'blogs' });
  useEffect(() => {
    getResources();
  }, [getResources]);

  const [logged, setLogged] = useState();

  const navDir = <Navigate to="/login" />;
  return (
    <BrowserRouter>
      <LoginContext.Provider value={{ logged, setLogged }}>
        <Routes>
          <Route index element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/blog" element={<Blog />} />
          <Route
            path="/blog/:blogId"
            element={<BlogDetail allBlogs={resources.blogs} />}
          />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/admin" element={!logged ? navDir : <AdminPage />} />
          <Route path="*" element={<NotFoundPage />} />
          <Route
            path="/instagram"
            element={
              <ExternalLinkRedirect url="https://m.facebook.com/Bedrock877" />
            }
          />
          <Route
            path="/twitter"
            element={<ExternalLinkRedirect url="https://twitter.com" />}
          />
          <Route
            path="/telegram"
            element={<ExternalLinkRedirect url="https://telegram.com" />}
          />
        </Routes>
      </LoginContext.Provider>
    </BrowserRouter>
  );
}

export default App;
