import { Calendar, momentLocalizer, Views } from 'react-big-calendar';
import moment from 'moment';
import "react-big-calendar/lib/css/react-big-calendar.css";
import { useState, useEffect } from 'react';

const localizer = momentLocalizer(moment);

// Custom Event Component to show detailed event information
const Event = ({ event }) => (
    <div className='flex flex-col gap-2'>
        <strong>{event.title}</strong>
        <div className='hidden md:block'>Doctor: {event.doctor}</div>
        <div className='hidden md:block'>Specialization: {event.specialization}</div>
    </div>
);

const BigCalendar = ({ selectedDate, onEventSelect }) => {
    const [events, setEvents] = useState([]);
    const [view, setView] = useState(Views.DAY);
    const [showModal, setShowModal] = useState(false);
    const [newEvent, setNewEvent] = useState({
        title: '',
        start: '',
        end: '',
        doctor: '',
        specialization: ''
    });

    const doctorNames = ["Dr. John Doe", "Dr. Sarah Lee", "Dr. Emily Carter"];
    const specializations = ["Cardiology", "Neurology", "Orthopedics"];

    const handleEventView = (selectedView) => {
        setView(selectedView);
    };

    const checkDoctorAvailability = (doctor, start, end) => {
        const appointmentsForDoctor = events.filter(event => event.doctor === doctor);
        const overlappingAppointments = appointmentsForDoctor.filter(event => {
            return (new Date(event.start) < new Date(end)) && (new Date(event.end) > new Date(start));
        });
        return overlappingAppointments.length < 2;
    };

    const handleAddEvent = async () => {
        if (checkDoctorAvailability(newEvent.doctor, newEvent.start, newEvent.end)) {
            setEvents([...events, {
                ...newEvent,
                start: new Date(newEvent.start),
                end: new Date(newEvent.end)
            }]);
            setShowModal(false);

            // Send the new event data to the backend server
            try {
                await fetch('http://localhost:5000/send-appointment', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(newEvent),
                });
                alert('Appointment created and email sent!');
            } catch (error) {
                alert('Failed to send email');
                console.error(error);
            }

            setNewEvent({ title: '', start: '', end: '', doctor: '', specialization: ''});
        } else {
            alert('Cannot book more than two appointments for the doctor in the same time range!');
        }
    };

    useEffect(() => {
        setView(Views.DAY);
    }, [selectedDate]);

    return (
        <div className='h-[90%]'>
            <button
                className="bg-[#FAE27C] text-black px-4 py-2 rounded-md my-4"
                onClick={() => setShowModal(true)}
            >
                Create Appoinments
            </button>

            {showModal && (
                <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex justify-center items-center z-50">
                    <div className="bg-white p-6 rounded-lg shadow-lg w-[350px] lg:w-[400px]">
                        <h2 className="text-lg font-semibold mb-4">Add New Book</h2>

                        <input
                            type="text"
                            placeholder="Appoinment Title"
                            value={newEvent.title}
                            onChange={(e) => setNewEvent({ ...newEvent, title: e.target.value })}
                            className="w-full p-2 border rounded-md mb-2"
                        />

                        <select
                            value={newEvent.doctor}
                            onChange={(e) => setNewEvent({ ...newEvent, doctor: e.target.value })}
                            className="w-full p-2 border rounded-md mb-2"
                        >
                            <option value="" disabled>Select Doctor</option>
                            {doctorNames.map((doctor, index) => (
                                <option key={index} value={doctor}>{doctor}</option>
                            ))}
                        </select>

                        <select
                            value={newEvent.specialization}
                            onChange={(e) => setNewEvent({ ...newEvent, specialization: e.target.value })}
                            className="w-full p-2 border rounded-md mb-2"
                        >
                            <option value="" disabled>Select Specialization</option>
                            {specializations.map((spec, index) => (
                                <option key={index} value={spec}>{spec}</option>
                            ))}
                        </select>

                        <input
                            type="datetime-local"
                            placeholder="Start Time"
                            value={newEvent.start}
                            onChange={(e) => setNewEvent({ ...newEvent, start: e.target.value })}
                            className="w-full p-2 border rounded-md mb-2"
                        />

                        <input
                            type="datetime-local"
                            placeholder="End Time"
                            value={newEvent.end}
                            onChange={(e) => setNewEvent({ ...newEvent, end: e.target.value })}
                            className="w-full p-2 border rounded-md mb-2"
                        />

                        <div className="flex justify-end gap-2">
                            <button
                                className="bg-gray-500 text-white px-4 py-2 rounded-md"
                                onClick={() => setShowModal(false)}
                            >
                                Cancel
                            </button>
                            <button
                                className="bg-blue-500 text-white px-4 py-2 rounded-md"
                                onClick={handleAddEvent}
                            >
                                Save
                            </button>
                        </div>
                    </div>
                </div>
            )}

            <Calendar
                localizer={localizer}
                events={events}
                startAccessor="start"
                endAccessor="end"
                defaultDate={selectedDate}
                view={view}
                style={{ height: '98%' }}
                onView={handleEventView}
                onSelectEvent={onEventSelect}
                min={new Date(2025, 1, 0, 8, 0, 0)}
                max={new Date(2025, 1, 0, 21, 0, 0)}
                components={{
                    event: Event // Use custom event component to display details
                }}
            />
        </div>
    );
};

export default BigCalendar;
