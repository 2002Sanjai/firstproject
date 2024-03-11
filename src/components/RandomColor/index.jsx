import { useEffect, useState } from "react"




export default function RandomColorGenerator() {

    const [typeOfColor, setTypeColor] = useState("hex")
    const [color, setColor] = useState("#000");

    function randomColorUtility(length) {
        return Math.floor(Math.random() * length)
    }

    function handleRandomHexColor() {
        const hex = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0, "A", "B", "C", "D", "E", "F"]
        let hexColor = "#";
        for (let i = 0; i < 6; i++) {
            hexColor += hex[randomColorUtility(hex.length)]
        }
        console.log(hexColor);
        setColor(hexColor);
    }
    function handleRandomRGBColor() {
        const r =randomColorUtility(256);
        const g = randomColorUtility(256)
        const b = randomColorUtility(256)
        setColor(`rgb(${r},${g},${b})`)
    }

    
    useEffect(()=>{
        if(typeOfColor === 'rgb') handleRandomRGBColor();
        else handleRandomHexColor()
        // eslint-disable-next-line 
    },[typeOfColor])

    return <div style={{
        width: "100vw",
        height: "100vh",
        background: color,
    }}>
        <button onClick={() => setTypeColor('hex')}>Create Hex Color</button>
        <button onClick={() => setTypeColor('rgb')}>Create RGB Color</button>
        <button onClick={typeOfColor === 'hex' ? handleRandomHexColor : handleRandomRGBColor}>Generate Random Color</button>
        <div style={{
            display:"flex",
            justifyContent:"center",
            alignItems:"center",
            color:"#fff",
            fontSize:"60px",
            marginTop:"50px",
            flexDirection:"column",
            gap:"20px"
        }}>

            <h3>{typeOfColor === 'rgb'?'RGB Color ':'HEX Color'}</h3>
            <h1>{color}</h1>
        </div>
    </div>
}