import Header from "./components/header";
import Main from "./components/main";
import Footer from "./components/footer";
import "./App.scss";


function App() {
  return (
    
    <div className="App">
      <div className="App__header_Wrapper">
        <Header />
      </div>
      <div className="App__main_Wrapper">
        <Main />
      </div>
      <div className="App__footer_Wrapper">
        <Footer />
      </div>
    </div>
  );
}

export default App;