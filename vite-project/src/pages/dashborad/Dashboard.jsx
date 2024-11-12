import Appointments from "../../components/Appoinments";
import AttendanceChart from "../../components/AttendanceChart";
import FinanceChart from "../../components/FinanceChart";
import UserCard from "../../components/UserCard";
import UserChart from "../../components/UserChart";

const Dashboard = () => {
  return (
    <div className="p-4 flex gap-4 flex-col md:flex-row">
      <div className="w-full lg:w-2/3">
        <div className="flex gap-4 justify-between mb-[20px] sm:flex-row flex-col">
          <UserCard type="doctor" />
          <UserCard type="nurse" />
          <UserCard type="patient" />
          <UserCard type="staff" />
        </div>

        {/* CHARTS */}
        <div className="flex gap-4 flex-col lg:flex-row mb-[20px]">
          {/* COUNT CHART */}
          <div className="w-full lg:w-1/3 h-[450px]">
            <UserChart />
          </div>
          {/* ATTENDANCE CHART */}
          <div className="w-full lg:w-2/3 h-[450px]">
            <AttendanceChart />
          </div>
        </div>
        {/* BOTTOM CHARTS */}
        <div className="w-full h-[500px]">
          <FinanceChart />
        </div>
      </div>

      <div className="w-full lg:w-1/3">
        <Appointments />
      </div>
    </div>
  )
};

export default Dashboard;