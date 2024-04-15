import { Component } from 'react';
import './App.css';
import QuoteMachine from './components/quoteMachine';
import Button from "./components/button";
import TwitterButton from './components/twitterButton';
import { FaQuoteLeft } from 'react-icons/fa'

class App extends Component {
  constructor(props){
    super(props);

    this.state = {
      quotes: [],
      selectedQuoteIndex: null,
      randomColour: "#234512",
     
    }
    this.assignQuoteIndex = this.assignQuoteIndex.bind(this);
    this.generateQuoteIndex = this.generateQuoteIndex.bind(this);

    this.assignRandomColour = this.assignRandomColour.bind(this);
    this.generateRandomColour = this.generateRandomColour.bind(this);
    
  }

  componentDidMount(){
    fetch("https://gist.githubusercontent.com/natebass/b0a548425a73bdf8ea5c618149fe1fce/raw/f4231cd5961f026264bb6bb3a6c41671b044f1f4/quotes.json")
    .then(data => data.json())
    .then(quotes => this.setState({quotes}, this.assignQuoteIndex));

  }

  get selectedQuote() {
    if(!this.state.quotes.length || !Number.isInteger(this.state.selectedQuoteIndex)) {
      return undefined;
    }
    return this.state.quotes[this.state.selectedQuoteIndex];
  }

  get randomColour () {
    if(this.state.randomColour === "") {
      return undefined;
    }
    return this.state.randomColour; 
  }

  generateRandomColour() {
    const red = Math.floor(Math.random() * 128);
    const green = Math.floor(Math.random() * 128);
    const blue = Math.floor(Math.random() * 128); 
    if (red === 0 || green === 0 || blue === 0){
      return undefined;
    }
    return `rgb(${red}, ${green}, ${blue})`
  }

  generateQuoteIndex(){
    if(!this.state.quotes.length){
      return undefined;
    }
    return Math.floor(Math.random() * (this.state.quotes.length))
  }

  assignQuoteIndex() {
    this.setState({selectedQuoteIndex: this.generateQuoteIndex()})
  }

  assignRandomColour() {
    this.setState({randomColour: this.generateRandomColour()})
  }
  
  render() {
    return (
      <div className='background' style={{backgroundColor: this.randomColour }}>
        <div className="App" id="quote-box">
          <div className='quote-content' style={{ color: this.randomColour }}>
            <FaQuoteLeft size={30} style={{marginRight: "10px"}}/>
            <QuoteMachine 
            selectQuote={this.selectedQuote} 
            assignQuoteIndex={this.assignQuoteIndex} />

            <div className='buttons'>
              < TwitterButton 
              style={this.randomColour} 
              selectQuote={this.selectedQuote}
              assignQuoteIndex={this.assignQuoteIndex} />

              < Button 
                style={this.randomColour} 
                buttonDisplayName="Next Quote" 
                clickHandler={() => {
                  this.assignQuoteIndex();
                  this.assignRandomColour()
                }} />
            </div> 

          </div> 
        </div>
      </div>
    
    );
  }
}
export default App;