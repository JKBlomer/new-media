import React,{ useState } from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';

function MyForm() {
  const [protocol, setProtocol] =useState("GET");
  const [url, setUrl] = useState("");
  const grabUrl = (value)=> setUrl(prevState => value);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const grabValue = (value)=>setProtocol(value);
  const toggle = () => setDropdownOpen(prevState => !prevState);
 
  const protocolArray = ["GET","POST", "PUT", "DELETE"];

    return (
        <Form style={{display:"flex"}}className="container"inline>
        <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
          <Label for="dropdown" className="mr-sm-2">HTTP Protocol</Label>
          <Dropdown isOpen={dropdownOpen} toggle={toggle}>
            <DropdownToggle caret>
              {protocol}
            </DropdownToggle>
            <DropdownMenu right>
              {
                protocolArray.map((x)=>(
                <DropdownItem key={x} onClick={()=>grabValue(x)}>{x}</DropdownItem>))
                
              }
            </DropdownMenu>
          </Dropdown>
        </FormGroup>
        <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
          <Label for="examplePassword" className="mr-sm-2">URL string</Label>
          <Input onChange={(e)=>grabUrl(e.target.value)}type="text" name="urlString" id="urlString" placeholder="enter url" />
        </FormGroup>
        <Button>Send</Button>
      </Form>
    );
}

export default MyForm;