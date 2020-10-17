import axios from 'axios';
export default {
    createEvent: function(newEvent) {
        return axios.post("/api/event", newEvent);
    },

    createComment: function(newComment) {
        return axios.post("/api/comment", newComment);
    },

    getEvents: function(events) {
        console.log("we made it here")
        return axios.get("/api/calendar", events);
    },

    createGroup: function(group) {
        return axios.post("/api/group", group);
    },

    createUser: function(user) {
        return axios.post("/api/user", user);
    },

    updateGroup: function(update) {
        return axios.post("/api/updategroup", update);
    },

    getCalendars: function(calendars) {
        return axios.get("/api/getcalendars", calendars);
    }
}