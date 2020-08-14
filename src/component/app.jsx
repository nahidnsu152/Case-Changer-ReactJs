import React,{Component} from 'react'
import TextArea from './textarea'
import Buttons from './Buttons'

function SentenceCase(str){

    }

function CapitalizedCase(str) {
    str = str.toLowerCase().split(' ');
    for (var i = 0; i < str.length; i++) {
      str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1); 
    }
    return str.join(' ');
}

function AlternateCase(str) {
    var chars = str.toLowerCase().split("");
    for (var i = 0; i < chars.length; i += 2) {
      chars[i] = chars[i].toUpperCase();
    }
    return chars.join("");
  }

class App extends Component{



    state = {
        text: " "
      };
    
      handleText = event => {
        this.setState({ text: event.target.value });
      };

      
      toSentenceCase = event => {
        this.setState({ text: SentenceCase(this.state.text) });
      };

    
      toUpperCase = event => {
        this.setState({ text: this.state.text.toUpperCase() });
      };

      toLowerCase = event => {
        this.setState({ text: this.state.text.toLowerCase() });
      };

      toCapitalizedCase = event => {
        this.setState({ text: CapitalizedCase(this.state.text) });
      };


      toAlternateCase = event => {
        this.setState({ text: AlternateCase(this.state.text) });
      };

    render(){
        return (
            <div className="App">
                <section>
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12 text-area">
                                 <h1> Accidentally left the caps lock on and typed something, but can't be bothered to start again and retype it all? </h1>
                                <p> Simply enter your text and choose the case you want to convert it to. </p> 
                                <textarea value={this.state.text} onChange={this.handleText} cols="80" rows="12" placeholder ="Type or paste your content here"/>  
                            </div>
                        </div>
                    </div>
                </section>

                <section>
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12 btn-group">
                                {/* <button className = "btn" onClick = {this.toSentenceCase} > Sentence Case</button> */}
                                <button className = "btn" onClick = {this.toUpperCase} > UPPER CASE</button> 
                                <button className = "btn" onClick = {this.toLowerCase} > lower case</button> 
                                <button className = "btn" onClick = {this.toCapitalizedCase}> Capitalized Case </button> 
                                {/* <button className = "btn" onClick = {this.toTitleCase}> Title Case</button>  */}
                                <button className = "btn" onClick = {this.toAlternateCase}> aLtErNaTiNg CaSe</button> 
                                {/* <button className = "btn" onClick = ""> Swap Case</button>  */}
                            </div>
                        </div>
                    </div>
                </section>
            </div>

        )
    }
}

export default App