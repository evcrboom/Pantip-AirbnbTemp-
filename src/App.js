import "./App.css";
import Cardsection from "./components/cardsection/Cardsection";
import Footer from "./components/footer/Footer";
import Navbar from "./components/navbar/Navbar";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Cardsection />
      <Footer />
    </div>
  );
}

export default App;
