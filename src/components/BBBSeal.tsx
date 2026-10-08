// BBB Accredited Business seal. Renders the same link and image the official
// BBB seal script injects, so it works reliably across page navigation.
const BBBSeal = ({ className = "", height = 52 }: { className?: string; height?: number }) => (
  <a
    href="https://www.bbb.org/us/ma/boston/profile/artificial-intelligence/launch-by-lunch-llc-0021-575796#sealclick"
    target="_blank"
    rel="nofollow noopener noreferrer"
    className={`inline-block transition-opacity hover:opacity-90 ${className}`}
  >
    <img
      src="https://seal-boston.bbb.org/seals/blue-seal-293-61-bbb-575796.png"
      alt="Launch by Lunch, LLC BBB Business Review"
      style={{ height, width: "auto", border: 0 }}
      loading="lazy"
    />
  </a>
);

export default BBBSeal;
