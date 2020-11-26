import React from 'react' 
import BedroomImage from '../images/Bedroom_Image.svg'
import BedroomA from '../images/Rectangle.svg'
import BedroomB from '../images/Site_Image.svg' 
import playButton from '../images/Playbutton.svg'
import styles from './css/housesImages.module.css'

function houseImages() {
    return (
        <div className = 'container-fluid text-center'>
            <div className="row">
                <div className="col-12 col-md-6 col-lg-4">
                    <img src={BedroomA} alt="bedB" />
                    <div className = {`${styles.img}`}>
                        <img src={BedroomB} alt="bedC" className = {styles.i} />
                        <img src={BedroomImage} alt="bedA" className = {styles.i}/>
                    </div> 
                </div>

                <div className="col-12 col-md-6 col-lg-4">
                    <img src={BedroomA} alt="bedB" />
                    <div className = {styles.img}>
                        <img src={BedroomB} alt="bedC" className = {styles.i} />
                        <img src={BedroomImage} alt="bedA" className = {styles.i} />
                    </div> 
                </div>
                <div className="col-12 col-md-6 col-lg-4">
                    <img src={BedroomA} alt="bedB" />
                    <div className = {styles.img}>
                        <img src={BedroomB} alt="bedC" className = {styles.i} />
                        <img src={BedroomImage} alt="bedA" className = {styles.i} />
                    </div> 
                </div>
            </div>
        </div>
    )
}

export default houseImages
