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
    <article className="w-full">
      <div className="bg-hero bg-cover min-h-[300px] py-10 px-12 rounded-3xl flex flex-col justify-between">
        <div className="bg-[#ffffff22] w-fit py-2 px-4 rounded-md text-text-1 font-semibold">
          <span>Upcoming meeting at: 12:30 PM</span>
        </div>

        <div className="flex flex-col">
          <span className="text-[4.4rem] text-text-1 font-extrabold leading-[100px]">
            {time}
          </span>
          <span className="text-text-2 text-2xl font-semibold">{date}</span>
        </div>
      </div>
    </article>
  );
};

export default HomePage;
