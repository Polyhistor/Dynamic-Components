import React from "react"
import { LoadViews } from "./utils/LoadViews"


export const App = ({componentsToDisplay}) => {
    return (
        <React.Suspense fallback="Loading views...">
             <div className="container">{LoadViews(componentsToDisplay)}</div>
        </React.Suspense>
    )
}