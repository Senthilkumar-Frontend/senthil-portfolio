import axios from "axios";

import { useDispatch, useSelector } from 'react-redux';

import { setHotelList } from '../redux/hoteldetailsstore';

import { useState, useEffect, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';

import './HotelBooking.css';
import Header from './components/header/Header';
import Input from './components/input/Input';
import Preview from './components/preview/Preview';

// export const TestContext = createContext();

export default function HotelBooking() {

  let dispatch = useDispatch();

  let { hotelList } = useSelector(state => state.hotelDetails)

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
        const response = await axios.get('https://mocki.io/v1/4775a500-cf31-4bee-8a65-0c849b6e4d0c')
        const result = await response.data;
        dispatch(setHotelList(result));

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
      { !hotelList.length ? (<div className='loader'>Please push back and sit, Your Coffee is preparing...</div>) : (
      <>
        <Header content={'Hotel Rooms Booking'} />
        <section className="section-container">
          <div className="hotel-search">
            <Input placeHolder='search hotel...' inputHandler={handleInput} />
          </div>
          <div className="hotelpreview-section">
            { hotelList && <Preview previewData={filteredHotelList} previewClickHandler={hotelPreviewHandling} /> }
          </div>
        </section>
      </>)}
    </div>
  );
}
