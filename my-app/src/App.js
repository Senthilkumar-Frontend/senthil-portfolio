import { useState, useEffect } from 'react';

import './App.css';
import Header from './hotelbooking/components/header/Header';
import Input from './hotelbooking/components/input/Input';
import Preview from './hotelbooking/components/preview/Preview';

export default function App() {

  let [ hotelList, setHotelList ] = useState();

  useEffect(() => {
    let getHotelList = async () => {
      try {
        const response = await fetch('https://mocki.io/v1/4775a500-cf31-4bee-8a65-0c849b6e4d0c')
        const result = await response.json();
        setHotelList(result);
      } catch(err) {
        console.log(err)
      }
    }

    getHotelList();
  }, [])

  return (
    <div className="App">
      <Header content={'Hotel Rooms Booking'} />

      <section className="section-container">
        <div className="hotel-search">
          <Input placeHolder='search hotel...' />
        </div>
        <div className="hotelpreview-section">
          { hotelList && <Preview previewData={hotelList} /> }
        </div>
      </section>
    </div>
  );
}
