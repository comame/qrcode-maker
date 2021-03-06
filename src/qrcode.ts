import qrcode from 'qrcode'

export async function generateDataURIQRCode(message: string, color: {
    main: string,
    background: string
}): Promise<string> {
    return new Promise((resolve) => {
        qrcode.toDataURL(message, {
            color: {
                dark: color.main + 'ff',
                light: color.background + 'ff'
            },
            margin: 2
        }, (err, url) => {
            if (err) {
                console.log(err)
                resolve('')
            }
            resolve(url)
        })
    })
}
