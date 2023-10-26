import './Fleet.css';

import { useMemo, useState } from 'react';

export default function Fleet() {

    const [ query, setQuery ] = useState('')

    //getColorSet will be use whenever the color data set is fetch from the server.
    // Here i used a static data set.

    const [ colorSet, getColorSet ] = useState([
        {
            id: 'red',
            color: 'Red',
            hexValue: '#FF0000'
        },
        {
            id: 'green',
            color: 'Green',
            hexValue: '#00FF00'
        },
        {
            id: 'black',
            color: 'Black',
            hexValue: '#000000'
        },
        {
            id: 'blue',
            color: 'Blue',
            hexValue: '#0000FF'
        },
        {
            id: 'grey',
            color: 'Grey',
            hexValue: '#808080'
        }
    ], []);

    // Searching logic.
    const filteredColor = useMemo(() => {
        return colorSet.length && colorSet.filter((item) => 
            item.color.toLowerCase().includes(query.toLowerCase())
        )
    }, [query, colorSet])

    return(
        <div className='fleet-color-set'>
            <div className='fleet-header'>COLOR CODES</div>
            <div className='input-section-cntr'>
                <input className='input-sec' onChange={(e) => setQuery(e.target.value)}/>
            </div>
            <div className='color-codes'>
                {filteredColor.map((item) => {
                    return (
                        <div className='colorboxes' key={item.id} style={{background: item.hexValue}}>
                            <div className='hex-content'>{item.hexValue}</div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}