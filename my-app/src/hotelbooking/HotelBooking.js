import { useState, useEffect, useMemo } from 'react';

import './HotelBooking.css';
import Header from './hotelbooking/components/header/Header';
import Input from './hotelbooking/components/input/Input';
import Preview from './hotelbooking/components/preview/Preview';

export default function HotelBooking() {

  let [ hotelList, setHotelList ] = useState([]);
  let [ query, setQuery ] = useState('');

  const filteredHotelList = useMemo(() => {
    return hotelList && hotelList.filter(item => 
       item.name.toLowerCase().includes(query.toLowerCase()) 
    )
  }, [ query, hotelList ])

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

  const handleInput = (currInputValue) => {
    setQuery(currInputValue);
  }

  return (
    <div className="hotelbooking">
      <Header content={'Hotel Rooms Booking'} />

      <section className="section-container">
        <div className="hotel-search">
          <Input placeHolder='search hotel...' inputHandler={handleInput} />
        </div>
        <div className="hotelpreview-section">
          { hotelList && <Preview previewData={filteredHotelList} /> }
        </div>
      </section>
    </div>
  );
}
