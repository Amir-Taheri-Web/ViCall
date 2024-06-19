import Image from "next/image";
import loadingCircle from "@/public/icons/loading-circle.svg";

const Loader = () => {
  return (
    <div className="w-full flex-center min-h-screen">
      <Image
        src={loadingCircle}
        alt="loader"
        width={60}
        height={60}
        className="h-auto"
      />
    </div>
  );
};

export default Loader;
