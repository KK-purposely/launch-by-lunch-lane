declare global {
  interface Window {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    gtag?: (...args: any[]) => void;
  }
}

export type AnalyticsEvent =
  | 'book_consultation'
  | 'newsletter_signup_click'
  | 'contact_form_submit'
  | 'waitlist_submit'
  | 'community_form_submit'
  | 'invite_request_submit'
  | 'teardown_request_submit'
  | 'event_registration_click'
  | 'workshop_inquiry_click'
  | 'roi_calculator_click'
  | 'case_study_click';

export function trackEvent(
  event: AnalyticsEvent,
  params?: Record<string, string | number>
): void {
  try {
    window.gtag?.('event', event, params);
  } catch {
    // never break the UI
  }
}
