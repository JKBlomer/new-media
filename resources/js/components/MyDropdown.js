
import React, { useState } from 'react';
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';

const MyDropdown = (props) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [protocol, setProtocol] = useState(props.protocol);
  const toggle = () => setDropdownOpen(prevState => !prevState);
 
  const protocolArray = ["GET","POST", "PUT", "DELETE"];
 
  return (
    <Dropdown isOpen={dropdownOpen} toggle={toggle}>
    <DropdownToggle caret>
      {protocol}
    </DropdownToggle>
    <DropdownMenu right>
      {
        protocolArray.map((x)=>(
        // <DropdownItem key={x} onClick={()=>grabValue(x)}>{x}</DropdownItem>))
        <DropdownItem key={x}>{x}</DropdownItem>))
        
      }
    </DropdownMenu>
  </Dropdown>
  );
}

export default MyDropdown;






