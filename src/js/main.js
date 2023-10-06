import { headerEl, boxBtn, headerBtn } from "./elements"
import { changeBoxColor } from "./box"
import { changeHeaderColor } from "./header"

import '../css/styles.css'

headerEl.style.color = 'black'

boxBtn.addEventListener('click', changeBoxColor)
headerBtn.addEventListener('click', changeHeaderColor)