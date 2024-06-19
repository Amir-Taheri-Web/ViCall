import MeetingTypeCard from "@/modules/MeetingTypeCard";
import MeetingModal from "./MeetingModal";

const MeetingTypeList = () => {
  return (
    <div className="grid grid-cols-4 justify-items-center max-2xl:grid-cols-2 max-md:grid-cols-1 gap-8">
      <MeetingModal title="Start an Instant Meeting" buttonText="Start Meeting">
        <MeetingTypeCard
          icon="/icons/add-meeting.svg"
          title="New Meeting"
          description="Start an instant meeting"
          bgColor="bg-orange-1"
          type="new"
        />
      </MeetingModal>

      <MeetingModal title="Create Meeting" buttonText="Schedule Meeting">
        <MeetingTypeCard
          icon="/icons/schedule.svg"
          title="Schedule Meeting"
          description="Plan your meeting"
          bgColor="bg-blue-1"
          type="schedule"
        />
      </MeetingModal>

      <MeetingTypeCard
        icon="/icons/recordings.svg"
        title="View Recordings"
        description="Check out your recordings"
        bgColor="bg-purple-1"
        type="recordings"
      />

      <MeetingModal title="Type the Link Here" buttonText="Join Meeting">
        <MeetingTypeCard
          icon="/icons/join-meeting.svg"
          title="Join Meeting"
          description="Via invitation link"
          bgColor="bg-yellow-1"
          type="join"
        />
      </MeetingModal>
    </div>
  );
};

export default MeetingTypeList;
