import Card from "@/modules/Card";

const UpcomingPage = () => {
  return (
    <article className="flex flex-col gap-8">
      <h2 className="text-3xl text-text-1 font-bold">Upcoming Meetings</h2>
      <ul className="grid grid-cols-2 max-xl:grid-cols-1 gap-8">
        <Card type="upcoming" />
        <Card type="upcoming" />
        <Card type="upcoming" />
        <Card type="upcoming" />
        <Card type="upcoming" />
      </ul>
    </article>
  );
};

export default UpcomingPage;
