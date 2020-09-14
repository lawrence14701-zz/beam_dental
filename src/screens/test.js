import React, {useContext} from 'react';
import { FamilyContext } from '../global/family';
import Testting from '../components/IconAndText/IconAndText'


const Cell = () => {
    const {data} = useContext(FamilyContext)
    console.log(data)
   return (
       <Testting text='hi' color='blue'/>
   )
}

export default Cell