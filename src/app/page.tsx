
import Dates from "./Components/Dates";
import Details from "./Components/Details";
import Header from "./Components/Header";
import Order from "./Components/Order";
import Revenue from "./Components/Revenue";

export default function Home() {
  return (
    <div className="m-4">
      <main >
        <Header/>
        <Dates/>
        <Details/>
        <Revenue/>
        <Order/>
      </main>
      
    </div>
  );
}
