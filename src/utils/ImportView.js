import { lazy } from "react"

export const ImportView = component => {
    lazy(()=> import(`../components/${component}`).catch(()=>{
        import(`../components/DefaultView`)
    }))
}