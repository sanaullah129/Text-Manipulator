import React, {useState} from 'react'

export default function About() {

    const [myStyle, setMyStyle] = useState({
        color: 'black',
        backgroundColor: 'white'
    })
    const [btntext, setBtnText] = useState("Enable Dark Mode")
    
    const toggleStyle = ()=>{
        if(myStyle.color === 'black'){
            setMyStyle({ 
                color: 'white',
                backgroundColor: 'black',
                border: '1px solid white'
                
            })
            setBtnText("Enable Light Mode")
        }
        else{
            setMyStyle({ 
                color: 'black',
                backgroundColor: 'white'
            })
            setBtnText("Enable Dark Mode");
        }
    }
    
    return (
        <div className="container" style={myStyle}>
            <h1 className="my-3">Instructions</h1>
            <div className="accordion" id="accordionExample">
                <div className="accordion-item">
                    <h2 className="accordion-header" id="headingOne">
                    <button className="accordion-button" type="button" style={myStyle} data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                        How to use?
                    </button>
                    </h2>
                    <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                    <div className="accordion-body" style={myStyle}>
                        <strong>We aim to provide you a text manipulator</strong>
                        <p>You can type any word in the textbox and click on any of the button to manipulate yoour text however you want. You can conver the text to Upper Case or Lower Case or clear the text or copy the text to clipboard and also remove the extra spaces from your text.</p>
                        <p><strong>Have fun</strong></p>
                    </div>
                    </div>
                </div>
            </div>
            <div className="container my-3">
                <button onClick={toggleStyle} type="button" className="btn btn-primary">{btntext}</button>
            </div>
        </div>
    )
}
