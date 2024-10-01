import { useState } from "react";

function Card(props) {
  const [more, setMore] = useState(false);

	// const info = `${props.desc.substring(0, 50)}...`
	let	info = more ? props.desc : `${props.desc.substring(0, 50)}...`;
  function moreHandler() {
    setMore(!more);
    
  }


  return (
    <div className="flex flex-col items-center gap-2 w-[22rem] rounded-md p-5 bg-stone-500 shadow-sm text-white">
      <img
        src={props.src}
        className="w-[20rem]"
        alt={props.title}
        loading="lazy"
      />
      <h3 className="text-2xl font-semibold self-start mb-2">{props.title}</h3>
      <p>
        {info}
        <span
          className="text-blue-400 cursor-pointer select-none"
          onClick={moreHandler}
        >
          {more ? " less" : " more"}
        </span>
      </p>
      <div className="self-start">
        <h4 className="text-xl text-green-500 font-semibold self-start">
          ₹ {props.price}
        </h4>
        <p>{props.rating}⭐</p>
      </div>
      <button
        className="bg-red-300 hover:bg-red-600 px-20 py-1 font-semibold rounded-md transition-colors active:scale-95 outline-none border-none"
        onClick={() => props.updateData(props.id)}
      >
        Gift
      </button>
    </div>
  );
}

export default Card;
