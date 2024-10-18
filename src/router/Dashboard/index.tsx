import { Route, Routes } from "react-router-dom";
import Home from "../../pages/Dashboard/Home/Home";
import Create from "../../pages/Dashboard/Create";
import Chats from "../../pages/Dashboard/Chats";
import Explore from "../../pages/Dashboard/Explore";
import People from "../../pages/Dashboard/People";
import Reels from "../../pages/Dashboard/Reels";
import Saved from "../../pages/Dashboard/Saved";
import LeftSidebar from "../../components/LeftSidebar";

function DashboardRoutes() {
  return (
    <main className="grid grid-cols-12">
      <LeftSidebar />
      <div className="col-span-10">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/create" element={<Create />} />
          <Route path="/people" element={<People />} />
          <Route path="/chats" element={<Chats />} />
          <Route path="/explore" element={<Explore />} />
          <Route path="/saved" element={<Saved />} />
          <Route path="/reels" element={<Reels />} />
          <Route path="/chats" element={<Chats />} />
        </Routes>
      </div>
    </main>
  );
}

export default DashboardRoutes;
