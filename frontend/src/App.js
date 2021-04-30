import logo from './logo.svg';
import './App.css';
import React, {Component} from 'react';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import Button from "@material-ui/core/Button";
import GifComparison from "./components/GifComparison"

class App extends React.Component {
        
    constructor(props) {
        super(props);
        this.state = {
            name: "React",
            selectedOption: null
        };
        this.onValueChange = this.onValueChange.bind(this);
        this.formSubmit = this.formSubmit.bind(this);
    }

    // benje.roy12@gmail.com
    titles = ["https://www.youtube.com/embed/S7xdgMoFWdk", "https://www.youtube.com/embed/eiqaqrHPixw",
    "https://www.youtube.com/embed/BjzDJhZDw3M", "https://www.youtube.com/embed/C_fEIVwjrew",
    "https://www.youtube.com/embed/EQfO7p05iVU", "https://www.youtube.com/embed/v-43wPyblUA"]
    
    // aleeha.hashim11@gmail.com
    titles2 = ["https://www.youtube.com/embed/ZwULdrDijbI", "https://www.youtube.com/embed/Yn2tHcZEnF0",
    "https://www.youtube.com/embed/J6Yy9eFTPak", "https://www.youtube.com/embed/gGrRMGr90qw",
    "https://www.youtube.com/embed/EQfO7p05iVU", "https://www.youtube.com/embed/pFnQYgCPJyo"]
      
    onValueChange(event) {
        this.setState({
        selectedOption: event.target.value
        });
    }
      
    formSubmit(event) {
        event.preventDefault();
        if (this.state.selectedOption == "playlist1" || this.state.selectedOption == "playlist2") {
            this.setState({
                isSubmitted: true
            })
        }
        else {
            console.log("error submitting")
        }
    }
      
    render() {
        const renderGifs = () => {
        if (this.state.isSubmitted) {
            return (<GifComparison/>);
        } else {
            return (
                <div className="App">
                    <h2>Playlist 1</h2>
                    {this.titles.map(function (name, index) {
                        return <iframe width="340" height="200" src={name}
                                        title="YouTube video player" frameBorder="0"
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                        allowFullScreen></iframe>;
                    })}

                    <h2>Playlist 2</h2>
                    {this.titles2.map(function (name, index) {
                        return <iframe width="340" height="200" src={name}
                                        title="YouTube video player" frameBorder="0"
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                        allowFullScreen></iframe>;
                    })}

                    <h2>Which playlist would you watch?</h2>
        
        
                    <form onSubmit={this.formSubmit}>
                        <div className="radio">
                        <label>
                            <input
                            type="radio"
                            value="playlist1"
                            checked={this.state.selectedOption === "playlist1"}
                            onChange={this.onValueChange}
                            />
                            Playlist 1
                        </label>
                        </div>
                        <div className="radio">
                        <label>
                            <input
                            type="radio"
                            value="playlist2"
                            checked={this.state.selectedOption === "playlist2"}
                            onChange={this.onValueChange}
                            />
                            Playlist 2
                        </label>
                        </div>
                        <button className="btn btn-default" type="submit">
                        Submit
                        </button>
                    </form>
                </div>
            )}
        }
        return (renderGifs())
    }
    
}
    
    // constructor(props) {
    //     super(props);
    //     this.state = {
    //         isSubmitted: false,
    //         selectedOption: null
    //       };
    //     this.handleChange = this.handleChange.bind(this);
    //     this.handleSubmit = this.handleSubmit.bind(this);
        
    //   }
    
      

    
    // handleChange = (event) => {
    //     console.log('handle change')
    //     this.state.selectedOption = event.target.value
    // };

    // handleSubmit(event) {
    //     console.log(event)
    //     this.state.isSubmitted = true
    //     // console.log('handle submit')
    //     // event.preventDefault();
    //     // if (value === 'playlist1') {
    //     //     console.log('playlist1')
    //     //     state.isSubmitted = true;
    //     // } else if (value === 'playlist2') {
    //     //     state.isSubmitted = true;
    //     //     console.log('playlist2')
    //     // } else {
    //     //     console.log('error')
    //     // }
    // };

    // render() {
        
    //     const renderGifs = () => {
    //     if (this.state.isSubmitted) {
    //         return (<button>Logout</button>);
    //     } else {
    //         return (
    //             <div className="App">
    //                 <h2>Playlist 1</h2>
    //                 {this.titles.map(function (name, index) {
    //                     return <iframe width="340" height="200" src={name}
    //                                    title="YouTube video player" frameBorder="0"
    //                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
    //                                    allowFullScreen></iframe>;
    //                 })}
        
    //                 <h2>Playlist 2</h2>
    //                 {this.titles2.map(function (name, index) {
    //                     return <iframe width="340" height="200" src={name}
    //                                    title="YouTube video player" frameBorder="0"
    //                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
    //                                    allowFullScreen></iframe>;
    //                 })}
        
    //                 <h2>Which playlist would you watch?</h2>
        
    //                 <form onSubmit={this.handleSubmit}>
    //                     <FormControl component="fieldset">
    //                         <FormLabel component="legend">Select a playlist below.</FormLabel>
    //                         <RadioGroup name="gender1" value={"value"} onChange={this.handleChange}>
    //                             <FormControlLabel value="playlist1" control={<Radio/>} label="Playlist 1"/>
    //                             <FormControlLabel value="playlist2" control={<Radio/>} label="Playlist 2"/>
    //                         </RadioGroup>
    //                         <Button type="submit" variant="outlined" color="primary">Submit</Button>
    //                     </FormControl>
    //                 </form>
    //                 <GifComparison/>
        
    //             </div>
    //             );
    //     }
    //     }
    //     return (renderGifs())
    //     };



export default App;

