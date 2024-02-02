import "./App.css";
import ProductProvider from "./Context/Productcontext";
import {Header, Hero, NewArrival, TopCollection, LatestCollection, Statistique, Footer} from "./Components"

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
          <Statistique/>
          <Footer/>
    </div>
      </ProductProvider>
  );
}

export default App;
