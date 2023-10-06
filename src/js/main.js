import { boxEl, headerEl, boxBtn, headerBtn } from "./elements"
import { changeBoxColor } from "./box"
import { changeHeaderColor } from "./header"

boxEl.style.backgroundColor = 'yellow'
headerEl.style.color = 'black'
//event listeners
boxBtn.addEventListener('click', changeBoxColor)
headerBtn.addEventListener('click', changeHeaderColor)