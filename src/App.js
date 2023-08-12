import './App.css';
// import Coursole from './Courso/Coursole';
// import Sample from './Extra/Sample';
// import Into from './Extra/Into';
import Navbar from './Navbar';
// import CorData from './UserIn/CorData';
// import Slider from './UserIn/Slider';

import {} from 'bootstrap'
// import { useState } from 'react';
import PageRoutes from './PageRoutes';
// import BackUp from './BackUp';

function App() {
  // const [openProfile, setOpenProfile] = useState(false)
  return (
    <div className="App">

      <Navbar />
      <PageRoutes />
      {/* <BackUp /> */}

      {/* <Sample /> */}
      {/* <Coursole /> */}
      {/* <button onClick={()=>{
        setOpenProfile((prev)=> !prev)
      }}> show</button>

    { openProfile && <Drop />
    } */}
      

      {/* <CorData /> */}


      {/* <Router> */}
        {/* <Route path='/' element={<Home />} /> */}
        {/* <Route  path='/store' element={<Store />}/>
        <Route path='/iPhone' element={<IPhone />} /> */}
      {/* </Router> */}
    </div>
  );
}

export default App;
