import React, {useContext} from 'react';
import { FamilyContext } from '../global/family';


const Cell = () => {
    const {data} = useContext(FamilyContext)
    console.log(data)
   return (
       <div>hi</div>
   )
}

export default Cell