import React from "react"

import "../../css/main.css"
import { connect } from "react-redux";

import EnglishLanguage from "../../site content text/english"
import ArabicLanguage from "../../site content text/arabic"


const AboutUsPageMain = (props) => (
    <div className="container-fluid">
    <div className="container"  style={{textAlign: "center",backgroundColor: "#f9f7f2",padding: "70px", alignContent: "center"}}>
            <h1 className={`${props.languageName === 'English' ? 'content-headings-2' : 'content-headings-2-arabic'}`}>
              {props.language.aboutUs.title1}
            </h1>

            <br />

            <span className={`${props.languageName === 'English' ? 'content-sub-headings' : 'content-sub-headings-arabic'}`}>
              {props.language.aboutUs.description1}
            </span>
   
          
            <br />
            <br />
            <br />
            <h1 className={`${props.languageName === 'English' ? 'content-sub-headings' : 'content-sub-headings-arabic'}`}>
             {props.language.aboutUs.title2}
            </h1>
            <p className={`${props.languageName === 'English' ? 'headings-details ' : 'headings-details-arabic'}`}>
                {props.language.aboutUs.description2}
            </p>
            <br />
            <br />
            <br />
            <br />

          <h1 className={`${props.languageName === 'English' ? 'content-headings-2 ' : 'content-headings-2-arabic'}`}>
            {props.language.aboutUs.title3}
          </h1>

          <div className="row" >
            <div className="col-sm-3" >
              <img className="team-img" src="https://www.howtogeek.com/wp-content/uploads/2016/11/xfreddie.jpg.pagespeed.gp+jp+jw+pj+ws+js+rj+rp+rw+ri+cp+md.ic.X9S8A5J_bd.jpg" alt="programmer-img"/>
              <h4>Stephan</h4>
              <p>Technology Lead</p>
            </div>
            <div className="col-sm-3" >
              <img className="team-img" src="https://www.howtogeek.com/wp-content/uploads/2016/12/650x433x5squinch.jpg.pagespeed.gp+jp+jw+pj+js+rj+rp+rw+ri+cp+md.ic.YMwUJfJSjj.jpg" alt="programmer-img"/>
              <h4>Lewis</h4>
              <p>Growth & Operations</p>
            </div>
            <div className="col-sm-3">
              <img className="team-img" src="https://fast.clickbooq.com/0bea33-774/Reithofer-lg.jpg" alt="programmer-img"/>
              <h4>Mark</h4>
              <p>Full Stack Lead Developer</p>
            </div>
            <div className="col-sm-3">
              <img className="team-img" src="http://www.scuk.cz/uploads/avatars/petr.s.jpg" alt="programmer-img"/>

              <h4>John</h4>
              <p>Backend Developer</p>
            </div>
          </div>
        </div>
    </div>
)

const mapStateToProps = (state) => {
    return {
        language: state.language === 'English' ? EnglishLanguage : ArabicLanguage,
        languageName: state.language === 'English' ? 'English' : 'Arabic'
    }
}



export default connect(mapStateToProps)(AboutUsPageMain)