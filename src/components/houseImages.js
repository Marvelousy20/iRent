import React from 'react' 
import BedroomImage from '../images/Bedroom_Image.svg'
import BedroomA from '../images/Rectangle.svg'
import BedroomB from '../images/Site_Image.svg' 
import playButton from '../images/Playbutton.svg'
import styles from './css/housesImages.module.css'

function houseImages() {
    return (
        <div className = 'container-fluid'>
            <div className="row">
                <div className="col-sm">
                    <img src={BedroomA} alt="bedB"/>
                    <img src={BedroomImage} alt="bedA"/>
                    <span className = {styles.img}>
                        <img src={BedroomB} alt="bedC"/>
                        <img src={playButton} alt="bedD"/>
                    </span> 
                </div>
                <div className="col-sm">
                    <img src={BedroomA} alt="bedB"/>
                    <img src={BedroomImage} alt="bedA"/>
                    <span className = {styles.img}>
                        <img src={BedroomB} alt="bedC"/>
                        <img src={playButton} alt="bedD"/>
                    </span> 
                </div>
                <div className="col-sm">
                    <img src={BedroomA} alt="bedB"/>
                    <img src={BedroomImage} alt="bedA"/>
                    <span className = {styles.img}>
                        <img src={BedroomB} alt="bedC"/>
                        <img src={playButton} alt="bedD"/>
                    </span> 
                </div>
            </div>
        </div>
    )
}

export default houseImages
