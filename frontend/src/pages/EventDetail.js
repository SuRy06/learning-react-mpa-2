import { useParams } from "react-router-dom";

function EventDetailPage() {
  const params = useParams();
  const eventId = params.eventId;

  return <h1>Welcome to the Event Detail Page for event ID: {eventId}</h1>;
}

export default EventDetailPage;
