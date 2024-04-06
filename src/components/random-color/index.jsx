import { useEffect, useState } from "react"

export default function RandomColor() {

    const[colorType, setColorType] = useState('hex');
    const[color, setColor] = useState('#000000');

    let randomColorUtility = (length) => {
        return Math.floor(Math.random() * length);
    }

    let handleHexColor = () => {
        const hex = [0,1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F'];
        let hexColor = '#';
        for(let i=0; i<6; i++) {
            hexColor += hex[randomColorUtility(hex.length)]
        }
        setColor(hexColor);
    } 

    let handleRgbColor = () => {
        const r = randomColorUtility(256);
        const g = randomColorUtility(256);
        const b = randomColorUtility(256);
        // setColor(`rgb${r},${g},${b}`);
        setColor(`rgb(${r},${g},${b})`)
    }

    useEffect(() => {
        colorType === 'hex' ? handleHexColor() : handleRgbColor()
    }, colorType)

    return <div style={{
        width: "100vw",
        height: "100vh",
        background: color
    }}>
        <button onClick={() => setColorType('hex')}>Create HEX color</button>
        <button onClick={() => setColorType('rgb')}>Create RGB color</button>
        <button onClick={colorType === 'hex'? handleHexColor : handleRgbColor}>Generate random color</button>
        <div style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            color: '#fff',
            fontSize: '60px',
            marginTop: '50px',
            flexDirection: 'column',
            gap: '20px',            
        }}>
            <h1>{color}</h1>
            <h3>{colorType}</h3>
        </div>
    </div>
}