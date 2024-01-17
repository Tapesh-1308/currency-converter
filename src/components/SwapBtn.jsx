import { MdSwapVert } from "react-icons/md";

function SwapBtn({ rotation, swap }) {
  return (
    <>
      <button
        className="bg-white rounded-full w-10 h-10 flex justify-center items-center my-4"
        style={{ transform: `rotate(${rotation}deg)`,
        transition: 'transform 0.5s ease-in-out',}}
        onClick={swap}
      >
        <MdSwapVert style={{ color: "#103067" }} className="text-3xl" />
      </button>
    </>
  );
}

export default SwapBtn;
