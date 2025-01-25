
import './App.css'
import { BrowserRouter as Router, Route, Routes,Navigate } from 'react-router-dom';
import { Contact } from './ContactUs/Contact'
import HomePage from './Home/HomePage'
import Navbar from './Home/NavBar';
import Footer from './Home/Footer';
import { GalleryMain } from './Gallery/GalleryMain';
import BlogPage from './Blogs/BlogPage';
import Projects from './Projects/Projects';
import Events from './PastEvents/Events';

import { JoinUs } from './JoinUs/JoinUs';

import { TeamMain } from './Team/TeamMain';
import BlogDetailsMain from './Blog-Details/BlogDetailsMain';
import UpcomingEvents from './UpComing Events/UpcomingEvents';
import ProjectDetails from './Project-Details/Project-Details';


function App() {
 

  return (
    <>
       <Router>
      <Navbar />
      <Routes>
     

        <Route path="/" element={<HomePage/>} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/gallery" element={<GalleryMain/>}/>
<Route path="/blog" element={<BlogPage/>}/>
<Route path="/blog-details" element={<BlogDetailsMain/>}/>
<Route path="/projects" element={<Projects/>}/>
<Route path="/past-events" element={<Events/>}/>
<Route path="/upcoming-events" element={<UpcomingEvents/>}/>
<Route path="/join-us" element={<JoinUs/>}/>
<Route path="/team" element={<TeamMain/>}/>
<Route path="/project-details/:id" element={<ProjectDetails/>}/>
<Route path="/blog-details/:id" element={<BlogDetailsMain/>}/>
      </Routes>
      <Footer/>
    </Router>
    </>
  )
}

export default App
