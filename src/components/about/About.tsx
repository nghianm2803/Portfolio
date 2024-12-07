import React, { FC } from 'react'
import './about.css'
import Image from 'next/image'
import Avatar2 from '../../assets/Avatar2.png'
import {
  NodeJsIcon,
  ReactIcon,
  TsIcon,
  JsIcon,
  MongoDbIcon,
  ExpressIcon,
  VueIcon,
  DartIcon,
  FlutterIcon,
} from './Stack'

const About: FC = () => {
  return (
    <section className="about container section" id="about">
      <h2 className="section__title">About Me</h2>
      <div className="about__container grid">
        <Image src={Avatar2} alt="" className="about__img" />
        <div className="about__data grid">
          <div className="about__info">
            <p className="about__description">
              👋 Hey, I am <b> Minh Nghia </b>, an enthusiastic mobile developer
              with a strong background in cross-platform technologies. I am
              proficient in Dart/Flutter GetX. Additionally, I have experience
              with TypeScript, JavaScript, and frameworks such as ReactJS and
              VueJS. My expertise extends to backend development with NodeJS and
              ExpressJS, and database management using MongoDB. I am deeply
              motivated to deliver quality solutions to new challenges in mobile
              development.
            </p>
          </div>

          <div className="about__skills grid">
            <div className="skills__data">
              <div className="skills__titles">
                <h3 className="skills__name">Languages I speak</h3>
              </div>
            </div>
            <div className="skills__data">
              <div className="skills__titles">
                <h3 className="skills__name">Mobile App</h3>
              </div>
              <div className="skills__stack grid">
                <DartIcon />
                <FlutterIcon />
              </div>
            </div>
            <div className="skills__data">
              <div className="skills__titles">
                <h3 className="skills__name">Frontend</h3>
              </div>
              <div className="skills__stack grid">
                <TsIcon />
                <JsIcon />
                <ReactIcon />
                <VueIcon />
              </div>
            </div>

            <div className="skills__data">
              <div className="skills__titles">
                <h3 className="skills__name">Backend, Database</h3>
              </div>
              <div className="skills__stack grid">
                <NodeJsIcon />
                <ExpressIcon />
                <MongoDbIcon />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
