import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function EventDetailsPage() {
  const { eventId } = useParams();
  const [eventDetails, setEventDetails] = useState({});
  const [editedEvent, setEditedEvent] = useState({});
  const navigate = useNavigate();
  const [updateSuccess, setUpdateSuccess] = useState(false);
  const [deleteSuccess, setDeleteSuccess] = useState(false);

  useEffect(() => {
    axios
      .get(`http://localhost:3000/events/${eventId}`)
      .then((response) => {
        setEventDetails(response.data);
        setEditedEvent(response.data);
      })
      .catch((error) => {
        console.error("Error fetching event details:", error);
      });
  }, [eventId]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEditedEvent({
      ...editedEvent,
      [name]: value,
    });
  };

  const handleEditSubmit = (e) => {
    e.preventDefault();

    axios
      .put(`http://localhost:3000/events/${eventId}`, editedEvent)
      .then((response) => {
        console.log("Event updated successfully:", response.data);

        setUpdateSuccess(true);

        setTimeout(() => {
          navigate("/");
        }, 2000);
      })
      .catch((error) => {
        console.error("Error updating event:", error);
      });
  };

  const handleDeleteClick = () => {
    axios
      .delete(`http://localhost:3000/events/${eventId}`)
      .then((response) => {
        console.log("Event deleted successfully");

        setDeleteSuccess(true);

        setTimeout(() => {
          navigate("/");
        }, 2000);
      })
      .catch((error) => {
        console.error("Error deleting event:", error);
      });
  };

  return (
    <div>
      <h2>Event Details</h2>
      <img
        src={eventDetails.image}
        alt={eventDetails.title}
        style={{ width: "250px", height: "200px" }}
      />

      <form onSubmit={handleEditSubmit}>
        {updateSuccess && (
          <div>
            <h1 style={{ marginRight: "-55px" }}>Updated successfully!</h1>
          </div>
        )}
        {deleteSuccess && (
          <div>
            <h1 style={{ marginRight: "-55px" }}>Deleted successfully!</h1>
          </div>
        )}

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            marginBottom: "10px",
          }}
        >
          <label style={{ fontWeight: "bold" }}>Title:</label>
          <input
            type="text"
            name="title"
            value={editedEvent.title}
            onChange={handleInputChange}
          />
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            marginBottom: "10px",
          }}
        >
          <label style={{ fontWeight: "bold" }}>Description:</label>
          <input
            type="text"
            name="description"
            value={editedEvent.description}
            onChange={handleInputChange}
          />
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            marginBottom: "10px",
          }}
        >
          <label style={{ fontWeight: "bold" }}>Location:</label>
          <input
            type="text"
            name="location"
            value={editedEvent.location}
            onChange={handleInputChange}
          />
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            marginBottom: "10px",
          }}
        >
          <label style={{ fontWeight: "bold" }}>Start Time:</label>
          <input
            type="datetime-local"
            name="startTime"
            value={editedEvent.startTime}
            onChange={handleInputChange}
          />
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            marginBottom: "10px",
          }}
        >
          <label style={{ fontWeight: "bold" }}>End Time:</label>
          <input
            type="datetime-local"
            name="endTime"
            value={editedEvent.endTime}
            onChange={handleInputChange}
          />
        </div>
        <button type="submit">Update</button>
      </form>

      <button onClick={handleDeleteClick}>Delete</button>
    </div>
  );
}

export default EventDetailsPage;
