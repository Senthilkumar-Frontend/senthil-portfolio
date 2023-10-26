// import { Routes, Route } from 'react-router-dom'
import './App.css';
import Fleet from './fleet/Fleet';
// import HotelBooking from './hotelbooking/HotelBooking';
// import SinglePreview from './hotelbooking/components/preview/SinglePreview';

export default function App() {
  return (
    <div className="App">

      {/* Fleet studio Interview Question */}
      <Fleet />


      {/* <Routes>
        <Route path='/' element={<HotelBooking />}/>
        <Route path='/hotel/:id' element={<SinglePreview />} />
      </Routes> */}
    </div>
  );
}
