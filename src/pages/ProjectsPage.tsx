import Navbar from '../sections/Navbar';
import ProjectsFullPage from '../sections/ProjectsFullPage';
import UnifiedFooter from '../sections/UnifiedFooter';

export default function ProjectsPage() {
    return (
        <>
            <Navbar />
            <main>
                <ProjectsFullPage />
            </main>
            <UnifiedFooter />
        </>
    );
}
