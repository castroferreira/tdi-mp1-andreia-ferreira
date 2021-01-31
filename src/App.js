import './styles/geral.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Background from './components/Background';
import Navbar from './components/Navbar/';
import Footer from './components/Footer/';
import Home from './pages/Home';
import Films from './pages/Films';
import FilmsById from './pages/Films/FilmsById';
import People from './pages/People';
import PeopleById from './pages/People/PeopleById';
import Planets from './pages/Planets';
import PlanetsById from './pages/Planets/PlanetsById';
import Species from './pages/Species';
import SpeciesById from './pages/Species/SpeciesById';
import Vehicles from './pages/Vehicles';
import VehiclesById from './pages/Vehicles/VehiclesById';
import Starships from './pages/Starships';
import StarshipsById from './pages/Starships/StarshipsById';

export default function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/films' exact component={Films} />
        <Route path='/films/:id/' exact component={FilmsById} />
        <Route path='/people' exact component={People} />
        <Route path='/people/:id/' exact component={PeopleById} />
        <Route path='/planets' exact component={Planets} />
        <Route path='/planets/:id/' exact component={PlanetsById} />
        <Route path='/species' exact component={Species} />
        <Route path='/species/:id/' exact component={SpeciesById} />
        <Route path='/vehicles' exact component={Vehicles} />
        <Route path='/vehicles/:id/' exact component={VehiclesById} />
        <Route path='/starships' exact component={Starships} />
        <Route path='/starships/:id/' exact component={StarshipsById} />
      </Switch>
      <Footer />
      <Background />
    </Router>
  );
}