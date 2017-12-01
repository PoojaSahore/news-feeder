import React, {Component} from 'react';
import News from '../News';
import SideBar from '../SideBar';
import AppBar from 'material-ui/AppBar';

class App extends Component {
    constructor() {
        super()
        this.state = {
            open: false,
            title: ""
        }
    }

    handleToggle = () => {
        this.setState({
            open: !this.state.open
        });
    }

    handleNewsChange = (title) => {
        this.setState({title})
        console.log(this.state.title)
    }
    render() {
        return (
            <div>
                <AppBar
                    title={`News Feeder${this.state.title
                    ? ": " + this.state.title
                    : ""}`}
                    iconClassNameRight="muidocs-icon-navigation-expand-more"
                    onLeftIconButtonTouchTap={this.handleToggle}/>
                <News newsTitle={this.state.title}/>
                <SideBar
                    open={this.state.open}
                    handleToggle={this.handleToggle}
                    handleNewsChange={this.handleNewsChange}/>
            </div>
        )
    }
}

export default App;
