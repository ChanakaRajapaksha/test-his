import { doctorsData } from "../lib/data";
import CountChart from "./CountChart";


const Doctor = () => {

    return (
        <div className="flex flex-col lg:flex-row min-h-screen p-4 bg-gray-100">
            {/* Left: Table View */}
            <div className="w-full lg:w-2/3 p-4 bg-white rounded-lg shadow-md overflow-y-auto">
                <div className="flex items-center justify-between">
                    <h2 className="text-2xl font-bold text-gray-700 mb-4">Doctor Details</h2>
                    <div className="hidden md:flex items-center gap-2 text-xs rounded-full ring-[1.5px] ring-gray-300 px-2">
                        <img
                            src="/search.png"
                            alt="search"
                            width={20}
                            height={20}
                        />
                        <input type="text" placeholder="Search..." className="w-[200px] p-2 bg-transparent outline-none" />
                    </div>
                </div>
                <table className="min-w-full text-left text-gray-600">
                    <thead>
                        <tr>
                            <th className="py-2 px-4 border-b font-semibold">Name</th>
                            <th className="py-2 px-4 border-b font-semibold">Email</th>
                            <th className="py-2 px-4 border-b font-semibold">Phone</th>
                        </tr>
                    </thead>
                    <tbody>
                        {doctorsData.map((doctor) => (
                            <tr key={doctor.id} className="hover:bg-gray-100">
                                <td className="py-2 px-4 border-b">{doctor.name}</td>
                                <td className="py-2 px-4 border-b">{doctor.email}</td>
                                <td className="py-2 px-4 border-b">{doctor.phone}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            {/* Right: Charts */}
            <div className="flex flex-col items-center w-full h-[55%] lg:w-1/3 mt-6 lg:mt-0 lg:ml-6 bg-white rounded-lg">
                {/* TITLE */}
                <div className="py-4">
                    <h2 className="text-2xl font-bold text-gray-700 mb-4">Specialization Category</h2>
                </div>
                <div className="relative w-full h-[75%]">
                    <CountChart />
                </div>
            </div>
        </div>
    );
};

export default Doctor;
