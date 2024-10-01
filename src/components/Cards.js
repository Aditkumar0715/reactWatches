import Card from "./Card.js";

function Cards(props) {
  if (props.data.length === 0) {
    function refreshHandler() {
      window.location.reload();
    }
    return (
      <div className="flex justify-center items-center flex-col gap-4 max-w-[1200px] mx-auto">
        <h1>No Products Left</h1>
        <button
          onClick={refreshHandler}
          className="bg-green-200 rounded-md px-4 py-2 border-none outline-none active:scale-95 font-semibold hover:text-white hover:bg-green-400"
        >
          Refresh
        </button>
      </div>
    );
  }
  return (
    <div className="flex justify-center flex-wrap gap-2 max-w-[1200px] mx-auto">
      {props.data.map((datum) => (
        <Card
          key={datum.id}
          id={datum.id}
          src={datum.images[1]}
          title={datum.title}
          desc={datum.description}
          price={datum.price}
          rating={datum.rating}
          updateData={props.updateData}
        ></Card>
      ))}
    </div>
  );
}

export default Cards;
