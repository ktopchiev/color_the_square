import React from 'react'

const SetColor = ({ color, setColor }) => {
    return (
        <form className='setColorForm'>
            <label htmlFor='setColor'>
                Set Color
            </label>
            <input
                id='setColor'
                type='text'
                placeholder='Add color name'
                value={color}
                onChange={(e) => setColor(e.target.value)}
            />
        </form>
    )
}

export default SetColor