import React, { useState, useEffect } from "react";
import axios from "axios";
import { BsFillArchiveFill, BsFillGrid3X3GapFill, BsPeopleFill } from 'react-icons/bs';

function DisplayingCards() {
    const [counts, setCounts] = useState({
        bookingsCount: 0,
        usersCount: 0,
        packageRequestsCount: 0
    });

    const [displayCounts, setDisplayCounts] = useState({
        bookingsCount: 0,
        usersCount: 0,
        packageRequestsCount: 0
    });

    useEffect(() => {
        const fetchCounts = async () => {
            try {
                const response = await axios.get("http://localhost:8888/countsofall");
                setCounts(response.data);
            } catch (error) {
                console.error("Error fetching counts", error);
            }
        };

        fetchCounts();
    }, []);

    useEffect(() => {
        const incrementCounts = (target, key) => {
            let count = 0;
            const increment = target / 50; // Adjust this value to change the speed of the animation
            const interval = setInterval(() => {
                count += increment;
                if (count >= target) {
                    clearInterval(interval);
                    setDisplayCounts(prev => ({ ...prev, [key]: target }));
                } else {
                    setDisplayCounts(prev => ({ ...prev, [key]: Math.floor(count) }));
                }
            }, 20); // Adjust this value to change the speed of the animation
        };

        incrementCounts(counts.bookingsCount, 'bookingsCount');
        incrementCounts(counts.usersCount, 'usersCount');
        incrementCounts(counts.packageRequestsCount, 'packageRequestsCount');
    }, [counts]);

    return (
        <>
            <div className='main-cards'>
                <div className='card'>
                    <div className='card-inner'>
                        <h3>BOOKINGS</h3>
                        <BsFillArchiveFill className='card_icon'/>
                    </div>
                    <h1>{displayCounts.bookingsCount}</h1>
                </div>
                <div className='card'>
                    <div className='card-inner'>
                        <h3>Total Customers</h3>
                        <BsFillGrid3X3GapFill className='card_icon'/>
                    </div>
                    <h1>{displayCounts.usersCount}</h1>
                </div>
                <div className='card'>
                    <div className='card-inner'>
                        <h3>Form Request</h3>
                        <BsPeopleFill className='card_icon'/>
                    </div>
                    <h1>{displayCounts.packageRequestsCount}</h1>
                </div>
            </div>
        </>
    );
}

export default DisplayingCards;
