import React, { useEffect } from "react"

import Layout from "../components/shared/layout"

const NotFoundPage = () => {
  useEffect(() => {
    if (window) {
      const loadScript = src => {
        console.log("work")
        var tag = document.createElement("script")
        tag.async = false
        tag.src = src
        document.body.appendChild(tag)
      }
      loadScript("https://www.fbgcdn.com/embedder/js/ewm2.js")
    }
  }, [])

  return (
    <Layout>
      <span
        className="glf-button"
        data-glf-cuid="f6c74792-8269-48cf-b43b-ed867799fcd1"
        data-glf-ruid="be5cdbef-7633-40e1-824e-1f837f94f61c"
      >
        See MENU & Order
      </span>
    </Layout>
  )
}

export default NotFoundPage
