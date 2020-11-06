import React from 'react'
import {homeObjOne, homeObjTwo, homeObjThree} from './Data'
import {InfoSection} from '../../components'

import {navBar} from '../../components'
import {Pricing} from '../../components/'
const Home = () => {
    return (
        <>
            
            <InfoSection {...homeObjOne}/>
            <InfoSection {...homeObjTwo}/>
            <InfoSection {...homeObjThree}/>
            <Pricing/>
        </>
    )
}

export default Home
