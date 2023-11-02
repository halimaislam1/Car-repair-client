import person from '../../assets/images/about_us/person.jpg'
import parts from '../../assets/images/about_us/parts.jpg'

const About = () => {
  return (
    <div className="hero min-h-screen bg-base-200 mt-20 mb-20">
      <div className="hero-content flex-col lg:flex-row">
       <div className='lg:w-1/2 relative'>
       <img
          src={person}
          className="w-3/4 rounded-lg shadow-2xl"
        />
       <img
          src={parts}
          className="w-1/2 absolute right-5 top-1/2 border-8 border-white rounded-lg shadow-2xl"
        />
       </div>
        <div className='lg:w-1/2'>
            <p className='text-2xl text-orange-500 mb-3'>About us</p>
          <h1 className="text-5xl font-bold">We are qualified & of experience in this field</h1>
          <p className="py-6">
           Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rem soluta voluptatibus velit ipsam tempore facere adipisci pariatur earum molestiae expedita libero eligendi, ducimus quos? Facilis neque aliquid 
          </p>
          <p className='py-8'>optio repellendus praesentium!.
           Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rem soluta voluptatibus velit ipsam tempore facere adipisci pariatur earum !.</p>
          <button className="btn bg-orange-500 text-white font-semibold">Get More Info</button>
        </div>
      </div>
    </div>
  );
};

export default About;
