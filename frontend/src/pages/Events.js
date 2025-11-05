import { Link } from "react-router-dom";

const DUMMY_EVENTS = [
  {
    id: "e1",
    title: "Programming Bootcamp",
    date: "2023-09-12",
    location: "New York, NY",
  },
  {
    id: "e2",
    title: "Art Workshop",
    date: "2023-10-05",
    location: "San Francisco, CA",
  },
  {
    id: "e3",
    title: "Music Festival",
    date: "2023-11-20",
    location: "Austin, TX",
  },
];

function EventsPage() {
  return (
    <>
      <ul>
        {DUMMY_EVENTS.map((event) => (
          <li key={event.id}>
            <Link to={event.id}>
              <h2>{event.title}</h2>
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
}

export default EventsPage;
