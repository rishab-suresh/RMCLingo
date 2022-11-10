import React from 'react'
import {Routes, Route} from 'react-router-dom'
import Contact from './routes/Contact';
import Languages from './routes/Languages';
import About from './routes/About';
import Home from './routes/Home';
import Pricing from './routes/Pricing';
import Training from './routes/Training';
import Spanish from './components/Spanish';
import Arabic from './components/Arabic';


function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/pricing' element={<Pricing />} />
        <Route path='/training' element={<Training />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/About' element={<About/>} />
        <Route path='/Languages' element={<Languages/>}/>
        <Route path='/Spanish' element={<Spanish/>}/>
        <Route path='/Arabic' element={<Arabic/>}/>
       
      </Routes>
    </>
  );
}

export default App;
