import { useFollowMutation, useGetUserByUsernameQuery, useGetUsersQuery } from "../../../redux/api/users-api";
import { User } from "../../../types";
import UserName from '../../../assets/user.svg'
const Home = () => {
  const { data } = useGetUsersQuery({});
  const [followUser] = useFollowMutation();
  const handleFollow = (username: string) => {
    followUser(username)
  }
  const currentUserUsername = window.localStorage.getItem("userData")
    ? JSON.parse(window.localStorage.getItem("userData") as string).username
    : null;
  const { data: currentUserInfo } =
    useGetUserByUsernameQuery(currentUserUsername);
  const userItems: JSX.Element[] = data?.map(
    (user: User): JSX.Element => (
      <div key={user._id} className="">
        <div className="p-[20px] w-[180px] h-[190px] border border-gray-500 rounded-xl">
          <img
            onError={(e) => (e.currentTarget.src = UserName)}
            src={import.meta.env.VITE_API_URL + user.photo}
            alt=""
            className="w-[54px] h-[54px] rounded-full mx-auto bg-white"
          />
          <h3 className="mt-[10px] line-clamp-1">{user.fullName}</h3>
          {
            user.followers.some((item:any) => item._id === currentUserInfo._id) ? <button onClick={() => handleFollow("unfollow/" + user.username)} className="bg-[red] text-white w-[74px] py-[5px] mt-[18px] rounded-lg">Unfollow</button> :
          <button onClick={() => handleFollow("follow/" + user.username)} className="bg-[#877EFF] text-white w-[74px] py-[5px] mt-[18px] rounded-lg">Follow</button>
        }
        </div>
      </div>
    )
  );

  return (
    <div className="grid grid-cols-12">
        <div className="col-span-8 bg-black text-white h-screen overflow-y-auto">Home</div>
        <div className="col-span-4 bg-black h-screen flex flex-wrap gap-[20px] pl-[20px]  overflow-y-auto text-white text-center py-[40px]">
          <h2 className="text-[24px] w-full text-start font-semibold">Top Creators</h2>
          {userItems}
          </div>
    </div>
  );
};

export default Home;
