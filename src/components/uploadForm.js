import React from "react"
import { UndrawUpload } from 'react-undraw-illustrations'
import { MDBInput, MDBBtn } from 'mdbreact'

function UploadForm() {

    const [files, setFiles] = React.useState(null)
    const acceptedFiles = ['image/jpeg', 'image/png']
    const selectedImages = (e) => {
        // This maps over multiple files
        const images = [...e.target.files].map(image => image)
        console.log(images.type)
    
        if(images.length < 3 && selectedImages.includes(images.map(image => image.type))) {
            setFiles(images)
            console.log('yaaayy!!!')
        }

        else {
            console.log('nayyy')
        }
    }

    return (
        <div style = {{maxWidth: '860px', margin: 'auto'}}>
            <UndrawUpload />
            <div className = 'text-center py-2 text-primary'>Please fill in all the fields accurately.</div>
            <form action="" style = {{margin: '0 50px'}}>
                <MDBInput 
                    type = 'text'
                    label = 'Description'
                    icon = 'pen'
                    hint = 'e.g One bedroom apartment, Self contain etc'
                    validate
                />
               <MDBInput 
                    type = 'text'
                    label = 'Location'
                    icon = 'map-marker-alt'
                    hint = 'Accommodation location'
                    validate
                />
                <MDBInput 
                    type = 'textarea'
                    label = 'Information'
                    icon = 'info'
                    rows = '3'
                    hint = 'e.g Distance to road, stable water and electricity'
                    validate
                />
                <MDBInput 
                    type = 'number'
                    label = 'Price per year'
                    icon = 'money-check'
                    hint = 'Price of the accommodation in Naira'
                    validate
                />
                <input type="file" name="" id="" onChange = {selectedImages} multiple />
                <div className = 'text-center'>
                    <MDBBtn type = 'submit' color="primary">Submit</MDBBtn>
                </div>
            </form>
        </div>
    )
}

export default UploadForm
