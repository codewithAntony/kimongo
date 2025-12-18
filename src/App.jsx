import About from './components/About';
import Contact from './components/Contact';
import Header from './components/Header';
import Navigation from './components/Navigation';
import ProjectsStats from './components/ProjectsStats';

function App() {
    return (
        <div>
            <Navigation />
            <Header />
            <About />
            <ProjectsStats />
            <Contact />
        </div>
    );
}

export default App;
