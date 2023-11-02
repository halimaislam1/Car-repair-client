import { BsArrowRight } from 'react-icons/bs';
import { Link } from 'react-router-dom';

const ServiceCard = ({service}) => {
  const {_id, title, img, price } = service;


  return (
    <div>
      <div className="card h-96 bg-base-100 border mb-20">
        <figure className="px-10 pt-10">
          <img
            src={img}
            alt="Shoes"
            className="rounded-xl"
          />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title">{title}</h2>
          <p className="text-xl text-orange-600 font-bold">price: ${price}</p>
          
        </div>
        <div className="card-actions justify-end mr-4 mb-4 text-xl">
           <Link to= {`/book/${_id}`}> <BsArrowRight className='text-orange-600'></BsArrowRight></Link>
          </div>
      </div>
    </div>
  );
};

export default ServiceCard;
