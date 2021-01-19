import React from 'react'
import { Segment, Button, Menu, Container,Image } from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css'
import './HeadBanner.css'

export default function HeadBanner() {
    
    return ( 
        <div className="header_banner">
            <div className="header_context">
                <h1>Find Talents</h1>
                <p>"Chemicals React" is a pop rock song written and recorded by American pop rock duo Aly & AJ, for the deluxe edition reissue of their debut album Into the Rush (2005). The Michalka sisters co-wrote the song with Antonina Armato and Tim James of production duo Rock Mafia, who also produced the track. </p>
                <button className="header_button">Go to Employer Dashboard</button>
            </div>
            <div className="header_div_img">
                
            </div>
        </div>
      )
    
  }