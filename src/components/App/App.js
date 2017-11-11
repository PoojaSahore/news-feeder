import React, {Component} from 'react';
import News from '../News';
import SideBar from '../SideBar';
import AppBar from 'material-ui/AppBar';

class App extends Component {
    constructor () {
        super()
        this.state = {
            open : false
        }
    }

    handleToggle = () => this.setState({open: !this.state.open});

    render() {
        return (
            <div>
                <AppBar
                    title="News Feeder"
                    iconClassNameRight="muidocs-icon-navigation-expand-more" 
                    onLeftIconButtonTouchTap={this.handleToggle}
                />
                <News />
                <SideBar open={this.state.open} handleToggle={this.handleToggle} />
            </div>
        )
    }
}

export default App;
