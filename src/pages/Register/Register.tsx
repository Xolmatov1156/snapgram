import { Link, useNavigate } from 'react-router-dom';
import Google from '../../assets/google.svg'
const Register = () => {
  const navigate = useNavigate()
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    e.currentTarget.reset();
    navigate('/')
  };

  return (
    <div className="w-screen h-screen flex">
      <div className="w-[50%] h-screen bg-black flex items-center justify-center">
        <div className="w-[400px] h-[600px]">
          <h2 className="text-white text-center font-semibold text-[30px]">Create a new account</h2>
          <p className="mt-[15px] text-[#7878A3] text-center">To use snapgram, Please enter your details.</p>
          <form className="flex flex-col gap-[20px]" onSubmit={handleSubmit}>
            <label className="flex flex-col gap-[12px] mt-[32px]">
              <span className="text-white">Name</span>
              <input type="text" required className="w-[400px] p-[10px] bg-[#1F1F22] text-white outline-none" />
            </label>
            <label className="flex flex-col gap-[12px]">
              <span className="text-white">Email</span>
              <input type="email" required className="w-[400px] p-[10px] bg-[#1F1F22] text-white outline-none" />
            </label>
            <label className="flex flex-col gap-[12px]">
              <span className="text-white">Password</span>
              <input type="password" required className="w-[400px] p-[10px] bg-[#1F1F22] text-white outline-none" />
            </label>
            <button type="submit" className="text-white w-full bg-[#877EFF] py-[10px] rounded-md">Sign Up</button>
          </form>
          <a href="https://google.com" target='_blank' className="w-full flex gap-[12px] items-center justify-center mt-[20px] bg-white py-[10px] rounded-md">
          <img src={Google} alt="" />
          Sign in with Google</a>
          <div className="flex justify-center gap-[5px] mt-[20px]">
            <p className='text-white'>Don’t have an account?</p>
            <Link to={'/'} className='text-[#877EFF]'>Log in</Link>
          </div>
        </div>
      </div>
      <div className="w-[50%] h-screen main"></div>
    </div>
  );
};

export default Register;
