import React from "react";

export default function () {
  return (
    <div class="col-md-4">
      <form>
        <div class="form-group">
          <label for="newEventTitle">Event Title</label>
          <input type="text" class="form-control" id="newEventTitle" />
        </div>
        <div class="form-group">
          <label for="newEventDate">Date</label>
          <input type="text" class="form-control" id="newEventDate" />
        </div>
        <div class="form-group form-check">
          <input type="text" id="description" />
          <label for="description">Description (optional)</label>
        </div>
        <button type="Create Event" class="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
}
