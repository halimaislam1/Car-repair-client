import React, { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider";
import Swal from "sweetalert2";




const BookingService = () => {
  const service = useLoaderData();
  // console.log(service);
  const { title,img, _id, price } = service;
  const {user} = useContext(AuthContext);


  const handleBookingService = e => {
    e.preventDefault();

    console.log(user);
    const form = e.target;
    const name = form.name.value;
    const date = form.date.value;
    const email = user?.email;
    console.log(email);
    const booking = {
      customerName: name,
      email,
      img,
      date, 
      service:title,
      service_id: _id,
      price
    }
    console.log(booking);

    fetch('http://localhost:5000/bookings',{
      method: 'POST',
      headers: {
         'content-type': 'application/json'
      },
      body: JSON.stringify(booking)
    })
    .then(res => res.json())
    .then(data => {
      console.log(data);
      if(data.insertedId){
        Swal.fire({
          title: 'Success!',
          text: 'Order Confirm Successfully',
          icon: 'success',
          confirmButtonText: 'Cool'
        })
      }
    })
  }

  return (
    <div>
      <h2 className="text-3xl text-center mb-3">Book Service: {title} </h2>
    
            <form onSubmit={handleBookingService}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="text"
                  name="name"
                  defaultValue={user?.displayName}
                  placeholder="name"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Date</span>
                </label>
                <input
                  type="date"
                  name="date"
                  className="input input-bordered"
                  required
                />
         
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="text"
                  name="email"
                  defaultValue={user?.email}
                  placeholder="email"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Due amount</span>
                </label>
                <input
                  type="text"
                  defaultValue={"$ "+ price}
                  className="input input-bordered"
                  required
                />
         
              </div>
              
            </div>
            <div className="form-control mt-6 ">
                <input className="btn bg-orange-500 hover:bg-orange-300 text-white" type="submit" value="order confirm" />
              </div>
            </form>

            <div className="card-body">
             
            </div>
          </div>
   
  );
};

export default BookingService;
