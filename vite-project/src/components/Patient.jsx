import { patientsData } from '../lib/data'

const Patient = () => {
    return (
        <div className="flex lg:flex-col flex-row gap-5 h-screen p-4 bg-gray-100">
            {/* Left: Table View */}
            <div className="w-full h-[400px] p-4 bg-white rounded-lg shadow-md mb-4 lg:mb-0">
                <div className='flex items-center justify-between p-4'>
                    <h2 className="text-2xl font-bold text-gray-700 mb-4">Patient Details</h2>
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
                            <th className="py-1 px-2 border-b font-semibold text-md">Name</th>
                            <th className="py-1 px-2 border-b font-semibold text-md">Email</th>
                            <th className="py-1 px-2 border-b font-semibold text-md">Phone</th>
                            {/* These columns are hidden on mobile to make the layout fit */}
                            <th className="hidden md:table-cell py-1 px-2 border-b font-semibold text-md">Photo</th>
                            <th className="hidden md:table-cell py-1 px-2 border-b font-semibold text-md">Age</th>
                            <th className="hidden md:table-cell py-1 px-2 border-b font-semibold text-md">Gender</th>
                            <th className="hidden md:table-cell py-1 px-2 border-b font-semibold text-md">Condition</th>
                            <th className="hidden lg:table-cell py-1 px-2 border-b font-semibold text-md">Admission Date</th>
                            <th className="hidden lg:table-cell py-1 px-2 border-b font-semibold text-md">Discharge Date</th>
                        </tr>
                    </thead>
                    <tbody>
                        {patientsData.map((patient) => (
                            <tr key={patient.id} className="hover:bg-gray-100">
                                {/* Patient Photo */}
                                <td className="hidden md:table-cell py-1 px-2 border-b">
                                    <img src={patient.photo} alt={patient.name} className="w-8 h-8 rounded-full object-cover" />
                                </td>

                                <td className="py-1 px-2 border-b text-md">{patient.name}</td>
                                <td className="py-1 px-2 border-b text-md">{patient.email}</td>
                                <td className="py-1 px-2 border-b text-md">{patient.phone}</td>

                                {/* These columns are hidden on mobile and tablet */}
                                <td className="hidden md:table-cell py-1 px-2 border-b text-md">{patient.age}</td>
                                <td className="hidden md:table-cell py-1 px-2 border-b text-md">{patient.gender}</td>
                                <td className="hidden md:table-cell py-1 px-2 border-b text-md">{patient.condition}</td>
                                <td className="hidden lg:table-cell py-1 px-2 border-b text-md">{patient.admissionDate}</td>
                                <td className="hidden lg:table-cell py-1 px-2 border-b text-md">{patient.dischargeDate}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default Patient
