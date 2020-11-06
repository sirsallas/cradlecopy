import React from 'react';
import { Button } from '../../globalStyles';
import { AiFillThunderbolt } from 'react-icons/ai';
import { GiCrystalBars } from 'react-icons/gi';
import { GiCutDiamond, GiRock } from 'react-icons/gi';
import { GiFloatingCrystal } from 'react-icons/gi';
import { IconContext } from 'react-icons/lib';
import {
  PricingSection,
  PricingWrapper,
  PricingHeading,
  PricingContainer,
  PricingCard,
  PricingCardInfo,
  PricingCardIcon,
  PricingCardPlan,
  PricingCardCost,
  PricingCardLength,
  PricingCardFeatures,
  PricingCardFeature
} from './Pricing.elements';

function Pricing() {
  return (
    <IconContext.Provider value={{ color: '#a9b3c1', size: 64 }}>
      <PricingSection>
        <PricingWrapper>
          <PricingHeading>ADMISSION</PricingHeading>
          <PricingContainer>
            <PricingCard to='/sign-up'>
              <PricingCardInfo>
                <PricingCardIcon>
                  <GiRock />
                </PricingCardIcon>
                <PricingCardPlan>Babies</PricingCardPlan>
                <PricingCardCost>GHC 250.00</PricingCardCost>
                <PricingCardLength>per term</PricingCardLength>
                <PricingCardFeatures>
                  <PricingCardFeature>Three to Nine Months</PricingCardFeature>
                  <PricingCardFeature></PricingCardFeature>
                  <PricingCardFeature></PricingCardFeature>
                </PricingCardFeatures>
                <Button primary>Learn More</Button>
              </PricingCardInfo>
            </PricingCard>
            <PricingCard to='/sign-up'>
              <PricingCardInfo>
                <PricingCardIcon>
                  <GiCrystalBars />
                </PricingCardIcon>
                <PricingCardPlan>Toddlers</PricingCardPlan>
                <PricingCardCost>GHC 250.00</PricingCardCost>
                <PricingCardLength>per term</PricingCardLength>
                <PricingCardFeatures>
                  <PricingCardFeature>Three to Nine Months</PricingCardFeature>
                  <PricingCardFeature> </PricingCardFeature>
                  <PricingCardFeature> </PricingCardFeature>
                </PricingCardFeatures>
                <Button primary>Learn More</Button>
              </PricingCardInfo>
            </PricingCard>
            <PricingCard to='/sign-up'>
              <PricingCardInfo>
                <PricingCardIcon>
                  <GiCutDiamond />
                </PricingCardIcon>
                <PricingCardPlan>Pre-School</PricingCardPlan>
                <PricingCardCost>GHC 250.00</PricingCardCost>
                <PricingCardLength>per term</PricingCardLength>
                <PricingCardFeatures>
                  <PricingCardFeature>Three to Five Months</PricingCardFeature>
                  <PricingCardFeature> </PricingCardFeature>
                  <PricingCardFeature> </PricingCardFeature>
                </PricingCardFeatures>
                <Button primary>Learn More</Button>
              </PricingCardInfo>
            </PricingCard>
          </PricingContainer>
        </PricingWrapper>
      </PricingSection>
    </IconContext.Provider>
  );
}
export default Pricing;