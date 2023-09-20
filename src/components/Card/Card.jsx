import React from 'react';

const Card = (props) => {
    const {categorylogo, jobs, categoryname} = props.card;



    return (
        <div className='jcc-sp'>
            <img src={categorylogo} />
            <h6>{categoryname}</h6>
            <p>{jobs}</p>
        </div>
    );
};

export default Card;