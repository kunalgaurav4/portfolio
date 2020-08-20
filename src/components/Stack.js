import React from "react"
import python from "../assets/icons8-python.svg"
import html from "../assets/icons8-html-5.svg"
import css from "../assets/icons8-css3.svg"
import javascript from "../assets/icons8-javascript.svg"
import bootstrap from "../assets/icons8-bootstrap.svg"

import reactNative from "../assets/icons8-react-native.svg"

import Title from "./Title"

export default function Stack() {
  return (
    <section className="section bg-grey">
      <Title title="Stack Known"></Title>
      <div className="section-center services-center">
        <div>
          <img className="skill" src={html} alt="html" />
          <h4>HTML</h4>
        </div>
        <div>
          <img className="skill" src={css} alt="css" />
          <h4>CSS</h4>
        </div>
        <div>
          <img className="skill" src={javascript} alt="javascript" />
          <h4>Javascript</h4>
        </div>
        <div>
          <img className="skill" src={python} alt="python" />
          <h4>Python</h4>
        </div>
        <div>
          <img className="skill" src={reactNative} alt="react-native" />
          <h4>React.js / React Native</h4>
        </div>
        <div>
          <img className="skill" src={bootstrap} alt="bootstrap" />
          <h4>Bootstrap</h4>
        </div>
      </div>
    </section>
  )
}
