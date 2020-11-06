import React, {useState, useEffect} from 'react'
import {FaBars, FaTimes} from 'react-icons/fa';
import {IconContext} from 'react-icons/'; 
import {Button} from '../../globalStyles'
import {Nav, NavBarContainer, NavLogo, NavIcon, Icon, MobileIcon, 
    NavMenu, NavItem, NavLinks, NavItemBtn, NavBtnLink, ImgWrapper, Img } from './navBar.elements'


const NavBar = ({img,alt,start}) => {
    const [click, setClick]  = useState(false); 
    const [button, setButton] = useState(true);

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener('resize', showButton);

    return (
        <>
        <IconContext.Provider value={{color: '#fff'}}>
          <Nav>
              <NavBarContainer>
              <NavLogo to="/"  onClick={closeMobileMenu}>
              <ImgWrapper start={start}>
                        <Img src={img} alt={alt}/>
                        </ImgWrapper>
                      
                        <NavIcon />
                  <NavLinks to='/Home' onClick={closeMobileMenu}>
                  CRADLE TO CRAYONS CRECHE
                      </NavLinks>
                  
              </NavLogo>
              <MobileIcon onClick={handleClick}>
                  {click ? <FaTimes /> : <FaBars />} 
              </MobileIcon>
              <NavMenu onClick={handleClick} click={click}>
                  <NavItem>
                      <NavLinks to='/Home' onClick={closeMobileMenu}>
                          Home
                      </NavLinks>
                  </NavItem>
                  <NavItem>
                      <NavLinks to='/aboutUs' onClick={closeMobileMenu}>
                          About Us
                      </NavLinks>
                  </NavItem>
           
                  <NavItem>
                      <NavLinks to='/admissions' onClick={closeMobileMenu}>
                          Admissions
                      </NavLinks>
                  </NavItem>
             
                  <NavItem>
                      <NavLinks to='/facilities' onClick={closeMobileMenu}>
                          Facilities
                      </NavLinks>
                  </NavItem>
          
                  <NavItem>
                      <NavLinks to='/publications' onClick={closeMobileMenu}>
                          Publications
                      </NavLinks>
                  </NavItem>
              
                  <NavItem>
                      <NavLinks to='/contactUs' onClick={closeMobileMenu}>
                          Contact
                      </NavLinks>
                  </NavItem>
                  <NavItemBtn>
                      {button ? (<NavBtnLink to='/admissions'>
                           <Button primary>REGISTER</Button>
                           </NavBtnLink>):(<NavBtnLink to='/register'>
                               <Button  fontBig primary></Button></NavBtnLink>)}
                  </NavItemBtn>
              </NavMenu>
              </NavBarContainer>
            </Nav>
            </IconContext.Provider>
        </>
    )
}

export default NavBar
