import React, { useState } from 'react';

const ReservationForm = () => {
    const [name, setName] = useState('');
    const [date, setDate] = useState('');
    const [time, setTime] = useState('');
    const [partySize, setPartySize] = useState(1);
    const [specialRequests, setSpecialRequests] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log({ name, date, time, partySize, specialRequests });
        alert(`Reservation made! Name: ${name}, Date: ${date}, Time: ${time}, Party Size: ${partySize}`);
        // Reset form fields
        setName('');
        setDate('');
        setTime('');
        setPartySize(1);
        setSpecialRequests('');
    };

    return (
        <div style={formContainerStyle}>
            <h2>Reserve a Table</h2>
            <form onSubmit={handleSubmit}>
                <div style={formGroupStyle}>
                    <label>Name:</label>
                    <input type="text" value={name} onChange={(e) => setName(e.target.value)} required placeholder="Enter your name" />
                </div>
                <div style={formGroupStyle}>
                    <label>Date:</label>
                    <input type="date" value={date} onChange={(e) => setDate(e.target.value)} required />
                </div>
                <div style={formGroupStyle}>
                    <label>Time:</label>
                    <input type="time" value={time} onChange={(e) => setTime(e.target.value)} required />
                </div>
                <div style={formGroupStyle}>
                    <label>Party Size:</label>
                    <select value={partySize} onChange={(e) => setPartySize(e.target.value)} required>
                        {[1, 2, 3, 4, 5, 6, 7, 8].map(size => (
                            <option key={size} value={size}>{size}</option>
                        ))}
                    </select>
                </div>
                <div style={formGroupStyle}>
                    <label>Special Requests:</label>
                    <textarea value={specialRequests} onChange={(e) => setSpecialRequests(e.target.value)} placeholder="Any special requests?"></textarea>
                </div>
                <button type="submit">Reserve</button>
            </form>
        </div>
    );
};

const formContainerStyle = {
    maxWidth: '600px',
    margin: '20px auto',
    padding: '20px',
    backgroundColor: 'white',
    borderRadius: '8px',
    boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)',
};

const formGroupStyle = {
    marginBottom: '15px',
};

export default ReservationForm;