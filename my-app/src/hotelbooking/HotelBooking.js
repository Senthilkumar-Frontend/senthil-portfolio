import { useState, useEffect, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';

import './HotelBooking.css';
import Header from './components/header/Header';
import Input from './components/input/Input';
import Preview from './components/preview/Preview';

export default function HotelBooking() {

  let [ hotelList, setHotelList ] = useState([]);
  let [ query, setQuery ] = useState('');
  const navigate = useNavigate();

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

  const hotelPreviewHandling = (hotelData) => {
    navigate(`/hotel/${hotelData.id}`);
  }

  return (
    <div className="hotelbooking">
      <Header content={'Hotel Rooms Booking'} />

      <section className="section-container">
        <div className="hotel-search">
          <Input placeHolder='search hotel...' inputHandler={handleInput} />
        </div>
        <div className="hotelpreview-section">
          { hotelList && <Preview previewData={filteredHotelList} previewClickHandler={hotelPreviewHandling} /> }
        </div>
      </section>
    </div>
  );
}
