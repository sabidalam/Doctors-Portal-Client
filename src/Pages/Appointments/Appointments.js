import React, { useState } from 'react';
import AppointmentBanner from './AppointmentBanner/AppointmentBanner';
import AvailableAppointDate from './AvailableAppointDate/AvailableAppointDate';

const Appointments = () => {
    const [selectedDate, setSelectedDate] = useState(new Date());
    return (
        <div>
            <AppointmentBanner
                selectedDate={selectedDate}
                setSelectedDate={setSelectedDate}>
            </AppointmentBanner>
            <AvailableAppointDate
                selectedDate={selectedDate}>
            </AvailableAppointDate>
        </div>
    );
};

export default Appointments;