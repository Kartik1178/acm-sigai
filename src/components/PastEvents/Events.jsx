import React from 'react';
import { Breadcrumbs } from '../BreadCrumbsMain';
import EventList from './EventList';

const Events = () => {
    return (
        <main>
           <Breadcrumbs title="Past Events" activePath="/past-events" />

            <EventList />
        </main>
    );
};

export default Events;
