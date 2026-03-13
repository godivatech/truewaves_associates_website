import FooterCTA from './FooterCTA';
import Footer from './Footer';

/**
 * UnifiedFooter component that combines the call-to-action section
 * and the main footer. This should be used consistently across all
 * pages to ensure the complete footer experience.
 */
export default function UnifiedFooter() {
  return (
    <>
      <FooterCTA />
      <Footer />
    </>
  );
}
