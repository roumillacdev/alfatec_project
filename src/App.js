import './App.css';
import {Navbar} from "./components/navbar";
import {Footer} from "./components/footer";
import {HeaderContact} from "./components/headercontact";
import {About} from "./components/about/about";
import {Services} from "./components/services";
import Hero from "./components/hero/hero";


function App() {
    return (
        <div className="App">
            <HeaderContact/>
            <Navbar />
            <Hero />
            <About/>
            <Services />
            <Footer/>
        </div>
    );
}

export default App;
