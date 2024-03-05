// src/components/Header.js

import React, { useState } from 'react';
import FormControlLabel from '@mui/material/FormControlLabel';
import { Radio, RadioGroup } from '@mui/material';
const Header = ({ menu, setMenu }) => {

  // const handleChange = (event) => {
  //   setMenu(event.target.checked ? 'users' : 'transcripts');
  // };
  console.log(menu);
  return (
    <header id='header'>
      <div className='img'>
        <img className="logo" src="https://www.enfintechnologies.com/wp-content/uploads/enfin-logo-1-e1687512482348.webp" alt="" />
      </div>
      <div className='toggle'>
        {/* <span>Product</span>
        <FormControlLabel
          control={<Switch checked={menu === 'users'} onChange={handleChange} />}
          style={{ marginLeft: "15px" }}
        />
        <span style={{ marginRight: "15px" }}>Concierge</span> */}
        <RadioGroup
          row
          aria-labelledby="demo-row-radio-buttons-group-label"
          name="row-radio-buttons-group"
        >
          <FormControlLabel value="users" control={<Radio onChange={()=>setMenu('transcripts')} />} label="Product" />
          <FormControlLabel value="trascripts" control={<Radio onChange={()=>setMenu('users')}  />} label="Concierge" />
        </RadioGroup>
      </div>
    </header>
  );
};

export default Header;
