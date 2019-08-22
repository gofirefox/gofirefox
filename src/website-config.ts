export interface WebsiteConfig {
  title: string
  description: string
  coverImage: string
  logo: string
  /**
   * Specifying a valid BCP 47 language helps screen readers announce text properly.
   * See: https://dequeuniversity.com/rules/axe/2.2/valid-lang
   */
  lang: string
  /**
   * blog full path, no ending slash!
   */
  siteUrl: string
  /**
   * full url, no username
   */
  facebook?: string
  /**
   * full url, no username
   */
  twitter?: string
  /**
   * hide or show all email subscribe boxes
   */
  showSubscribe: boolean
  /**
   * create a list on mailchimp and then create an embeddable signup form. this is the form action
   */
  mailchimpAction?: string
  /**
   * this is the hidden input field name
   */
  mailchimpName?: string
  /**
   * name and id of the mailchimp email field
   */
  mailchimpEmailFieldName?: string
  /**
  /**
   * Meta tag for Google Webmaster Tools
   */
  googleSiteVerification?: string
  /**
  /**
   * Appears alongside the footer, after the credits
   */
  footer?: string
}

const config: WebsiteConfig = {
  title: "GoFirefox",
  description: "Switch to Firefox, the best browser in the world!",
  coverImage: "img/blog-cover.jpg",
  logo: "img/ghost-logo.png",
  lang: "en",
  siteUrl: "https://gofirefox.com",
  facebook: "https://www.facebook.com/gofirefox",
  twitter: "https://twitter.com/go_firefox",
  showSubscribe: true,
  mailchimpAction:
    "https://gmail.us3.list-manage.com/subscribe/post?u=5c3f1731b96bdb9da25dc3bf1&amp;id=2b49a1694e",
  mailchimpName: "b_5c3f1731b96bdb9da25dc3bf1_2b49a1694e",
  mailchimpEmailFieldName: "MERGE0",
  googleSiteVerification: "GoogleCode",
  footer: "is based on Gatsby Casper",
}

export default config
