import React from "react";
import "./TalkCard.css";

export default function TalkCard({talkDetails}) {
  return (
      <div className="col-md-12 col-sm-6 col-xs-12">
        <div className="rectangle">
          <div className="diagonal-fill"></div>
          <div className="talk-card-title">{talkDetails.title}</div>
          <p className="talk-card-subtitle">{talkDetails.subtitle}</p>

          <div className="card-footer-button-div">
            <a href={talkDetails.slides_url} target="_" className="talk-button">
              Slides
            </a>
          </div>
        </div>
      </div>
  );
}
