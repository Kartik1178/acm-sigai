import React from 'react';
import { Breadcrumbs } from '../BreadCrumbsMain';
import EventList from './EventList';

const UpcomingEvents = () => {
    return (
        <main>
            <Breadcrumbs title="Upcoming Events" activePath="/upcoming-events" />

            <EventList />
        </main>
    );
};

export default UpcomingEvents;
