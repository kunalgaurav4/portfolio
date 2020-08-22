import React from "react"
import Layout from "../components/Layout"
import { Link } from "gatsby"
import SEO from "../components/SEO"

const Error = () => {
  return (
    <Layout>
      <SEO
        title="Oops 404"
        description="Kunal Gaurav is a software developer focusing on Web and mobile app development."
      ></SEO>
      <main className="error-page">
        <div className="error-container">
          <h5>Page Not Found</h5>
          <Link to="/" className="btn">
            back home
          </Link>
        </div>
      </main>
    </Layout>
  )
}

export default Error
