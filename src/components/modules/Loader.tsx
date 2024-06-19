import Image from "next/image";
import loadingCircle from "@/public/icons/loading-circle.svg";

const Loader = () => {
  return (
    <div>
      <Image
        src={loadingCircle}
        alt="loader"
        width={40}
        height={40}
        className="h-auto"
      />
    </div>
  );
};

export default Loader;
