import { useEffect } from "react";
import { useState } from "react";
import ServiceCard from "./ServiceCard";

const Services = () => {
  const [services , setServices] = useState([]);

  useEffect(() =>{
    fetch('http://localhost:5000/services')
    .then(res => res.json()) 
    .then(data => setServices(data))
  },[])

    return (
        <div>
            <div className="text-center mb-7 " >
            <h3 className="font-bold text-orange-600 mb-2">Service</h3>
            <h1 className="text-4xl text-black font-bold mb-3">Our Service Area</h1>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Obcaecati cupiditate numquam possimus quae <br /> praesentium mollitia officia quasi, debitis soluta neque.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {
                services.map(service => <ServiceCard 
                    key={service._id}
                    service = {service}      
                    ></ServiceCard>)
              }
            </div>
        </div>
    );
};

export default Services;