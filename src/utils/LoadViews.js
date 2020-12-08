import React ,{ useState } from "react"
import {ImportView} from "./ImportView"
import shortid from 'shortid';

export const LoadViews = (componentsToDisplay) => {
    const [views, setViews] = useState([])

    const componentPromises = componentsToDisplay.map(async component => {
        const View = await ImportView(component)
        return <View key={shortid.generate()}></View>
    })

    Promise.all(componentPromises).then(setViews)

    return views
}