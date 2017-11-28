import React, {Component} from 'react';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import {details} from '../../constants'

//pure component
const SideBar = (props) => { //{open, handleToggle} destructuring of props+

    const handleMenuClick = (title) => {
      props.handleToggle()
      props.handleNewsChange(title)
    }

    return (
      <div>
        <Drawer
          docked={false}
          width={300}
          open={props.open}
          onRequestChange={props.handleToggle}
        >
          {details.map(item => {
            return(
              <MenuItem onClick={()=>handleMenuClick(item.name)}>{item.name}</MenuItem>
            )
          })}
          
        </Drawer>
      </div>
    );
}

export default SideBar;