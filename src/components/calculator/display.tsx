import React from 'react'
import '../../css/display.css'

interface DisplayProps {
    value: string
}


function Display({value}: DisplayProps) {

return (
    <input type="text" value={value} className='display' readOnly/>
)

}
export default Display