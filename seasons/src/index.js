import React from "react";
import ReactDOM from "react-dom";
import SeasonDisplay from "./SeasonDisplay";
import Spinner from "./Spinner";




class App extends React.Component {
    // constructor(props) {
    //     super(props);

    //      // this is the only time we do direct assignment
    //      // to this state
    //     this.state = {lat: null, errorMessage: "" };
    // }

    state = {lat: null, errorMessage: ""};

    componentDidMount() {
        window.navigator.geolocation.getCurrentPosition(
            position => this.setState({ lat: position.coords.latitude }),
            (err) => this.setState({errorMessage: err.message})
            
        );
    }

    //react says we have to defind render ..... or erorr
    renderContact() {
        if (this.state.errorMessage && !this.state.lat) {
            return <div>Error; {this.state.errorMessage} </div>
        }
        if (!this.state.errorMessage && this.state.lat) {
            return <SeasonDisplay lat={this.state.lat} />
        }
        return <Spinner message='please accepet location request' />
    }

    render() {
        return(
        <div className="red bordar">
            {this.renderContact()}
        </div>
        );
    }
}

ReactDOM.render(<App />, document.querySelector('#root'))

