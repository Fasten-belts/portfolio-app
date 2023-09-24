import NavBar from './NavBar/NavBar';
import Footer from './Footer/Footer';
import '../css/main.css';
import { GlobalStyle } from './GlobalStyle';
import Home from 'pages/HomePage';
import Projects from 'pages/ProjectsPage';
import Contacts from 'pages/ContactsPage';
import Project from 'pages/Project';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/project/:id" element={<Project />} />
        <Route path="/contacts" element={<Contacts />} />
      </Routes>
      <Footer />
      <GlobalStyle />
    </>
  );
}

export default App;
