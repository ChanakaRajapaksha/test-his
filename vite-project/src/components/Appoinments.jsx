import { useState } from 'react';

const Appointments = () => {
    // Sample data for appointments (these could be fetched from an API in real use)
    const [appointmentsData] = useState({
        total: 30,
        pending: 10,
        successful: 20,
    });

    const appointmentsDetails = [
        {
            id: 1,
            type: 'Total Appointments',
            count: appointmentsData.total,
            description: 'The total number of appointments scheduled.',
            color: 'bg-blue-100 text-blue-600',
        },
        {
            id: 2,
            type: 'Pending Appointments',
            count: appointmentsData.pending,
            description: 'Appointments that are yet to be confirmed or completed.',
            color: 'bg-yellow-100 text-yellow-600',
        },
        {
            id: 3,
            type: 'Successful Appointments',
            count: appointmentsData.successful,
            description: 'Appointments that have been completed successfully.',
            color: 'bg-green-100 text-green-600',
        },
    ];

    return (
        <div className="p-6 bg-gray-100 min-h-screen">
            <div className='flex items-center justify-between'>
                <h2 className="text-2xl font-bold text-gray-700 mb-4">Appointments Overview</h2>
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
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {appointmentsDetails.map((appointment) => (
                    <div key={appointment.id} className={`p-6 rounded-lg shadow-md ${appointment.color}`}>
                        <h3 className="text-xl font-semibold mb-2">{appointment.type}</h3>
                        <p className="text-4xl font-bold">{appointment.count}</p>
                        <p className="text-sm mt-4">{appointment.description}</p>
                    </div>
                ))}
            </div>

            {/* Detailed Section */}
            <div className="mt-8 p-4 bg-white rounded-lg shadow-lg">
                <h3 className="text-2xl font-bold text-gray-800 mb-4">Appointment Details</h3>
                <div className="grid grid-cols-1 gap-6">
                    {/* Map over data or details for more granularity */}
                    <div className="flex flex-col space-y-4">
                        <div className="flex justify-between border-b pb-2">
                            <span className="font-semibold text-gray-600">Upcoming Appointments</span>
                            <span className="text-gray-700">{appointmentsData.pending} Pending</span>
                        </div>
                        <div className="flex justify-between border-b pb-2">
                            <span className="font-semibold text-gray-600">Completed Appointments</span>
                            <span className="text-gray-700">{appointmentsData.successful} Successful</span>
                        </div>
                        <div className="flex justify-between border-b pb-2">
                            <span className="font-semibold text-gray-600">Total Appointments</span>
                            <span className="text-gray-700">{appointmentsData.total} Total</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Appointments;
