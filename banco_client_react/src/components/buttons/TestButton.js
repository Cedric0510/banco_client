import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import axios from "axios";

function TestButton() {
  const [show, setShow] = useState(false);

  return (
<>
        <Button onClick={() => axios.delete(`http://localhost:8000/category/delete/1`)}>Show Toast</Button>
 </>
 
  );
}

export default TestButton;