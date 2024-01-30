import "./App.css";
import ProductProvider from "./Context/Productcontext";
import {Header, Hero, NewArrival, TopCollection, LatestCollection} from "./Components"
function App() {
  return (
    <ProductProvider>

    <div className="app">
      <Header />
        <div className="container">
          <Hero />
          <TopCollection />
          <NewArrival/>
          <LatestCollection/>
        </div>
    </div>
      </ProductProvider>
  );
}

export default App;
