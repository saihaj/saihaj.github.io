export const GA_TRACKING_ID = process.env.NEXT_PUBLIC_GA_ID

// https://developers.google.com/analytics/devguides/collection/gtagjs/pages
export const pageview = ( url:string ) => {
  // @ts-expect-error added by gtag script
  window.gtag( 'config', GA_TRACKING_ID, {
    page_path: url,
  } )
}
