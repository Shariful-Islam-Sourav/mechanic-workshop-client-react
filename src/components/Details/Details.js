import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

const Details = () => {
    const {serviceId} = useParams();
    const [service, setService] = useState([]);
    useEffect(() => {
        fetch(`https://secure-hollows-57208.herokuapp.com/services/${serviceId}`)
        .then(res => res.json())
        .then(data => setService(data));
    },[serviceId])
    return (
        <div>
            <img src={service.img} alt="service" width="500px"/>
            <h2>{service.name}</h2>
            <h4>{service.price}</h4>
            <p>{service.desc}</p>
        </div>
    );
};

export default Details;