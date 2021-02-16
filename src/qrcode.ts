import qrcode from 'qrcode'

export async function generateDataURIQRCode(message: string, color: {
    main: string,
    background: string
}): Promise<string> {
    return new Promise((resolve, reject) => {
        qrcode.toDataURL(message, {
            color: {
                dark: color.background + 'ff',
                light: color.main + 'ff'
            },
            margin: 2
        }, (err, url) => {
            if (err) {
                reject(err)
                return
            }
            resolve(url)
        })
    })
}
