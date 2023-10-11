import { headerEl, boxBtn, headerBtn } from "./elements"
import { changeBoxColor } from "./box"
import { changeHeaderColor } from "./header"

import '../css/styles.css'

headerEl.style.color = 'black'

boxBtn.addEventListener('click', changeBoxColor)
headerBtn.addEventListener('click', changeHeaderColor)

//register service worker
if ('serviceWorker' in navigator){
    navigator.serviceWorker.register('/sw.js')
    .then(() => console.log('sw registered!'))
    .catch(err => console.log('error with sw', err))
} else {
    console.log('no bueno')
}