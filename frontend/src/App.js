import { useState, useEffect } from "react";
import "@/App.css";
import { Toaster } from "sonner";
import { Navbar } from "./components/Navbar";
import { ScrollProgress, SideRail } from "./components/Chrome";
import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { Skills } from "./components/Skills";
import { FlagshipProjects } from "./components/FlagshipProjects";
import { GlowingDivider } from "./components/GlowingDivider";
import { ProjectModal } from "./components/ProjectModal";
import { SecondaryProjects } from "./components/SecondaryProjects";
import { Experience } from "./components/Experience";
import { Achievements } from "./components/Achievements";
import { Exploring } from "./components/Exploring";
import { Contact, Footer } from "./components/Contact";

function App() {
    const [activeProject, setActiveProject] = useState(null);

    useEffect(() => {
        document.title = "Mansi Gole | Portfolio";
    }, []);

    return (
        <div className="min-h-screen bg-ink text-txt antialiased">
            <Toaster
                theme="dark"
                position="bottom-right"
                toastOptions={{
                    style: {
                        background: "#292538",
                        border: "1px solid #494052",
                        color: "#F7F2F5",
                    },
                }}
            />
            <Navbar />
            <ScrollProgress />
            <SideRail />
            <main>
                <Hero />
                <About />
                <Skills />
                <FlagshipProjects onOpen={setActiveProject} />
                <GlowingDivider />
                <SecondaryProjects />
                <Experience />
                <Achievements />
                <Exploring />
                <Contact />
            </main>
            <Footer />
            <ProjectModal project={activeProject} onClose={() => setActiveProject(null)} />
        </div>
    );
}

export default App;
