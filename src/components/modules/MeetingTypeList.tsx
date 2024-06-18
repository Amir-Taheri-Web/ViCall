import MeetingTypeCard from "@/modules/MeetingTypeCard";

const MeetingTypeList = () => {
  return (
    <div className="grid grid-cols-4 max-2xl:grid-cols-2 max-md:grid-cols-1 gap-8">
      <MeetingTypeCard
        icon="/icons/add-meeting.svg"
        title="New Meeting"
        description="Start an instant meeting"
        bgColor="bg-orange-1"
      />

      <MeetingTypeCard
        icon="/icons/schedule.svg"
        title="Schedule Meeting"
        description="Plan your meeting"
        bgColor="bg-blue-1"
      />

      <MeetingTypeCard
        icon="/icons/recordings.svg"
        title="View Recordings"
        description="Check out your recordings"
        bgColor="bg-purple-1"
      />

      <MeetingTypeCard
        icon="/icons/join-meeting.svg"
        title="Join Meeting"
        description="Via invitation link"
        bgColor="bg-yellow-1"
      />
    </div>
  );
};

export default MeetingTypeList;
