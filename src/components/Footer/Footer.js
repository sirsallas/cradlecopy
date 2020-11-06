import React from 'react'
import { FooterContainer, FooterSubHeading, FooterSubscription, FooterSubText, Form, FormInput, 
FooterLinksContainer, FooterLinksItems, FooterLinkWrapper, FooterLinkTitle, 
FooterLink, SocialIcon, SocialIconLink, SocialIcons, SocialLogo, SocialMedia, SocialMediaWrap, WebsiteRights} from './Footer.elements'
import {Button} from '../../globalStyles'; 
import { FaFacebook, FaInstagram, FaYoutube } from 'react-icons/fa';

const Footer = () => {
    return (
        <FooterContainer>
            <FooterSubscription>
                <FooterSubHeading>
                Our vision is to become the preferred Early Childhood Educational Facility in the community and beyond
                </FooterSubHeading>
                <FooterSubText>
                You can inquire at any time 
                </FooterSubText>
                <Form>
                    <FormInput name="email" type="email" placeholder="Your Email"/> 
                    <Button fontBig>Subscribe</Button>

                    
                </Form>
            </FooterSubscription>
            <FooterLinksContainer>
                <FooterLinkWrapper>
                    <FooterLinksItems>
                     <FooterLinkTitle> About Us</FooterLinkTitle>   
                     <FooterLink to='/visionPage'>Our Mission and Vision</FooterLink>
                     <FooterLink to='/visionPage'>Our Admission Process</FooterLink>
                     <FooterLink to='/'>Our Nanny's</FooterLink>
                     <FooterLink to='/'>Key Management</FooterLink>
                    </FooterLinksItems>

                    <FooterLinksItems>
                     <FooterLinkTitle> Admissions</FooterLinkTitle>   
                     <FooterLink to='/admissionsPage'>Our Admission Process</FooterLink>
                     <FooterLink to='/'>How it works</FooterLink>
                     <FooterLink to='/'>How it works</FooterLink>
                     <FooterLink to='/'>How it works</FooterLink>
                     <FooterLink to='/'>How it works</FooterLink>
                    </FooterLinksItems>
                
                    <FooterLinksItems>
                     <FooterLinkTitle> Publications</FooterLinkTitle>   
                     <FooterLink to='/publicationPage'>Yearly Calendar</FooterLink>
                     <FooterLink to='/'>How it works</FooterLink>
                     <FooterLink to='/'>How it works</FooterLink>
                     <FooterLink to='/'>How it works</FooterLink>
                     <FooterLink to='/'>How it works</FooterLink>
                    </FooterLinksItems>

                    <FooterLinksItems>
                     <FooterLinkTitle> Facilities</FooterLinkTitle>   
                     <FooterLink to='/register'>Baby Room</FooterLink>
                     <FooterLink to='/'>Toddler Room</FooterLink>
                     <FooterLink to='/'>How it works</FooterLink>
                     <FooterLink to='/'>How it works</FooterLink>
                     <FooterLink to='/'>How it works</FooterLink>
                    </FooterLinksItems>
                </FooterLinkWrapper>
            </FooterLinksContainer>
            <SocialMedia>
                <SocialMediaWrap>
                    <SocialLogo>
                        <SocialIcon/>
                        CRADLE TO CRAYONS CRECHE
                    </SocialLogo>
                    <WebsiteRights>
                    Opintan Avenue,
                    Spintex Road, Ghana, +233 55 007 9734
                    </WebsiteRights>
                    <SocialIcons>
                        <SocialIconLink href='/' target="_blank" aria-label="Facebook">
                        <FaFacebook/>
                        </SocialIconLink>
                        <SocialIconLink href='/' target="_blank" aria-label="Instagram">
                        <FaInstagram/>
                        </SocialIconLink>
                        <SocialIconLink href='/' target="_blank" aria-label="//www.youtube.com" rel="noopener noreferrer"> 
                        <FaYoutube/>
                        </SocialIconLink>
                    </SocialIcons>
                </SocialMediaWrap>
            </SocialMedia>
        </FooterContainer>
    )
}

export default Footer
