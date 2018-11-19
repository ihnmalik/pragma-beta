import React from "react"
import Carousel from "nuka-carousel"


export default class extends React.Component {
    state = {
        slideIndex: 0
      };
    
    render() {
        return (
            <div className="main-slider-div" style={{padding: "40px "}}>
            <Carousel 
                autoplay={true} 
                withoutControls={true}
                wrapAround={true}
                autoplayInterval={3000}
                pauseOnHover={false}
                slideIndex={this.state.slideIndex}
                afterSlide={slideIndex => this.setState({ slideIndex })}
            >
                
                    <div className="container slider-content">
                        <img className="team-img" src="https://www.howtogeek.com/wp-content/uploads/2016/11/xfreddie.jpg.pagespeed.gp+jp+jw+pj+ws+js+rj+rp+rw+ri+cp+md.ic.X9S8A5J_bd.jpg" alt="programmer-img"/>
                        
                        <br />
                        <br />
                        <h4 className="content-headings-2">Stephan Hicham</h4>
                        <p className="content-sub-headings">Technology Lead</p>

                        <p className="headings-sub-details">
                            "Absolutely love Pragma. Committedto being an advisor to the project
                            a year and a half ago and have had a blast ever since. It's so exciting
                            seeing the batch of companies come through. The team has done an excellent job
                            shepherding folks through partnership through the incubation phase. I think the
                            model is fascinating, and it's at this point a well proven sucess."
                        </p>
                    </div>
                    <div className="container slider-content">
                        <img className="team-img" src="https://www.howtogeek.com/wp-content/uploads/2016/12/650x433x5squinch.jpg.pagespeed.gp+jp+jw+pj+js+rj+rp+rw+ri+cp+md.ic.YMwUJfJSjj.jpg" alt="programmer-img"/>
                        
                        <br />
                        <br />
                        <h4 className="content-headings-2">Lewis Patrick</h4>
                        <p className="content-sub-headings">Growth & Operations</p>

                        <p className="headings-sub-details">
                            "Absolutely love Pragma. Committedto being an advisor to the project
                            a year and a half ago and have had a blast ever since. It's so exciting
                            seeing the batch of companies come through. The team has done an excellent job
                            shepherding folks through partnership through the incubation phase. I think the
                            model is fascinating, and it's at this point a well proven sucess."
                        </p>
                    </div>

                    <div className="container slider-content">
                        <img className="team-img" src="https://fast.clickbooq.com/0bea33-774/Reithofer-lg.jpg" alt="programmer-img"/>
                            
                            <br />
                            <br />
                        <h4 className="content-headings-2">Mark kennedy</h4>
                        <p className="content-sub-headings">Full Stack Lead Developer</p>

                        <p className="headings-sub-details">
                                "Absolutely love Pragma. Committedto being an advisor to the project
                                a year and a half ago and have had a blast ever since. It's so exciting
                                seeing the batch of companies come through. The team has done an excellent job
                                shepherding folks through partnership through the incubation phase. I think the
                                model is fascinating, and it's at this point a well proven sucess."
                        </p>
                    </div>

                    <div className="container slider-content">
                        <img className="team-img" src="http://www.scuk.cz/uploads/avatars/petr.s.jpg" alt="programmer-img"/>
                            
                            <br />
                            <br />
                        <h4 className="content-headings-2">John Doe</h4>
                        <p className="content-sub-headings">Backend Developer</p>

                        <p className="headings-sub-details">
                                "Absolutely love Pragma. Committedto being an advisor to the project
                                a year and a half ago and have had a blast ever since. It's so exciting
                                seeing the batch of companies come through. The team has done an excellent job
                                shepherding folks through partnership through the incubation phase. I think the
                                model is fascinating, and it's at this point a well proven sucess."
                        </p>    
                    </div>

            </Carousel>
            </div>
        )
    }
}
