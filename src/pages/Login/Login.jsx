import { Link, useLocation, useNavigate } from "react-router-dom";
import img from "../../assets/images/login/login.svg";
import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import axios from "axios";

const Login = () => {

const {signIn} = useContext(AuthContext);
const location = useLocation();
console.log(location);
const navigate = useNavigate();

 const handleLogin  = e => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);
    signIn(email, password)
    .then(result => {
        const loggedInUser = result.user;
        console.log(loggedInUser);
        //get access token
        const user = {email}
        axios.post('http://localhost:5000/jwt', user, {withCredentials:true})
        .then(res => {
          console.log(res.data);
          if(res.data.success){
            navigate(location?.state? location?.state : '/')
          }
        })
    })
    .catch(error => console.error(error))
 }

  return (
    <div className="hero min-h-screen bg-base-200 mt-10 mb-20">
  <div className="hero-content flex-col lg:flex-row">
    <div className=" w-1/2 mr-14">   
      <img className="" src={img} alt="" />
    </div>
    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
      <div className="card-body">
      <h1 className="text-2xl text-center font-bold ">Login now!</h1>
        <form onSubmit={handleLogin} >

        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" name="email" placeholder="email" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" name="password" placeholder="password" className="input input-bordered" required />
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
          </label>
        </div>
        <div className="form-control mt-6">
          <input className="btn bg-orange-600 text-white" type="submit" value="login" />
        </div>
        </form>
        <p className="my-3">New to car repair shop <Link className="font-bold text-orange-500 text-center" to = '/signup'>Sing Up</Link> </p>
      </div>
    </div>
  </div>
</div>
  );
};

export default Login;
