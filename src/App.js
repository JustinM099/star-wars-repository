import './App.css';
import Navbar from './components/Navbar'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import People from './pages/People'
import Planets from './pages/Planets'
import Starships from './pages/Starships'
import About from './pages/About'


function App() {
  return (
    <div className="App">


        <Router>

        <div className="App-body" style={{
          backgroundImage: "url(/img/stars.jpg)",
          backgroundSize: 'cover'
        }}>
          <Navbar />
          <Routes>
            <Route path='/' element={<People />} />
            <Route path='/Home' element={<People />} />
            <Route path='/People' element={<People />} />
            <Route path='/Planets' element={<Planets />} />
            <Route path='/Starships' element={<Starships />} />
            <Route path='/About' element={<About />} />
          </Routes>
        </div>
        </Router>

    </div>
  );
}

export default App;