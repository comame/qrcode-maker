import qrcode from 'qrcode'

export async function generateDataURIQRCode(message: string): Promise<string> {
    return new Promise((resolve, reject) => {
        qrcode.toDataURL(message, (err, url) => {
            if (err) {
                reject(err)
                return
            }
            resolve(url)
        })
    })
}
