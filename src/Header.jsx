import React from 'react'
import {
    MDBContainer,
    MDBNavbar,
    MDBNavbarBrand
  } from 'mdb-react-ui-kit';
  

function Header() {
  return (
    <div>
        <MDBNavbar light bgColor='danger'>
        <MDBContainer fluid>
          <MDBNavbarBrand href='#'>
            <img
              src='https://2227229.fs1.hubspotusercontent-na1.net/hub/2227229/hubfs/Blog_EN_PICS/Email%20Nudges%20-%20Full%20Size.gif?width=300&name=Email%20Nudges%20-%20Full%20Size.gif'
              height='30'
              alt=''
              loading='lazy'
            />
            Message App
          </MDBNavbarBrand>
        </MDBContainer>
      </MDBNavbar>
      {/* <h1>Header</h1> */}
    </div>
  )
}

export default Header
