import products from "./data.js";
import { useState } from "react";
import Cards from "./components/Cards.js";

function App() {
  const [data, setData] = useState(products);
  function updateData(key) {
		const newData = data.filter((datum) => datum.id !== key);
    setData(newData);
  }

  return (
    <div className="bg-orange-200 p-6 min-h-[100vh]">
      <h1 className="text-[3rem] text-center font-bold text-yellow-900 mb-4">
        Men's Watches
      </h1>
      <Cards data={data} updateData={updateData}></Cards>
    </div>
  );
}

export default App;
