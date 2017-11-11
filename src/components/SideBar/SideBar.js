import React, {Component} from 'react';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
//import RaisedButton from 'material-ui/RaisedButton';

//pure component
const SideBar = (props) => { //{open, handleToggle} destructuring of props

//   constructor(props) {
//     super(props);   console.log("fn")
//     this.state = {open: this.props.open};
//   }

//   componentWillReceiveProps(nextProp) {
//       this.setState({open : nextProp.open})
//   }
  //handleToggle = () => this.setState({open: !this.state.open});

  //handleClose = () => this.setState({open: false});

    return (
      <div>
        {/* <RaisedButton
          label="Open Drawer"
          onClick={this.handleToggle}
        /> */}
        <Drawer
          docked={false}
          width={300}
          open={props.open}
          onRequestChange={props.handleToggle}
        >
          <MenuItem onClick={props.handleToggle}>Menu Item</MenuItem>
          <MenuItem onClick={props.handleToggle}>Menu Item 2</MenuItem>
        </Drawer>
      </div>
    );
}

export default SideBar;