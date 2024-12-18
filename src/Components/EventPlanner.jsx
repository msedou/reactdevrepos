import React from 'react';
import './EventPlanner.css'; // Import CSS file for styling

const EventPlanner = () => {
    return (
        <div className="event-planner-container">
            <header>
                <h1>Welcome to Event Planner</h1>
            </header>
            <section className='description'></section>
            <section className='events_categorie'></section>
            <section className='features'></section>
            <section className='testimonials'></section>
            <section className='contact'></section>

        </div>
    );
};

export default EventPlanner;
