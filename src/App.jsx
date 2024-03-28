import "./App.css";
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
import TableOfProducts from "./Components/TableOfProducts/TableOfProducts";

function App() {
  
  return (
      <div className="app">
        <Header />
        <TableOfProducts />
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

  );
}

export default App;
