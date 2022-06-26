import styled from '@emotion/styled'
import { AppBar,Toolbar, Typography,Menu } from '@mui/material'
import React from 'react'

const StyledToolbar=styled(Toolbar)({
    display:'flex',
    justifyContent:"space-between"
})
const Search = styled('div')({
    padding:'0px 10px',
    borderRadius:'5px',
    
    padding:"20px"
   
 })
 const Title = styled('div')({

       cursor:'pointer',
       padding:"20px"
 })
 const Pages = styled('div')({
    padding:'0px 10px',
    borderRadius:'5px',
  
    padding:"20px"
   
 })

const Footer = () => {
  return (
   <>
        <AppBar position='sticky' sx={{backgroundColor:'skyblue'}} >
              <StyledToolbar>
                 <img src='https://www.seekpng.com/png/detail/24-244953_ticket-png-photos-ticket-booking-icon-png.png'  style={{width:"300px", height:"120px"}}></img>
                 <Title>
                     <Typography variant='h6'>Pages</Typography>
                     <Typography>Home</Typography>
                     <Typography> Movies </Typography>
                 </Title>
                 <Search> 
                 <Typography variant='h6'>Categories</Typography>
                     <Typography>Blockbuster Movies</Typography>
                     <Typography> New Movies </Typography>
                     <Typography> Old Movies </Typography>
                     <Typography> All TIme Blockbuster </Typography>
                  </Search>
                  <Pages>
                    <Typography variant='h6'> Pages</Typography>
                     <Typography> About us</Typography>
                     <Typography> Privacy policy </Typography>
                     <Typography> Contact us</Typography>
                  </Pages>
                
              </StyledToolbar>
             </AppBar> 
             
   </>
  )
}

export default Footer
