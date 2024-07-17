import React from 'react'

const SquareBox = ({ color }) => {
    return (
        <div className='square' style={{ backgroundColor: color }}>
            <p>{ color ? color : "Empty Value" }</p>
        </div>
    )
}

export default SquareBox