import './App.css';
import {Navbar} from "./components/navbar";
import {HeaderContact} from "./components/headercontact";
import {About} from "./components/about/about";
import {Services} from "./components/services";
import Hero from "./components/hero/hero";
import {Customers} from "./components/customers";
import {Footer} from "./components/footer";

function App() {
    return (
        <div className="App">
            <HeaderContact/>
            <Navbar />
            <Hero />
            <About/>
            <Services />
            <Customers />
            <Footer />
        </div>
    );
}

export default App;
