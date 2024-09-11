
function ColorBar({ fxn }) {
  return (
    <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
      <div className="flex flex-wrap justify-center gap-3 shadow-xl bg-slate-400 px-3 py-2 rounded-3xl">
        <button
          className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
          style={{ backgroundColor: "blue" }}
          onClick={()=>fxn("blue")}
        >
          blue
        </button>
        <button
          className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
          style={{ backgroundColor: "red" }}
          onClick={()=>fxn("red")}
        >
          red
        </button>
        <button
          className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
          style={{ backgroundColor: "green" }}
          onClick={()=>fxn("green")}

        >
          green
        </button>
        <button
          className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
          style={{ backgroundColor: "black" }}
          onClick={()=>fxn("black")}

        >
          black
        </button>
        <button
          className="outline-none px-4 py-1 rounded-full text-black shadow-lg"
          style={{ backgroundColor: "aquamarine" }}
          onClick={()=>fxn("aquamarine")}
        >
          aquamarine
        </button>
        <button
          className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
          style={{ backgroundColor: "teal" }}
          onClick={()=>fxn("teal")}
        >
          teal
        </button>
      </div>
    </div>
  );
}

export default ColorBar;
