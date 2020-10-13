import axios from 'axios';
export default {
    createEvent: function(newEvent) {
        return axios.post("/api/event", newEvent);
    },

    createComment: function(newComment) {
        return axios.post("/api/comment", newComment);
    },

    getEvents: function(events) {
        return axios.get('/api/calendar/${calendarId}', events);
    },

    createGroup: function(group) {
        return axios.post("/api/group", group);
    }
}