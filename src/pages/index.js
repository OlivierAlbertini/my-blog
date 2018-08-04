import React from 'react'
import Link from 'gatsby-link'
import Card from '../components/card/card';
import Section from '../components/section/section';
import Wave from '../components/wave';
import { Cell } from '../components/cell';
import staticdata from '../../staticdata.json';
import styled from 'styled-components'

const SectionCaption = styled.p`
  font-weight: 600;
  font-size: 18px;
  text-transform: uppercase;
  color: #94A4BA;
  text-align: center;
`

const SectionCellGroup = styled.div`
  max-width: 800px;
  margin: 0 auto 100px;
  padding: 0 20px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-column-gap: 20px;

  @media (max-width: 800px) {
	grid-template-columns: repeat(1, 1fr);
  }
`

const IndexPage = () => (
  <div>
    <div className="Hero">
      <div className="HeroGroup">
        <h1>Yep! Another blog!</h1>
        <p>Write articles.. Challenge accepted!</p>
        <Link to="/page-2/">Go to page 2</Link>
        <div className="Logos">
          <img src="https://s3.ca-central-1.amazonaws.com/public-images-blog/logo-node.png" width="50" />
          <img src="https://s3.ca-central-1.amazonaws.com/public-images-blog/logo-python.png" width="50" />
          <img src="https://s3.ca-central-1.amazonaws.com/public-images-blog/logo-react.png" width="50" />
          <img src="https://s3.ca-central-1.amazonaws.com/public-images-blog/logo-sketch.png" width="50" />
          <img src="https://s3.ca-central-1.amazonaws.com/public-images-blog/logo-swift.png" width="50" />
          <img src="https://s3.ca-central-1.amazonaws.com/public-images-blog/logo-xcode.png" width="50" />
          <img src="https://s3.ca-central-1.amazonaws.com/public-images-blog/logo-airflow.png" width="50" />
          <img src="https://s3.ca-central-1.amazonaws.com/public-images-blog/logo-rabbitmq.png" width="45" />
          <img src="https://s3.ca-central-1.amazonaws.com/public-images-blog/logo-csharp.png" width="48" />
          <img src="https://s3.ca-central-1.amazonaws.com/public-images-blog/logo-mongodb.png" width="50" />
          <img src="https://s3.ca-central-1.amazonaws.com/public-images-blog/logo-docker.png" width="60" />
          <img src="https://s3.ca-central-1.amazonaws.com/public-images-blog/logo-elastic.png" width="40" />
        </div>
        <Wave />
      </div>
    </div>
    <div className="Cards">
      <h2>Articles</h2>
      <div className="CardGroup">
        <Card
          title="Get started with Airflow"
          text="1 section"
          image="https://s3.ca-central-1.amazonaws.com/public-images-blog/wallpaper2.jpg" />
        <Card
          title="NodeJS 8"
          text="1 section"
          image="https://s3.ca-central-1.amazonaws.com/public-images-blog/wallpaper.jpg" />
        <Card
          title="Firestore"
          text="1 section"
          image="https://s3.ca-central-1.amazonaws.com/public-images-blog/wallpaper4.jpg" />
        <Card
          title="Microservice"
          text="1 section"
          image="https://s3.ca-central-1.amazonaws.com/public-images-blog/wallpaper3.jpg" />
      </div>
    </div>
    <Section
      image="https://s3.ca-central-1.amazonaws.com/public-images-blog/wallpaper2.jpg"
      logo="https://s3.ca-central-1.amazonaws.com/public-images-blog/logo-node.png"
      title="NodeJs 8"
      text="In this section we will speak about NodeJS and his recent releases!"
    />
    <SectionCaption>4 articles</SectionCaption>
    <SectionCellGroup>
      {staticdata.cells.map(cell => (
        <Cell title={cell.title} image={cell.image} />
      ))}
    </SectionCellGroup>
  </div>
)

export default IndexPage
