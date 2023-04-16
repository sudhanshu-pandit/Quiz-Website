//import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './routes/Home';
import Categories from './routes/Categories';
import Popular from './routes/Popular';
import Whatsnew from './routes/Whatsnew';
import Askaquestion from './routes/Askaquestion';
import Team from './routes/Team';


function App() {
  return (
    <div className="App">
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/categories" element={<Categories/>}/>
      <Route path="/popular" element={<Popular/>}/>
      <Route path="/whatsnew" element={<Whatsnew/>}/>
      <Route path="/askaquestion" element={<Askaquestion/>}/>
      <Route path="/team" element={<Team/>}/>
    </Routes>
    
    </div>
  );
}

export default App;
