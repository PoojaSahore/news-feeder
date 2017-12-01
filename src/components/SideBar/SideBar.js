import React, {Component} from 'react';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import {newsInfo} from '../../constants'

const SideBar = (props) => { 

  const handleMenuClick = (title) => {
    props.handleToggle()
    props.handleNewsChange(title)
  }

  return (
    <div>
      <Drawer
        containerStyle={{
        backgroundColor: 'rgb(16, 133, 148)',
        padding: '25px'
      }}
        docked={false}
        width={300}
        open={props.open}
        onRequestChange={props.handleToggle}>
        {newsInfo.map(item => {
          return (
            <MenuItem
              style={{
              color: 'white',
              marginBottom: '10px'
            }}
              onClick={() => handleMenuClick(item.name)}>{item.name}</MenuItem>
          )
        })}

      </Drawer>
    </div>
  );
}

export default SideBar;