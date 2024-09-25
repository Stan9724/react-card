import React from 'react'
import './App.css'
import { Card } from './components/Card'

export default function App() {
  return (
    <div className='App'>
      <Card 
        imgSrc="https://picsum.photos/300/200"
        imgAlt="Card Image"
        title="Card Title"
        description="This is the card description. You can add more details here."
        buttonText="Learn More"
        link="cardPage"
      />
    </div>
  )
}