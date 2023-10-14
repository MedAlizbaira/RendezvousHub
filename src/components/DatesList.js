import React from 'react'
import { Row, Col } from 'react-bootstrap'
const DatesList = ({ person }) => {
    return (
        <Row className="justify-content-center">
        <Col sm="8" className="">
          <div className="rectangle p-2">
          {person.length ? (person.map(item=>{
            return(
              <div key={item.id} className="d-flex align-items-start border-bottom mx-3 my-2">
              <img className="img-avatar" src={item.image} alt="sd" />
              <div className="px-3">
                <p className="d-inline fs-5">{item.name}</p>
                <br></br>
                <p className="d-inline fs-5">{item.date}</p>
              </div>
            </div>
            )
          })) : <h2 className="p-5 text-center">Data not Found</h2>}
            
          </div>
        </Col>
      </Row>
    )
}

export default DatesList