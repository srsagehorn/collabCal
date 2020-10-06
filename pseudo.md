Pseudo


DATABASES

Users
    userid
    calendarids

    user can view all his/her calendars
    one user can have multiple calendar ids


Calendars
    calendarid
    userids
    eventids

    calendars have unique ids
    each calendar can have multiple userids and eventids


Events
    eventid
    calendarids

    events can have multiple calendar ids

