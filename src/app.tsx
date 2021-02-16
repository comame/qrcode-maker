import React, { useRef, useState } from 'react'
import { render } from 'react-dom'

import { generateDataURIQRCode } from './qrcode'

import './index.html'
import './style.scss'

const App: React.FC = () =>{
    const [ dataURI, setDataURI ] = useState('')
    const onChange = async () => {
        const text = messageRef.current?.value ?? ''
        const code = await generateDataURIQRCode(text, {
            background: backgroundColorRef.current?.value ?? '#000000',
            main: mainColorRef.current?.value ?? '#ffffff'
        })
        setDataURI(code)
    }

    const backgroundColorRef = useRef<HTMLInputElement>(null)
    const mainColorRef = useRef<HTMLInputElement>(null)
    const messageRef = useRef<HTMLInputElement>(null)

    return <div>
        <label>
            URL
            <input onInput={ onChange } ref={ messageRef }></input>
        </label>
        <label>
            QR コードの色
            <input type='color' onInput={ onChange } ref={ mainColorRef }></input>
        </label>
        <label>
            QR コードの背景色
            <input type='color' onInput={ onChange } ref={ backgroundColorRef } defaultValue='#ffffff'></input>
        </label>
        <a download={ dataURI } href={ dataURI }><img src={ dataURI }></img></a>
    </div>
}

render(<App />, document.getElementById('app'))
