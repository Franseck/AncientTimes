import MyNavbar from "./components/MyNavbar"
import Footer from "./components/Footer";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./scss/app.scss"
import CardContainer from "./components/CardContainer";
import {data} from "./data"


function App() {
  return (
    <div className="app">
      <MyNavbar />
      <CardContainer data={data} />
      <Footer/>
</div>

  );
}

export default App;
