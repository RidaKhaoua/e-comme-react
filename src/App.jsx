import "./App.css";
import ProductProvider from "./Context/Productcontext";
import {
  Header,
  Hero,
  NewArrival,
  TopCollection,
  LatestCollection,
  Statistique,
  LatestNews,
  Footer,
} from "./Components";

function App() {
  return (
    <ProductProvider>
      <div className="app">
        <Header />
        <div className="container">
          <Hero />
          <TopCollection />
          <NewArrival />
          <LatestCollection />
        </div>
        <Statistique />
        <div className="container">
          <LatestNews/>
        </div>
        <Footer />
      </div>
    </ProductProvider>
  );
}

export default App;
