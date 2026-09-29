import { Helmet } from "react-helmet-async";

/**
 * OAuth callback landing page (Bullhorn).
 *
 * Deliberately bare: no navigation, footer, analytics, tracking pixels,
 * chat widgets, or console logging. Only the required meta tags are set.
 */
const BullhornCallback = () => (
  <>
    <Helmet>
      <title>Authorization complete</title>
      <meta name="robots" content="noindex, nofollow" />
      <meta name="referrer" content="no-referrer" />
    </Helmet>
    <div className="min-h-screen bg-white" />
  </>
);

export default BullhornCallback;
