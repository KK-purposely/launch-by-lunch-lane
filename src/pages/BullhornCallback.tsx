import { useEffect } from "react";
import { Helmet } from "react-helmet-async";

/**
 * OAuth callback landing page (Bullhorn).
 *
 * Deliberately bare: no navigation, footer, analytics, tracking pixels,
 * chat widgets, or console logging. Only the required meta tags are set.
 */
const BullhornCallback = () => {
  // The sitewide GA4 snippet in index.html loads everywhere, so opt this
  // path out: no measurement hits are ever sent from /oauth/* pages.
  useEffect(() => {
    (window as unknown as Record<string, unknown>)["ga-disable-G-RN23XS81KR"] = true;
  }, []);

  return (
    <>
      <Helmet>
        <title>Authorization complete</title>
        <meta name="robots" content="noindex, nofollow" />
        <meta name="referrer" content="no-referrer" />
      </Helmet>
      <div className="min-h-screen bg-white" />
    </>
  );
};

export default BullhornCallback;
