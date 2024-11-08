import { useState } from "react";
import BigCalendar from "../../components/BigCalendar";
import EventCalendar from "../../components/EventCalendar";

const Calendar = () => {
    const [selectedDate, setSelectedDate] = useState(new Date());
    const [selectedEvent, setSelectedEvent] = useState(null); // State to store the selected event details

    const handleEventSelect = (event) => {
        setSelectedEvent(event);
    };

    return (
        <div className="flex flex-col xl:flex-row gap-4 p-4 mb-4 md:mb-0">
            <div className="w-full xl:w-2/3">
                <div className="h-screen bg-gray-100 p-4 rounded-md">
                    <div className="flex items-center justify-between">
                        <h1 className="text-xl font-semibold">Doctor Schedule Details</h1>
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
                    <BigCalendar selectedDate={selectedDate} onEventSelect={handleEventSelect} />
                </div>
            </div>

            <div className="flex flex-col gap-4 w-full xl:w-1/3">
                <EventCalendar onDateChange={setSelectedDate} />

                <div className="bg-white rounded-md p-4">
                    <div className="flex items-center justify-between">
                        <h1 className="text-xl font-semibold">Pending Appoinments</h1>
                        <span className="text-xs text-gray-400">View All</span>
                    </div>

                    <div className="flex flex-col gap-4 mt-4">
                        <div className="bg-[#EDF9FD] p-4 rounded-md">
                            <div className="flex items-center justify-between">
                                <h2 className="font-medium">Lorem ipsum dolor sit</h2>
                                <span className="text-xs text-gray-400 bg-white px-1 py-2 rounded-md">
                                    2025-01-01
                                </span>
                            </div>
                            <p className="text-sm text-gray-400 mt-1">
                                Contrary to popular belief, Lorem Ipsum is not simply random text.
                                It has roots in a piece of classical Latin literature from 45 BC.
                            </p>
                        </div>

                        <div className="bg-[#F1F0FF] p-4 rounded-md">
                            <div className="flex items-center justify-between">
                                <h2 className="font-medium">Lorem ipsum dolor sit</h2>
                                <span className="text-xs text-gray-400 bg-white px-1 py-2 rounded-md">
                                    2025-01-01
                                </span>
                            </div>
                            <p className="text-sm text-gray-400 mt-1">
                                Contrary to popular belief, Lorem Ipsum is not simply random text.
                                It has roots in a piece of classical Latin literature from 45 BC.
                            </p>
                        </div>

                        <div className="bg-[#FEFCE8] p-4 rounded-md">
                            <div className="flex items-center justify-between">
                                <h2 className="font-medium">Lorem ipsum dolor sit</h2>
                                <span className="text-xs text-gray-400 bg-white px-1 py-2 rounded-md">
                                    2025-01-01
                                </span>
                            </div>
                            <p className="text-sm text-gray-400 mt-1">
                                Contrary to popular belief, Lorem Ipsum is not simply random text.
                                It has roots in a piece of classical Latin literature from 45 BC.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Calendar;
