import React, { useEffect, useState } from 'react';
import './JCList.css';
import image1 from '../../assets/Icons/accounts 1.png';
import image2 from '../../assets/Icons/business 1.png';
import image3 from '../../assets/Icons/chip 1.png';
import image4 from '../../assets/Icons/social-media 1.png';
import Card from '../Card/Card';

const JCList = () => {
    const [cards, setCards] = useState([]);

    useEffect( () => {
        fetch('https://job-server-one.vercel.app/cate')
        .then(res => res.json())
        .then(data => setCards(data))
    }, [])


    return (
        <div>
            <div className='job-header'>
                <h2>Job Category List</h2>
                <p>Explore thousands of job opportunities with all the information you need. Its your future</p>
            </div>
            <div className='list'>
            {
                cards.map(card => <Card key={card.id} card={card} ></Card>)
            }
                
            </div>
        </div>
    );
};

export default JCList;