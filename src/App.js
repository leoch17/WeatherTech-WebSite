import React, {useEffect} from 'react';
import './App.css';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/pages/Home';
import Products from './components/pages/Products';
import Aboutus from './components/pages/Aboutus';
import News from './components/pages/News';
import Contacts from './components/pages/Contacts';
import Floorliner_chevrolet from './components/pages/Products/Floorliner/Floorliner-chevrolet';
import Floorliner_ford from './components/pages/Products/Floorliner/Floorliner-ford';
import Floorliner_hyundai from './components/pages/Products/Floorliner/Floorliner-hyundai';
import Floorliner_mitsubishi from './components/pages/Products/Floorliner/Floorliner-mitsubishi';
import Floorliner_toyota from './components/pages/Products/Floorliner/Floorliner-toyota';
import Cargoliner_hyundai from './components/pages/Products/Cargoliner/Cargoliner-hyundai';
import Cargoliner_toyota from './components/pages/Products/Cargoliner/Cargoliner-toyota';
import Cargotech_chevrolet from './components/pages/Products/Cargotech/Cargotech-chevrolet';
import Cargotech_hyundai from './components/pages/Products/Cargoliner/Cargoliner-hyundai';
import Cargotech_mitsubishi from './components/pages/Products/Cargotech/Cargotech-mitsubishi';
import Cargotech_toyota from './components/pages/Products/Cargotech/Cargotech-toyota';
import Universales_chevrolet from './components/pages/Products/Universales/Universales-chevrolet';
import Universales_ford from './components/pages/Products/Universales/Universales-ford';
import Universales_toyota from './components/pages/Products/Universales/Universales-toyota';
import Subcategorie_floorliner from './components/pages/Products/Subcategories/Subcategorie_floorliner';
import Subcategorie_cargoliner from './components/pages/Products/Subcategories/Subcategorie_cargoliner';
import Subcategorie_cargotech from './components/pages/Products/Subcategories/Subcategorie_cargotech';
import Subcategorie_universales from './components/pages/Products/Subcategories/Subcategorie_universales';
import Comercio_Anzoategui from './components/pages/Sections/Commerces/comercio-anzoategui';
import Comercio_Apure from './components/pages/Sections/Commerces/comercio-apure';
import Comercio_Bolivar from './components/pages/Sections/Commerces/comercio-bolivar';
import Comercio_DC from './components/pages/Sections/Commerces/comercio-dc';
import Comercio_Carabobo from './components/pages/Sections/Commerces/comercio-carabobo';
import Comercio_Guarico from './components/pages/Sections/Commerces/comercio-guarico';
import Comercio_Lara from './components/pages/Sections/Commerces/comercio-lara';
import Comercio_Merida from './components/pages/Sections/Commerces/comercio-merida';
import Comercio_Miranda from './components/pages/Sections/Commerces/comercio-miranda';
import Comercio_Monagas from './components/pages/Sections/Commerces/comercio-monagas';
import Comercio_NE from './components/pages/Sections/Commerces/comercio-ne';
import Comercio_Portuguesa from './components/pages/Sections/Commerces/comercio-portuguesa';
import Comercio_Tachira from './components/pages/Sections/Commerces/comercio-tachira';
import Comercio_Trujillo from './components/pages/Sections/Commerces/comercio-trujillo';
import Comercio_Zulia from './components/pages/Sections/Commerces/comercio-zulia';

function App() {
  useEffect(() => {
    function handleClick() {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    document.addEventListener('click', handleClick);

    return () => {
      document.removeEventListener('click', handleClick);
    };
  }, []);
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/products" component={Products} />
          <Route path="/aboutus" component={Aboutus} />
          <Route path="/news" component={News} />
          <Route path="/contacts" component={Contacts} />
          <Route path="/floorliner-chevrolet" component={Floorliner_chevrolet} />
          <Route path="/floorliner-ford" component={Floorliner_ford} />
          <Route path="/floorliner-hyundai" component={Floorliner_hyundai} />
          <Route path="/floorliner-mitsubishi" component={Floorliner_mitsubishi} />
          <Route path="/floorliner-toyota" component={Floorliner_toyota} />
          <Route path="/cargoliner-hyundai" component={Cargoliner_hyundai} />
          <Route path="/cargoliner-toyota" component={Cargoliner_toyota} />
          <Route path="/cargotech-chevrolet" component={Cargotech_chevrolet} />
          <Route path="/cargotech-hyundai" component={Cargotech_hyundai} />
          <Route path="/cargotech-mitsubishi" component={Cargotech_mitsubishi} />
          <Route path="/cargotech-toyota" component={Cargotech_toyota} />
          <Route path="/universales-chevrolet" component={Universales_chevrolet} />
          <Route path="/universales-ford" component={Universales_ford} />
          <Route path="/universales-toyota" component={Universales_toyota} />
          <Route path="/subcategorie_floorliner" component={Subcategorie_floorliner} />
          <Route path="/subcategorie_cargoliner" component={Subcategorie_cargoliner} />
          <Route path="/subcategorie_cargotech" component={Subcategorie_cargotech} />
          <Route path="/subcategorie_universales" component={Subcategorie_universales} />
          <Route path="/comercio-anzoategui" component={Comercio_Anzoategui} />
          <Route path="/comercio-apure" component={Comercio_Apure} />
          <Route path="/comercio-bolivar" component={Comercio_Bolivar} />
          <Route path="/comercio-dc" component={Comercio_DC} />
          <Route path="/comercio-carabobo" component={Comercio_Carabobo} />
          <Route path="/comercio-guarico" component={Comercio_Guarico} />
          <Route path="/comercio-lara" component={Comercio_Lara} />
          <Route path="/comercio-merida" component={Comercio_Merida} />
          <Route path="/comercio-miranda" component={Comercio_Miranda} />
          <Route path="/comercio-monagas" component={Comercio_Monagas} />
          <Route path="/comercio-ne" component={Comercio_NE} />
          <Route path="/comercio-portuguesa" component={Comercio_Portuguesa} />
          <Route path="/comercio-tachira" component={Comercio_Tachira} />
          <Route path="/comercio-trujillo" component={Comercio_Trujillo} />
          <Route path="/comercio-zulia" component={Comercio_Zulia} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
