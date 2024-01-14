/** @format */

import Nav from "./components/Nav.jsx";
import Hero from "./components/Hero.jsx";
import "./index.css";
import Skills from "./components/Skills.jsx";
import FirstParallex from "./components/FirstParallex.jsx";
import SecondParallex from "./components/SecondParallex.jsx";
import Footer from "./components/Footer.jsx";
import About from "./components/About.jsx";
import Portfolio from "./components/Portfolio.jsx";

import Contact from "./components/Contact.jsx";

export default function App() {
    return (
        <div className='app'>
            <section id='home' className='h-screen'>
                <Nav />
                <Hero />
            </section>
            <section id='about' className='h-screen'>
                <FirstParallex />
            </section>
            <section  className='h-screen md:h-[90vh]'>
                <About />
            </section>
            <section
                className='h-screen via-100% from-black to-[#87CEEB]'
                id='projects'
            >
                <SecondParallex />
            </section>
            <Portfolio />
            <section
                id='skills'
                className='h-auto md:h-[60vh] flex justify-center
            items-center'
            >
                <Skills />
            </section>
            <section
                id='contact'
                className='h-auto md:h-[60vh] flex justify-center
            items-center py-5'
            >
                <Contact />
            </section>

            <Footer />
        </div>
    );
}
