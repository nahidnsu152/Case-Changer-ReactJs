import React,{Component} from 'react';

const TextArea =() => (
    
    <div className="container">
        <div className="row">
            <div className="col-md-12 text-area">
                <h1> Accidentally left the caps lock on and typed something, but can't be bothered to start again and retype it all? </h1>
                <p> Simply enter your text and choose the case you want to convert it to. </p> 
                <textarea value={this.state.text} onChange={this.handleText} cols="80" rows="12" placeholder = "Type or paste your content here" />  
            </div>
        </div>
    </div>
)

export default TextArea