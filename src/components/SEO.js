import React from "react"
import { Helmet } from "react-helmet"
import favicon from "../assets/favicon.png"
import { useStaticQuery, graphql } from "gatsby"

const query = graphql`
  {
    site {
      siteMetadata {
        author
        siteDescription: description
        siteUrl
        siteTitle: title
        twitterUsername
        favicon
        image
        linkedinUsername
      }
    }
  }
`

const SEO = ({ title, description }) => {
  const { site } = useStaticQuery(query)
  const {
    siteDescription,
    siteTitle,
    siteUrl,
    image,
    twitterUsername,
    linkedinUsername,
    favicon,
  } = site.siteMetadata

  return (
    <Helmet htmlAttributes={{ lang: "en" }} title={`${title}| ${siteTitle}`}>
      <meta name="description" content={description || siteDescription} />
      <link rel="icon" href={favicon} />
      <meta name="image" content={image || favicon}></meta>
      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image"></meta>
      <meta name="twitter:creator" content={twitterUsername}></meta>{" "}
      <meta name="twitter:title" content={siteTitle}></meta>{" "}
      <meta name="twitter:description" content={siteDescription}></meta>
      <meta name="twitter:image" content={`${siteUrl} ${image}`}></meta>
    </Helmet>
  )
}

export default SEO
