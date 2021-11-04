import React, { useEffect, useState } from "react";
import Service from "../Service/Service";

const Services = () => {
  const [services, setServices] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/services")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);
  return (
    <div className="container mx-auto text-center mt-5" id="services">
      <h2>Services</h2>
      <div className="row row-cols-1 row-cols-lg-3 g-2 g-lg-3 my-4">
        {services.map((service) => (
          <Service services={service} key={service.id}></Service>
        ))}
      </div>
    </div>
  );
};

export default Services;
