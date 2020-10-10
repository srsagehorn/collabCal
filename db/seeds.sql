USE calendar_db;

INSERT INTO calendars(type, createdAt, updatedAt)
VALUES ("consulting", "2020-10-08", "2020-10-08");

SELECT * FROM calendars;
INSERT INTO events(CalendarId, event, eventDate, createdAt, updatedAt)
VALUES (1, "cons", "2020-10-08", "2020-10-08", "1944-12-12");