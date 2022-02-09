import Header from './Header';
import Nav from './Nav';
import Footer from './Footer';
import Home from './Home';
import NewPost from './NewPost';
import PostPage from './PostPage';
import About from './About';
import Missing from './Missing';

import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Header/>
      <Nav/>
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/about" element={<About />} />
          <Route exact path="/post" element={<NewPost />} />
          <Route exact path="/post/:id" element={<PostPage />} />
          <Route exact path="*" element={<Missing />} />
        </Routes>
      </Router>  
      <Footer/>
    </div>
  );
}

export default App;
