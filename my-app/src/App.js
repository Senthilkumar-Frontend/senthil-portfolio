import { Routes, Route } from 'react-router-dom'
import './App.css';
import HotelBooking from './hotelbooking/HotelBooking';
import SinglePreview from './hotelbooking/components/preview/SinglePreview';

export default function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<HotelBooking />}/>
        <Route path='/hotel/:id' element={<SinglePreview />} />
      </Routes>
    </div>
  );
}
