import React, {useContext} from 'react';
import { FamilyContext } from '../global/family';
import List from '../components/Table/Table'
import Button from '../components/Button/Button'
import uuid from 'react-uuid';




const ShippingScreen = () => {
    const {data} = useContext(FamilyContext)
    const names = data.map((person) => {
        return person.name
    })
    console.log(data)
   return (
       <>
        <List title="Family Members" labels={names}/>
       </>
   )
}

export default ShippingScreen