import { GoogleAnalytics } from "@next/third-parties/google";

const GoogleAnalyticsProvider = () => {
  return <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GA_ID as string} />;
};

export default GoogleAnalyticsProvider;
