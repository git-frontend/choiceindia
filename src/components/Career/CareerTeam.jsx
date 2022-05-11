
import  CareerImage13 from '../../assets/images/career/bg1.jpg';
import React from 'react';
import { Dropdown } from 'react-bootstrap';
// import { MDBDropdown, MDBDropdownMenu, MDBDropdownToggle, MDBDropdownItem, MDBDropdownLink } from 'mdb-react-ui-kit';

function CareerTeam() {

    

  return (
    <div className='career-main'>
      
     
    

    <section className='career-team'>
      <div className='container'>
        <div className='row'>
            <div className='col-md-12'>
              <div className="heading-sec">
                 <h3 className="title-first">Be a part of our team</h3>
                 <p>If you’re as enthusiastic as we are, then come, join  and work with us. Your fresh ideas, creativity and hardwork is most valued in our organization.</p>
              </div>
            </div>
        </div>
        <div className='row justify-content-center'>
           
        </div>
      </div>

      <div className="explore-opportunities">
            <img src={CareerImage13} className='bg-img' />
            <div className='opportunities-cont'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-md-12'>
                            <h3 className='ttl1'>Explore <span>Opportunities</span> </h3>
                        </div>
                    </div>
                    <div className='row'>
                        <div className='col-md-7'>
                            <div className='job-search'>
                                <form className='form1'>
                                    <input type="text" className='input-field' placeholder='Digital Marketing'/>
                                    <input type="submit" value="Search Job" className='btn-submit' />
                                </form>
                            </div>
                        </div>
                        <div className='col-md-5'>
                            <div className='cust-dropdown'>
                            <Dropdown>
                                <Dropdown.Toggle variant="Info" id="dropdown-basic">
                                  Mumbai
                                </Dropdown.Toggle>

                                <Dropdown.Menu>
                                    <Dropdown.Item href="#/action-1">Delhi</Dropdown.Item>
                                    <Dropdown.Item href="#/action-2">Bangalore</Dropdown.Item>
                                    <Dropdown.Item href="#/action-3">Hyderabad</Dropdown.Item>
                                </Dropdown.Menu>
                                </Dropdown>

                                
                            </div>
                        </div>
                    </div>
                </div>
            </div> 
      </div>
    </section>
      
    
    </div>
  );
}

export default CareerTeam;
