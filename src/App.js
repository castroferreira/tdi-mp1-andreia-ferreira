import './styles/geral.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
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
        <Route exact path='/' component={Home} />
        <Route exact path='/films' component={Films} />
        <Route exact path='/films/:id' component={FilmsById} />
        <Route exact path='/people' component={People} />
        <Route exact path='/people/:id' component={PeopleById} />
        <Route exact path='/planets' component={Planets} />
        <Route exact path='/planets/:id' component={PlanetsById} />
        <Route exact path='/species' component={Species} />
        <Route exact path='/species/:id' component={SpeciesById} />
        <Route exact path='/vehicles' component={Vehicles} />
        <Route exact path='/vehicles/:id' component={VehiclesById} />
        <Route exact path='/starships' component={Starships} />
        <Route exact path='/starships/:id' component={StarshipsById} />
      </Switch>
      <Footer />   
    </Router>
  );
}