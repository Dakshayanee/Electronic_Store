import React from 'react'
import { Button, Container } from 'react-bootstrap'
import Footer from './footer'
import { NavLink } from 'react-router-dom'

function Base({title="Page title" ,description="Welcome to dynamic store",buttonEnabled=false,buttonText="Shop Now",buttonType="btn btn-primary",children}) {
  let styleContainer={
    background:"black",
    height:"150px",
    color:"white"
  }                                                                                                                                                                                 
  return (
    <div>
        <Container fluid className='p-4  flex align-items-center justify-content-center' style={styleContainer}>
          <div>
            <h3 className='text-center'>{title}</h3>
            <p className='text-center' >{description && description}</p>
            {/* <Button>Shop now</Button> */}
            {buttonEnabled && <Button  as={NavLink} to="/" variant={buttonType} >{buttonText}</Button>}
       </div>
        </Container>
        {children}
        <Footer/> 
    </div>
  )
}

export default Base