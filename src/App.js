import './App.css';

// Adding the following imports;
import {BrowserRouter as Router, Routes, Route, NavLink} from 'react-router-dom';
import Home from './Views/Home';
import Content from './Views/Content';
import PremiumContent from './Views/PremiumContent';

function App() {
  return (
    <div className="App">
      <Router>
        <div>
          <NavLink className="content" exact activeClassName="active" to="/">Home</NavLink>
          <NavLink className="content" activeClassName="active" to="/content">Content</NavLink>
          <NavLink className="content" activeClassName="active" to="/premium">Premium Content</NavLink>
        </div>
        <Routes>
          <Route path="/" element={<Home/>}></Route>
          <Route path="/content" element={<Content/>}></Route>
          <Route path="/premium" element={<PremiumContent/>}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
