import React from 'react';
import './EventPlanner.css'; // Import CSS file for styling

const EventPlanner = () => {
    return (
        <div className="event-planner-container">
            <header>
                <h1>Welcome to Event Planner</h1>
            </header>
            <section className='description'>
                <p>
                    Plan and organize your events effortlessly with Event Planner. From
                    birthdays to corporate meetings, we've got you covered.
                </p>

                <button className='get-started-button'>Get Sarted</button>
            </section>
            <section className='events_categories'>
                <ul>
                    <h2>Social Events</h2>
                    <li>
                        Birthday parties
                    </li>
                    <li>
                        Anniversary celebrations
                    </li>
                    <li>
                        Wedding reception
                    </li>
                    <li>
                        Baby showers
                    </li>
                    <li>
                        Graduation parties
                    </li>
                    <li>
                        Family reunio
                    </li>
                </ul>
            </section>
            <section className='features'></section>
            <section className='testimonials'></section>
            <section className='contact'></section>

        </div>
    );
};

export default EventPlanner;
