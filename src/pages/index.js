import React, { useState, useEffect } from 'react';
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const initNetlifyIdentity = () => {
  const script = document.createElement('script');
  script.src = "https://identity.netlify.com/v1/netlify-identity-widget.js";
  script.async = true;
  document.body.appendChild(script);
}

const openNetlifyModal = () => {
  if (! window.netlifyIdentity) {
    console.log('netlify script not loaded');
    return;
  }
  window.netlifyIdentity.open();
}

const IndexPage = () => {
  useEffect(() => {
    initNetlifyIdentity();
  }, []);

  return (
    <Layout>
      <SEO title="Home" />
      <h1>Hi people</h1>
      <button onClick={ openNetlifyModal }>Login</button>
      <p>Welcome to your new Gatsby site.</p>
      <Link to="/page-2/">Go to page 2</Link> <br />
    </Layout>
  );
}

export default IndexPage
