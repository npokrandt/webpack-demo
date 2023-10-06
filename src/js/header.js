import { headerEl } from "./elements"

export function changeHeaderColor(){
    const currBgColor = headerEl.style.color
    if (currBgColor === 'black'){
        headerEl.style.color = 'green'
    } else {
        headerEl.style.color = 'black'
    }

}