import React from 'react';
import { Card, CardBody, Col, Button } from 'reactstrap';
import Fade from 'react-reveal/Fade';

const Report = () => {
  
  return (
      <Fade bottom duration={2000}>
        <Card className="shadow-lg--hover shadow col-md-6 center bg-gradient-blue text-light m-2">
          <CardBody>
            <h2 className='text-white font-weight-bold'>Report</h2>
            <div className="">
              <div className="form-group">
                <label>Name</label>
                <input type="text" className="form-control" placeholder="Name" id='name'/>
                <label>Student ID</label>
                <input type="text" className="form-control" placeholder="Student ID" id='id'/>
                <label>Grade</label>
                <input type="text" className="form-control" placeholder="Grade" id='grade'/>
                <label>Description</label>
                <textarea className="form-control" placeholder="Description" id='dct'/>
              </div>
              <Button type="submit" onClick={submit} className="btn btn-success shadow-lg">Submit</Button>
            </div>
          </CardBody>
        </Card>
      </Fade>
    
  );
  
  function submit() {
    const rp = {
      name: document.getElementById("name") as HTMLInputElement,// chuyển đổi từ compent của React sang dạng HTML javascript có thể hiểu
      id: document.getElementById("id") as HTMLInputElement,
      grade: document.getElementById("grade") as HTMLInputElement,
      desciption: document.getElementById("dct") as HTMLInputElement,
    }
    alert("OK luôn em");
  }

};

export default Report;
