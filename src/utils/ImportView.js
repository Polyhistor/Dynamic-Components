import { lazy } from "react"

export const ImportView = component => {
    return lazy(()=> import(`../components/${component}`).catch(()=>{
        import(`../components/DefaultView`)
    }))
}