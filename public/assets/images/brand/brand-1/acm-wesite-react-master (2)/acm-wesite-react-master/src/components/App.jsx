
import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Contact } from './ContactUs/Contact'
import HomePage from './Home/HomePage'
import Navbar from './Home/Navbar';
import Footer from './Home/Footer';
import { GalleryMain } from './Gallery/GalleryMain';
import BlogPage from './Blogs/BlogPage';
import Projects from './Projects/Projects';
import Events from './PastEvents/Events';
import UpcomingEvents from './Home/UpcomingEvents';
import { JoinUs } from './JoinUs/JoinUs';

import { TeamMain } from './Team/TeamMain';

function App() {
 

  return (
    <>
       <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/gallery" element={<GalleryMain/>}/>
<Route path="/blog" element={<BlogPage/>}/>
<Route path="/projects" element={<Projects/>}/>
<Route path="/past-events" element={<Events/>}/>
<Route path="/upcoming-events" element={<UpcomingEvents/>}/>
<Route path="/join-us" element={<JoinUs/>}/>
<Route path="/team" element={<TeamMain/>}/>
      </Routes>
      <Footer/>
    </Router>
    </>
  )
}

export default App
