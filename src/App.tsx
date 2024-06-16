import { BrowserRouter as Router, Route,Routes } from 'react-router-dom';
import Header from './Components/Header';
import Footer from './Components/Footer';
import Dashboard from './Components/Dashboard'
import Contact from './Components/Contact';

const App = () => (
  <Router>
    <div>
      <Header />
      <div className='mainContent'>

      <Routes>
        <Route path="/" caseSensitive Component={Dashboard} />
        <Route path="/contact" Component={Contact} />
        <Route path="/dashboard" Component={Dashboard} /> {/* Fallback route */}
      </Routes>
      </div>

      <Footer />
    </div>
  </Router>
);

export default App;
