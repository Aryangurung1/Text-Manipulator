import React, { useState } from 'react'

export default function Textform(props) {
    const handleUpClick = () => {
        // console.log("you change to upperCase " + text)
        let newText = text.toUpperCase();
        console.log(newText);
        setText(newText);
        props.showAlert("Text Converted into UpperCase", "success");
    }
    const handledownClick = () => {
        // console.log("you change to upperCase " + text)
        let newText = text.toLowerCase();
        console.log(newText);
        setText(newText);
        props.showAlert("Text Converted into LowerCase", "success");
    }
    const handleClearClick = () => {
        // console.log("you change to upperCase " + text)
        let newText = "";
        console.log(newText);
        setText(newText);
        props.showAlert("Text All clear", "success");
    }
    const handleCeaserClick = () => {
        // console.log("you change to upperCase " + text)
        let newText = text.split('').map((str) => cipher(str)).join("");
        console.log(newText);
        setText(newText);
        props.showAlert("Text Converted into Ceaser Cipher", "success");
    }
    const value = (code) => (code <= 90 ? 65 : 97);
    const mod = (n, m) => ((n % m) + m) % m;
    const cipher = (str) => {
        const code = str.charCodeAt();
        if ((code >= 65 && code <= 90) || (code >= 97 && code <= 122)) {
            return String.fromCharCode(mod(code + 3 - value(code), 26) + value(code));
        }
        return str;
    }
    const handledecryptionClick = () => {
        // console.log("you change to upperCase " + text)
        let newText = text.split('').map((str) => decryption(str)).join("");
        console.log(newText);
        setText(newText);
        props.showAlert("Text decryption from Ceaser Cipher", "success");
    }
    const decryption = (str) => {
        const code = str.charCodeAt();
        if ((code >= 65 && code <= 90) || (code >= 97 && code <= 122)) {
            return String.fromCharCode(mod(code - 3 - value(code), 26) + value(code));
        }
        return str;
    }
    const copyText = () => {
        let text = document.getElementById('mybox');
        text.select();
        navigator.clipboard.writeText(text.value);
        props.showAlert("All Text copied", "success");
    }
    const clearSpace = () => {
        let extraText = text.split(/[ ]+/);
        setText(extraText.join(" "));
        props.showAlert("Extra spaces of Text are removed", "success");
    }
    const [text, setText] = useState("");
    const handleOnChange = (event) => {
        setText(event.target.value)
    }
    const arr = text.split(" ");
    const filterText = arr.filter((word) => {
        return word.trim() !== '';
    })
    const colorTheme = props.mode==='light'? (props.theme==='light'? 'black': props.theme==='warning'? 'black': props.theme==='info'? 'dark': props.theme==='primary'? 'white': props.theme==='secondary'? 'white': props.theme==='success'? 'white': props.theme==='danger'? 'black': 'white'): 'white';
    const bgColor = props.mode==='light'? (props.theme==='light'? 'white': props.theme==='warning'? 'yellow': props.theme==='info'? 'rgb(13, 202, 240)': props.theme==='primary'? 'blue': props.theme==='secondary'? 'grey': props.theme==='success'? 'green': props.theme==='danger'? 'red': 'white'): '#0c1b2c';
    return (
        <>
            <div className='container' style={{
                // color: props.mode==='light'? 'black' : 'white'
                color: colorTheme
            }}>
                <h1>{props.heading}</h1>
                <div className="mb-3">
                    <textarea className="form-control" style={{
                        backgroundColor: bgColor,
                        color: colorTheme
                    }} value={text} onChange={handleOnChange} id="mybox" rows="8"></textarea>
                    <button className={`btn btn-${props.theme} my-2 border-1 border-${props.border}`} onClick={handleUpClick}>Convert to upperCase</button>
                    <button className={`btn btn-${props.theme} mx-3 my-2 border-1 border-${props.border}`} onClick={handledownClick}>Convert to lowerCase</button>
                    <button className={`btn btn-${props.theme} my-2 border-1 border-${props.border}`} onClick={handleClearClick}>Clear Text</button>
                    <button className={`btn btn-${props.theme} my-2 mx-3 border-1 border-${props.border}`} onClick={handleCeaserClick}>Ceaser Cipher</button>
                    <button className={`btn btn-${props.theme} my-2 border-1 border-${props.border}`} onClick={handledecryptionClick}>Ceaser Descryption</button>
                    <button className={`btn btn-${props.theme} my-2 mx-3 border-${props.border}`} onClick={copyText}>Copy Text</button>
                    <button className={`btn btn-${props.theme} my-2 border-${props.border}`} onClick={clearSpace}>Clear Extra Space</button>
                </div>
            </div>
            <div className="container my-5" style={{
                // color: props.mode==='light'? 'black' : 'white'
                color: colorTheme
            }}>
                <h2>Text summary</h2>
                <p>{filterText.length} words and {text.length} characters</p>
                <p>{0.008 * filterText.length} Minutes to read</p>
                <h2>Preview</h2>
                <p>{text.length >0? text: "Enter something in texbox to preview here"}</p>
            </div>
        </>
    )
}
