import React from 'react'
import { Link } from 'gatsby'
import "bootstrap/dist/css/bootstrap.min.css";
import Layout from '../components/layout'
import Scrollspy from 'react-scrollspy'

import "../css/main.css"
import "../css/header.css"

const WhyApplyPage = () => (
  <Layout>
    <div className="container-fluid col-lg-8" style={{marginTop: "30px", padding: "30px", textAlign: "justify"}}>

      <h1 className="content-headings-2">Why Apply to Pragma to Build my Startup?</h1>

      <h3 className="content-sub-headings">Traction is what you need</h3>
      <p className="headings-sub-details">

        Five or six years ago, the tech scene used to get excited about founders with “great startup ideas”. Ideas were enough to spike the interest of VC firms, get notable accelerators like Y Combinator or AngelPad to support you or convince a top-notch CTO to join you.

        It stands to a reason why those good old times are gone. The low barrier-to-entry to building a tech company was too tempting, and soon everyone was rushing to grab their slice of the pie. As a result, failure rate increased. Since then, showing traction became a key asset to earn some attention and credibility.

        In his post The Evolution of The Startup Pitch, Yassine, our CEO, puts it this way: “A pitch is a request for trust, and trust requires tangible evidence. People you ask to follow you will demand to see progress before committing”.

        For non-technical founders, this has meant a heavier burden of data-backed proof before they can earn a spot in the scene.

        And as we toured the major startup hubs, we witnessed founders with ingenious business models missing exciting opportunities, simply because they could not find technical partners willing to embark with them on the journey of building an initial version of the product to test the market opportunity.
        </p>

        <h3  className="content-sub-headings">Your current options</h3>
        <p className="headings-sub-details">After a quick scan of the tech landscape, you realize that you have three options:</p>
        <ul>
          <li className="heading-sub-details">Hiring an in-house developer: This is one of your best options. But unless they are your technical co-founder and are willing to take a bulk of compensation in the form of equity, getting a talented developer on board will cost you an arm and a leg, and a few months, at best, of screening and interviewing. And once they’re hired, between health insurance, salaries, compensations, you can easily find yourself drowning under paperwork with your burn rate jumping up the roof. Besides, with the fierce competition and high demand for skilled developers, good luck convincing them how they’ll be so much better off with you than with Dropbox, or Facebook because you think you’re onto the next big thing.</li>
          <li className="heading-sub-details">Contracting offshore freelancer services: Many entrepreneurs praise the merits of outsourcing development work overseas, and we see where they’re coming from. The costs can sound extremely tempting. The main issue with this option remains quality control. The odds of shipping a great product are significantly low because most offshore freelancers tend to lack solid startup or product experience.</li>
          <li className="heading-sub-details">Working with a development agency: Available and dedicated to their clients, development agencies, when chosen wisely, can ship good quality products. But unless you’ve managed to get some sort of funding, it’s unlikely the conversation with a renown devshop would lead to a collaboration. Even the moderately good ones remain unaffordable to early-stage founders with limited access to funds.</li>
        </ul>

        <p className="headings-sub-details">At Hidden Founders, we understood that we could neither offer our skills as a simple development agency for startups nor as a freelancing platform, given the obvious inadequacies between these models and a startup’s needs.</p>
    </div>
  </Layout>
)

export default WhyApplyPage
