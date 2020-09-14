import React, {useContext} from 'react';
import { FamilyContext } from '../global/family';
import List from '../components/List'


const Cell = () => {
    const {data} = useContext(FamilyContext)
    console.log(data)
   return (
       <List/>
   )
}

export default Cell