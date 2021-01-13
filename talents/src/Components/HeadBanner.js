import React from 'react'
import { Segment, Button, Menu, Container,Image } from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css'
import './HeadBanner.css'

export default function HeadBanner() {
    
    return ( 
        <div class="header_banner">
            <div class="header_context">
                <h1>Find Talents</h1>
                <p>"Chemicals React" is a pop rock song written and recorded by American pop rock duo Aly & AJ, for the deluxe edition reissue of their debut album Into the Rush (2005). The Michalka sisters co-wrote the song with Antonina Armato and Tim James of production duo Rock Mafia, who also produced the track. </p>
                <button class="header_button">Go to Employer Dashboard</button>
            </div>
            <div class="header_div_img">
                
            </div>
        </div>
      )
    
  }