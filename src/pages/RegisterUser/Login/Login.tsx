import { Link, useNavigate } from 'react-router-dom';
import Google from '../../../assets/google.svg'
import Logo from '../../../assets/logo.svg'
import { useLoginUserMutation } from '../../../redux/api/users-api';
import { useContext } from 'react';
import { Context } from '../../../context/MainContext';
const Login = () => {
  const navigate = useNavigate();
  const context = useContext(Context)
  const [loginUser] = useLoginUserMutation()
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const target = new FormData(e.target as HTMLFormElement);
    const data = {
      username: target.get("username"),
      password: target.get("password"),
    };
    window.localStorage.setItem('userData', JSON.stringify(data))
  
    try {
      const response = await loginUser(data).unwrap();
      console.log(response);
      context?.setToken(true);
      navigate('/');
    } catch (error) {
      console.error('Login failed:', error); 
    }
  };
  

  return (
    <div className="w-screen h-screen flex">
      <div className="w-[50%] h-screen bg-black flex items-center justify-center">
        <div className="w-[400px]">
          <div className='flex justify-center mb-[68px] gap-[5px]'>
            <img src={Logo} alt="logo" />
            <p className='text-white text-[28px]'>Snapgram</p>
          </div>
          <h2 className="text-white text-center font-semibold text-[30px]">Log in to your account</h2>
          <p className="mt-[15px] text-[#7878A3] text-center">Welcome back! Please enter your details.</p>
          <form className="flex flex-col gap-[20px]" onSubmit={handleSubmit}>
            <label className="flex flex-col gap-[12px]">
              <span className="text-white capitalize">username</span>
              <input type="text" required name='username' className="w-[400px] p-[10px] bg-[#1F1F22] text-white outline-none" />
            </label>
            <label className="flex flex-col gap-[12px]">
              <span className="text-white">Password</span>
              <input type="password" name='password' required className="w-[400px] p-[10px] bg-[#1F1F22] text-white outline-none" />
            </label>
            <button type="submit" className="text-white w-full bg-[#877EFF] py-[10px] rounded-md">Log In</button>
          </form>
          <a href="https://google.com" target='_blank' className="w-full flex gap-[12px] items-center justify-center mt-[20px] bg-white py-[10px] rounded-md">
          <img src={Google} alt="" />
          Sign in with Google</a>
          <div className="flex justify-center gap-[5px] mt-[20px]">
            <p className='text-white'>Don’t have an account?</p>
            <Link to={'/register'} className='text-[#877EFF]'>Sign up</Link>
          </div>
        </div>
      </div>
      <div className="w-[50%] h-screen main"></div>
    </div>
  );
};

export default Login;
