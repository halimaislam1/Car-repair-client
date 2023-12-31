import img1 from '../../assets/images/banner/1.jpg'
import img2 from '../../assets/images/banner/2.jpg'
import img3 from '../../assets/images/banner/3.jpg'
import img4 from '../../assets/images/banner/4.jpg'
import img5 from '../../assets/images/banner/5.jpg'
import img6 from '../../assets/images/banner/6.jpg'



const Banner = () => {
    return (
        <div className="carousel w-full">
        <div id="slide1" className="carousel-item relative w-full">
          <img src={img1} className="w-full  rounded-xl" />
          <div className="absolute  flex justify-end transform -translate-y-1/3 left-5 right-5 bottom-0 ">
            <a href="#slide4" className="btn btn-circle mr-5 ">❮</a> 
            <a href="#slide2" className="btn btn-circle bg-orange-500 text-white border-none">❯</a>
          </div>
          <div className="absolute  bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]  top-56 left-20  space-y-8 w-1/3">
            <div className='space-y-8'>
               <h2 className='text-6xl text-white  font-semibold'>Affordable Price For Car Servicing </h2 >
               <p className='text-white font-bold'>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
            </div>
            <div>
               <button className='btn p-3 bg-orange-500 border-none text-white mr-5'>Discover More</button>
               <button className='btn btn-outline btn-secondary'>Latest Project</button>
            </div>
          </div>
        </div> 
        <div id="slide2" className="carousel-item relative w-full">
          <img src={img2} className="w-full" />
          <div className="absolute  flex justify-end transform -translate-y-1/3 left-5 right-5 bottom-0  ">
            <a href="#slide1" className="btn btn-circle mr-5">❮</a> 
            <a href="#slide3" className="btn btn-circle bg-orange-500 text-white border-none">❯</a>
          </div>
          <div className="absolute  bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]  top-56 left-20  space-y-8 w-1/3">
            <div className='space-y-8'>
               <h2 className='text-6xl text-white  font-semibold'>Affordable Price For Car Servicing </h2 >
               <p className='text-white font-bold'>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
            </div>
            <div>
               <button className='btn p-3 bg-orange-500 border-none text-white mr-5'>Discover More</button>
               <button className='btn btn-outline btn-secondary'>Latest Project</button>
            </div>
          </div>
        </div> 
        <div id="slide3" className="carousel-item relative w-full">
          <img src={img3} className="w-full" />
          <div className="absolute flex justify-end bottom-0 transform -translate-y-1/2 left-5 right-5 ">
            <a href="#slide2" className="btn btn-circle mr-5">❮</a> 
            <a href="#slide4" className="btn btn-circle bg-orange-500 text-white border-none">❯</a>
          </div>
          <div className="absolute  bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]  top-56 left-20  space-y-8 w-1/3">
            <div className='space-y-8'>
               <h2 className='text-6xl text-white  font-semibold'>Affordable Price For Car Servicing </h2 >
               <p className='text-white font-bold'>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
            </div>
            <div>
               <button className='btn p-3 bg-orange-500 border-none text-white mr-5'>Discover More</button>
               <button className='btn btn-outline btn-secondary'>Latest Project</button>
            </div>
          </div>
        </div> 
        <div id="slide4" className="carousel-item relative w-full">
          <img src={img4} className="w-full" />
          <div className="absolute flex justify-end bottom-0 transform -translate-y-1/2 left-5 right-5 ">
            <a href="#slide3" className="btn btn-circle mr-5">❮</a> 
            <a href="#slide1" className="btn btn-circle bg-orange-500 text-white border-none">❯</a>
          </div>
          <div className="absolute  bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]  top-56 left-20  space-y-8 w-1/3">
            <div className='space-y-8'>
               <h2 className='text-6xl text-white  font-semibold'>Affordable Price For Car Servicing </h2 >
               <p className='text-white font-bold'>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
            </div>
            <div>
               <button className='btn p-3 bg-orange-500 border-none text-white mr-5'>Discover More</button>
               <button className='btn btn-outline btn-secondary'>Latest Project</button>
            </div>
          </div>
        </div>
      </div>
    );
};

export default Banner;