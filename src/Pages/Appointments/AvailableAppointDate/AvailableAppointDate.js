import { useQuery } from '@tanstack/react-query';
import { format } from 'date-fns';
import React, { useState } from 'react';
import Loading from '../../SharedPages/Loading/Loading';
import AppointOptionCard from '../AppointOptionCard/AppointOptionCard';
import BookingModal from '../BookingModal/BookingModal';

const AvailableAppointDate = ({ selectedDate }) => {
    const [treatment, setTreatment] = useState(null);
    const date = format(selectedDate, 'PP');
    const { data: appointService = [], refetch, isLoading } = useQuery({
        queryKey: ['appointmentOptions', date],
        queryFn: () => fetch(`https://doctors-portal-server-zeta-ten.vercel.app/appointmentOptions?date=${date}`)
            .then(res => res.json())
    })
    if (isLoading) {
        return <Loading></Loading>
    };
    return (
        <section className='my-16'>
            <h1 className='text-center text-secondary font-bold'>Available Appointments on {format(selectedDate, 'PP')}</h1>
            <div className='grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-5/6 mx-auto'>
                {
                    appointService.map(service => <AppointOptionCard
                        key={service._id}
                        service={service}
                        setTreatment={setTreatment}>
                    </AppointOptionCard>)
                }
            </div>
            <div>
                {treatment &&
                    <BookingModal treatment={treatment}
                        selectedDate={selectedDate}
                        setTreatment={setTreatment}
                        refetch={refetch}>
                    </BookingModal>
                }
            </div>
        </section>
    );
};

export default AvailableAppointDate;