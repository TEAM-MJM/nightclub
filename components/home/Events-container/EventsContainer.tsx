"use cache";
import Events from "../events-of-month/Events";

const FetchEvents = async () => {
  const url = "http://localhost:4000/events";
  const data = await fetch(url);
  const events = await data.json();
  return events;
};

const EventsContainer = async () => {
  const events = await FetchEvents();
  return (
    <section className="my-24 bg-[url(/assets/bg/slider_bg_overlay.png)] bg-cover bg-center bg-no-repeat py-16 px-4">
      <div className="mx-auto px-60 mb-24">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-medium uppercase text-white mb-4">Events of the Month</h2>
        </div>
        <div className="h-0.5 bg-linear-to-r from-transparent via-primary to-transparent mt-2"></div>
      </div>
      <Events events={events} />
    </section>
  );
};

export default EventsContainer;
