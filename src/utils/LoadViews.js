import React ,{ useEffect, useState } from "react"
import {ImportView} from "./ImportView"
import shortid from 'shortid';

export const LoadViews = (componentsToDisplay) =>{
    const [views, setViews] = useState([])

    useEffect(()=> {
        const componentPromises = componentsToDisplay && componentsToDisplay.map(async component => {
            const View = await ImportView(component)
            return <View key={shortid.generate()}></View>
        })
    
        componentsToDisplay && Promise.all(componentPromises).then(setViews)

    }, [componentsToDisplay])

    return views
}