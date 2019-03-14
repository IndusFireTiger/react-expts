import React from 'react'
import ReactDOM from 'react-dom'
import './Header.css'
import logo from '../static/logo.svg';


function Header() {
    const element = (
        <div className='app-header'>
            <div className='header-left'>
                <img src={logo} className="App-logo" alt="logo" />
                <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
                    Learn React
                </a>
            </div>
            <div id='Tick' />
        </div>
    );
    return element
}

class Clock extends React.Component {
    constructor(props) {
        super(props)
        this.state = { date: new Date() }
    }
    componentDidMount() {
        this.timerID = setInterval(
            () => this.tick(),
            1000
        );
    }
    componentWillUnmount() {
        clearInterval(this.timerID);
    }
    tick() {
        this.setState({
          date: new Date()
        });
    }
    render() {
        // console.log('toc')
        return (
            <div>
                <p>{this.state.date.toLocaleTimeString()}</p>
            </div>
        )
    }
}
function Tick() {
    // console.log('tic')
    ReactDOM.render(
        <Clock />,
        document.getElementById('Tick')
    );
}

setInterval(Tick, 1000);

export default Header;