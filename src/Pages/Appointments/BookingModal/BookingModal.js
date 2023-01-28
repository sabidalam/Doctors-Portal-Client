import { format } from 'date-fns';
import React, { useContext } from 'react';
import toast from 'react-hot-toast';
import { AuthContext } from '../../../Context/AuthProvider';

const BookingModal = ({ treatment, selectedDate, setTreatment, refetch }) => {
    const { name, slots, price } = treatment;
    const date = format(selectedDate, 'PP');
    const { user } = useContext(AuthContext);

    const handleAppointment = event => {
        event.preventDefault();
        const form = event.target;
        const userName = form.userName.value;
        const email = form.email.value;
        const phone = form.phone.value;
        const slot = form.slot.value;

        const booking = {
            appointmentDate: date,
            treatmentName: name,
            patientName: userName,
            email,
            phone,
            slot,
            price
        }
        fetch('https://doctors-portal-server-zeta-ten.vercel.app/bookings', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(booking)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.acknowledged) {
                    setTreatment(null);
                    toast.success('Booking Confirmed');
                    refetch();
                }
                else {
                    toast.error(data.message);
                }
            })

    }
    return (
        <>
            <input type="checkbox" id="booking-modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <label htmlFor="booking-modal" className="btn btn-sm btn-circle absolute right-2 top-4">✕</label>
                    <h3 className="text-lg font-bold">{name}</h3>
                    <form onSubmit={handleAppointment} className='grid grid-cols-1 gap-4 mt-7'>
                        <input type="text" disabled value={date} className="input input-bordered w-full" />
                        <select name='slot' className="select select-bordered w-full">
                            {
                                slots.map((slot, i) => <option key={i} value={slot}>{slot}</option>)
                            }
                        </select>
                        <input name='userName' type="text" defaultValue={user?.displayName} placeholder="Your Name" className="input input-bordered w-full" />
                        <input name='email' type="email" defaultValue={user?.email} disabled placeholder="Email" className="input input-bordered w-full" />
                        <input name='phone' type="text" placeholder="Phone" className="input input-bordered w-full" />
                        <input type="submit" value="Submit" className='btn w-full' />
                    </form>
                </div>
            </div>
        </>
    );
};

export default BookingModal;