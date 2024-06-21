"use client";

import useGetCalls from "@/hooks/useGetCalls";
import Card from "@/modules/Card";
import Loader from "@/modules/Loader";

const UpcomingPage = () => {
  const { upcomingCalls, isLoading } = useGetCalls();

  if (isLoading) return <Loader />;

  return (
    <article className="flex flex-col gap-8">
      <h2 className="text-3xl text-text-1 font-bold">Upcoming Meetings</h2>
      {upcomingCalls && upcomingCalls?.length > 0 ? (
        <ul className="grid grid-cols-2 max-xl:grid-cols-1 gap-8">
          {upcomingCalls?.map((item) => {
            const title = item?.state.custom.description || "Meeting";
            const date =
              item?.state.startsAt?.toLocaleString([], {
                weekday: "long",
                year: "numeric",
                month: "long",
                day: "numeric",
                hour: "2-digit",
                minute: "2-digit",
              }) ||
              new Date(Date.now()).toLocaleString([], {
                weekday: "long",
                year: "numeric",
                month: "long",
                day: "numeric",
                hour: "2-digit",
                minute: "2-digit",
              });

            const meetingLink = `${process.env.NEXT_PUBLIC_BASE_URL}/meeting/${item?.id}`;

            return (
              <Card
                type="upcoming"
                key={item.id}
                title={title}
                date={date}
                meetingLink={meetingLink}
              />
            );
          })}
        </ul>
      ) : (
        <h3 className="text-text-1 font-semibold text-2xl">
          No upcoming calls
        </h3>
      )}
    </article>
  );
};

export default UpcomingPage;
