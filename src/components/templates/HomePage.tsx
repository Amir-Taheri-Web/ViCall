import MeetingTypeList from "@/modules/MeetingTypeList";

const HomePage = () => {
  const time = new Date().toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
  });

  const date = new Date().toLocaleDateString([], {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <article className="w-full flex flex-col gap-10">
      <div className="bg-hero bg-cover min-h-[300px] py-10 px-12 max-lg:p-8 max-sm:py-6 max-sm:px-6 rounded-3xl flex flex-col justify-between">
        <div className="bg-[#ffffff22] w-fit py-2 px-4 rounded-md text-text-1 font-semibold">
          <span>Upcoming meeting at: 12:30 PM</span>
        </div>

        <div className="flex flex-col">
          <span className="text-[4.4rem] max-sm:text-[2.5rem] text-text-1 font-extrabold leading-[100px] max-sm:leading-normal">
            {time}
          </span>
          <span className="text-text-2 text-2xl max-sm:text-[1.2rem] font-semibold">
            {date}
          </span>
        </div>
      </div>

      <MeetingTypeList />
    </article>
  );
};

export default HomePage;
