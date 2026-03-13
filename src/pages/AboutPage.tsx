import Navbar from '../sections/Navbar';
import AboutFullPage from '../sections/AboutFullPage';
import UnifiedFooter from '../sections/UnifiedFooter';

export default function AboutPage() {
    return (
        <>
            <Navbar />
            <main>
                <AboutFullPage />
            </main>
            <UnifiedFooter />
        </>
    );
}
