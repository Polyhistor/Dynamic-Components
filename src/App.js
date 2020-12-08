import React ,{ useEffect} from "react"
import { LoadViews } from "./utils/LoadViews"


export const App = ({componentsToDisplay}) => {
    let views = LoadViews(componentsToDisplay)

    // useEffect(()=> {
    //    views = LoadViews(componentsToDisplay)
    // },[componentsToDisplay])

    console.log(views)

    return (
        <React.Suspense>
             <div className="container">{views}</div>
        </React.Suspense>
    )
}