import { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

const EventCalendar = ({ onDateChange }) => {
    const [value, onChange] = useState(new Date());

    const handleDateChange = (date) => {
        onChange(date);
        onDateChange(date); 
    };

    return (
        <div className='bg-gray-100 p-4 rounded-md'>
            <Calendar 
                onChange={handleDateChange} 
                value={value} 
            />
        </div>
    );
};

export default EventCalendar;
