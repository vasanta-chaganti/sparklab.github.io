import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

// Import pages
import App from './pages/Home.jsx';
import Team from './pages/Team.jsx';
import GitHub from './pages/GitHub.jsx';
import Research from './pages/Research.jsx';
import Contact from './pages/Contact.jsx';
import Blog from './pages/Blog.jsx';
import Papers from './pages/Papers.jsx';
import About from './pages/About.jsx';

// Team Pages
import Phillip_Dinh from './pages/team_members/Phillip_Dinh.jsx';
import XiTeng_Tay from './pages/team_members/XiTeng_Tay.jsx';
import Ritika_Rajamani from './pages/team_members/Ritika_Rajamani.jsx';

// Import Navbar and Footer components
import Navbar from './components/Navbar.jsx';
import Footer from './components/Footer.jsx';
import './index.css';

const NavFooter = () => {
  return (
    <div>
      <Navbar />
      <Footer />
    </div>
  );
};

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<NavFooter />}>
        <Route index={true} path='/' element={<App />} />
        <Route index={false} path='team' element={<Team />} />
        <Route index={false} path='github' element={<GitHub />} />
        <Route index={false} path='contact' element={<Contact />} />
        <Route index={false} path='research' element={<Research />} />
        {/* <Route index={false} path='blog' element={<Blog />} /> */}
        <Route index={false} path='papers' element={<Papers />} />
        <Route index={false} path='about' element={<About />} />

        {/* Team Pages */}
        <Route index={false} path='team/phillip-dinh' element={<Phillip_Dinh />} />
        <Route index={false} path='team/ritika-rajamani' element={<Ritika_Rajamani />} />
        <Route index={false} path='team/xi-teng-tay' element={<XiTeng_Tay />} />
      </Route>
    </Routes>
  </BrowserRouter>
)