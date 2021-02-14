import React, { useState } from 'react'
import { render } from 'react-dom'

import { generateDataURIQRCode } from './qrcode'

import './index.html'
import './style.scss'

const App: React.FC = () =>{
    const [ dataURI, setDataURI ] = useState('')
    const onInput = async (e: React.FormEvent<HTMLInputElement>) => {
        const text = e.currentTarget.value
        const code = text ? await generateDataURIQRCode(e.currentTarget.value) : ''
        setDataURI(code)
    }

    return <div>
        <input onInput={ onInput }></input>
        <img src={ dataURI }></img>
    </div>
}

render(<App />, document.getElementById('app'))
