import styled from 'styled-components'
import {Container} from '../../globalStyles'
import {FaMagento} from 'react-icons/fa'
import {Link} from 'react-router-dom'

export const Nav = styled.nav`
background: #f7874b;
height: 80px;
display: flex;
justify-content: center;
align-items: center;
font-size: 1.2rem;
position: sticky;
top: 0;
z-index:999; 
`
export const NavBarContainer = styled(Container)`
display: flex;
justify-content: space-between;
height: 80px;

${Container}

`;

export const NavLogo = styled(Link)`
color: #fff;
justify-self: flex-start;
cursor: pointer;
text-decoration: none; 
font-size: 2rem;
display: flex;
align-items: center;

`

export const NavIcon = styled(FaMagento)`
margin-right: 0.5rem;
`
export const Icon = styled.img`
flex: none;
  transition: fill 0.25s;
  width: 48px;
  height: 48px;

  ${Link}:hover & {
    fill: rebeccapurple;
  }
`

export const NavIcon1 = styled.img`
padding-right: 0;
border: 0;
max-width: 100%;
vertical-align: middle;
display: inline-block;
max-height: 500px;
`
export const MobileIcon = styled.div`
display: none;

@media screen and (max-width: 960px){
    display: block;
    position: absolute;
    top: 0; 
    right: 0; 
    transform: translate(-100%, 60%);
    font-size: 1.8rem;
    cursor: pointer; 

}
`

export const NavMenu = styled.ul`

display:flex;
align-items: center;
list-style:none;
text-align: center;

@media screen and (max-width: 960px){
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 90vh;
    position: absolute;
    top: 80px;
    left: ${({click})=> (click ? 0 : '-100%')} ;
    opacity: 1;
    transition: all 0.5s ease; 
    background: #f7874b;
}  
`
export const NavItem = styled.li`

height:80px;
border-bottom: 2px solid transparent;

&:hover {
    border-bottom: 2px solid #4b59f7;
}
@media screen and (mac-width: 960px){
    width: 100%;
    
    &:hover{
        border: none;
    }
}
`
export const NavLinks = styled(Link)`
color: #000000;
display: flex;
align-items: center; 
text-decoration: none;
padding: 0.5rem 1rem;
height: 100%;

@media screen and (max-width: 960px){
    text-align: center;
    padding: 2rem;
    display: table;
    width: 100%;
    
    &:hover{
        color: #4b59f7;
        transition: all 0.3s ease;
    }
}

`

export const NavItemBtn = styled.li`
@media screen and (max-width: 960px){
    display: flex; 
    justify-content: center; 
    align-items: center; 
    width: 100%;
    height:120px;
    text: 'Register';
}
`
export const NavBtnLink = styled(Link)`
    display: flex;
    justify-content: center; 
    align-items: center;
    text-decoration: none; 
    padding: 8px 16px;
    height: 100%;
    width: 100%;
    border: none ;
    outline: none;

`

export const ImgWrapper = styled.div`
max-width: 555px;
display: flex;
justify-content: ${({start})=> (start ? 'flex-start' : 'flex-end')};

`
export const Img  = styled.img`
padding-right: 0;
border: 0;
max-width: 100%;
vertical-align: middle;
display: inline-block;
max-height: 500px;
`
