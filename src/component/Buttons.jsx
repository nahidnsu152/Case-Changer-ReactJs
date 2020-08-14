import React from 'react'

const Buttons = () => (

    <div className="container">
        <div className="row">
            <div className="col-md-12 btn-group">
                <button className = "btn" onClick = "" > Sentence Case</button>
                <button className = "btn" onClick = {this.toUpperCase} > UPPER CASE</button> 
                <button className = "btn" onClick = "" > lower case</button> 
                <button className = "btn" onClick = ""> Capitalized Case </button> 
                <button className = "btn" onClick = "" > Title Case</button> 
                <button className = "btn" onClick = ""> aLtErNaTiNg CaSe</button> 
                <button className = "btn" onClick = ""> Swap Case</button> 
            </div>
        </div>
    </div>

)

export default Buttons