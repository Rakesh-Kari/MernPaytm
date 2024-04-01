import { Appbar } from "../components/Appbar";
import { Balanace } from "../components/Balance";
import { Users } from "../components/Users";

export const Dashboard = () => {
  return (
    <div className=" h-screen">
      <Appbar />
      <Balanace />
      <Users />
    </div>
  );
};
