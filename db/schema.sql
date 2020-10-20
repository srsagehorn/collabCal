DROP DATABASE IF EXISTS calendar_db;
CREATE DATABASE calendar_db;

USE calendar_db;

-- would pulling ALL events from all apis be too much?
CREATE TABLE events
(
    calendarID INT NOT NULL,
    id INT NOT NULL,
    eventTitle VARCHAR(40) NOT NULL,
    -- Big Calendar uses 
    --     {
    --   title: string,
    --   start: Date,
    --   end: Date,
    --   allDay?: boolean
    --   resource?: any, ??
    -- }
    startTime INT,
    endTime INT,
    allDay BOOLEAN,
    eventLocation VARCHAR(100)
);

CREATE TABLE chat
(
    calendarID INT NOT NULL,
    eventID INT NOT NULL,
    userID INT NOT NULL,
    chatMessage VARCHAR
    (1000) NOT NULL

)