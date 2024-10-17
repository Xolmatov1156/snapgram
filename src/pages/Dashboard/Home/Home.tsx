import LeftSidebar from "../../../components/LeftSidebar";
import { useGetUsersQuery } from "../../../redux/api/users-api";
import { User } from "../../../types";
import NoImage from "../../../assets/No_Image_Available.jpg";

const Home = () => {
  const { data } = useGetUsersQuery({});
  console.log(data);

  const userItems: JSX.Element[] = data?.map(
    (user: User): JSX.Element => (
      <div key={user._id} className="">
        <div className="py-[20px] w-[100px] h-[200px]">
          <h3>{user.fullName}</h3>
          <img
            onError={(e) => (e.currentTarget.src = NoImage)}
            src={import.meta.env.VITE_API_URL + user.photo}
            alt=""
          />
        </div>
      </div>
    )
  );

  return (
    <>
      <div className="flex">
        <div className="w-[20%]">
          <LeftSidebar />
        </div>
        <div className="w-[705px]"></div>
        <div className="flex flex-col w-[465px]">{userItems}</div>
      </div>
    </>
  );
};

export default Home;
