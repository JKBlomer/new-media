import React,{ useState } from 'react';
import MyDropdown from './MyDropdown.js';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';

function MyForm() {
  const [protocol, setProtocol] =useState("GET");
  const [url, setUrl] = useState("");
  const grabUrl = (value)=> setUrl(prevState => value);
  
    return (
      
        <Form style={{display:"flex"}}className="container"inline>
        <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
          <Label for="dropdown" className="mr-sm-2">HTTP Protocol</Label>
          <MyDropdown  />
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