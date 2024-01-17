import { FaCircleInfo } from "react-icons/fa6";

function Info({info, from, to}) {
  return (
    <div className="flex gap-2 items-center mt-4 ml-4 w-full text-md">
      <p className="text-white font-semibold">1 {from.toUpperCase()} = {info} {to.toUpperCase()}</p>
      <FaCircleInfo className="bg-white rounded-full text-xl" style={{ color: "#103067" }}/>
    </div>
  );
}

export default Info;
