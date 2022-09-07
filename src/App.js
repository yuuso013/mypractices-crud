import Header from "./Components/UI/Header"
import QuintoPrimera from "./Components/UI/Screens/QuintoPrimera"
import QuintoSegunda from "./Components/UI/Screens/QuintoSegunda"
import QuintoTercera from "./Components/UI/Screens/QuintoTercera"
import SextoPrimera from "./Components/UI/Screens/SextoPrimera"
import SextoSegunda from "./Components/UI/Screens/SextoSegunda"
import SextoTercera from "./Components/UI/Screens/SextoTercera"
import './Components/UI/Styles/App.css'

function App() {
    return (
      <>
        <Header></Header>
        <QuintoPrimera></QuintoPrimera>
        <QuintoSegunda></QuintoSegunda>
        <QuintoTercera></QuintoTercera>
        <SextoPrimera></SextoPrimera>
        <SextoSegunda></SextoSegunda>
        <SextoTercera></SextoTercera>
      </>
  );
}

export default App;
