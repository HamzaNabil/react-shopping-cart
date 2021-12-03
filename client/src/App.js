import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import { words } from "./words";

function App() {
  return (
    <div className="layout">
      <Header />
      <main>
        {words.content}
      </main>
      <Footer />
    </div>
  );
}

export default App;
