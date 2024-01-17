function ConvertBtn({ from, to, handleConvertBtn }) {
  return (
    <>
      <button
        className="w-full py-4 mt-8 rounded text-white text-xl shadow-2xl shadow-slate-500"
        style={{ backgroundColor: "#ba096e" }}
        onClick={handleConvertBtn}
      >
        Convert {from.toUpperCase()} to {to.toUpperCase()}
      </button>
    </>
  );
}

export default ConvertBtn;