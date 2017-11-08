import React, { Component } from 'react';
import { Button, Row, Col, Card, Progress, 
          LocaleProvider, Form } from 'antd';

import enUS from 'antd/lib/locale-provider/en_US';
/*import components/modules*/
import PersonalDetails from './basicProfile/PersonalDetails';
import ContactDetails from './basicProfile/ContactDetails';
import Dependents from './basicProfile/Dependents';
import EmergencyContact from './basicProfile/EmergencyContact';
import CriminalConvictions from './basicProfile/CriminalConvictions';

/*Import Redux functionalities*/
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { getPersonalDetailsDispatch } from "../../../actions";

/*temproary*/
import profilePic from '../../../assets/feature_1.jpg';

class BasicProfile extends Component {

  constructor(props) {
    super(props);
    //console.log(this.props);    
    this.state = {
      first_name: '',
      last_name: '',
      cv_url: '',
      link_to_video: '',
      personal_details: {},
      emergency_contact: {},
      criminal_convictions: {},
      contact_details: {},
      dependents:[]
    }
  }
  
  componentDidMount() {
    const { email, auth_token} = JSON.parse(localStorage.getItem("userprofile"));
    const logoutPayloadHeader = { 'auth_token': auth_token, 'user_email': email }
    const response = this.props.getPersonalDetailsDispatch(logoutPayloadHeader);
  }
  
  componentWillReceiveProps(nextProps) {
    //console.log("componentWillReceiveProps - basicprof",nextProps);
    const { first_name, last_name, personal_details, emergency_contact, 
      criminal_convictions, contact_details, dependents,link_to_video, cv_url } = nextProps.applicantsProfilePayload.applicantsProfile;

    this.setState({ first_name, last_name , personal_details, emergency_contact, 
      criminal_convictions, contact_details, dependents, link_to_video, cv_url});
  }

  render() {
    return (
      <div className="basic-profile-mainContainer">
          <div className="profile-basic-info-container">
            <Row gutter={16}>
              <Col xs={0} sm={10} md={8} lg={6}>
                <Card className="profile-pic-card" title={this.state.first_name + ' ' + this.state.last_name} style={{ height: 350 }}>
                  <img style={{ width: '100%' }} src={profilePic} />
                </Card>
              </Col>
              <Col xs={0} sm={14} md={8} lg={10} >
                <div style={{ height: 230 }}>
                  <div className="basic-profile-header">
                    <h2> {this.state.first_name + ' ' + this.state.last_name} </h2>
                    <Button> Edit </Button>
                  </div>
                  <hr style={{ border: '1px rgba(37, 132, 193, 0.9) solid' }}/>
                  <div>
                    <Row> 
                      <Col>
                        <Button> View Cv </Button>
                      </Col>
                      <Col>
                        <a href={this.state.link_to_video} target="_blank">Link to tutorial Video</a>
                      </Col>
                    </Row>
                  </div>
                </div>  
              </Col>
              <Col md={8} lg={8} className="hidden-sm hidden-xs">
                <Card className="profile-percentage-card" title="Profile Completion Status" >
                  <Progress type="circle" percent={80} />
                </Card>
              </Col>
            </Row>
          </div>
          <hr style={{ marginTop:'10px', border: '1px rgba(37, 132, 193, 0.9) solid' }}/>
          <LocaleProvider  locale={enUS}>
            <div className="profile-details-container">
              <Row gutter={16}>
                <Col xs={0} sm={9} lg={8}>
                  <Dependents dependentsArray={this.state.dependents}/>
                </Col>
                <Col xs={0} sm={9} lg={8}>
                  <PersonalDetails personal_details={this.state.personal_details}/>
                  <EmergencyContact emergency_contact={this.state.emergency_contact}/>
                </Col>
                <Col xs={0} sm={6} lg={8} className="hidden-sm-down" >
                  <ContactDetails contact_details={this.state.contact_details} />
                  <CriminalConvictions criminal_convictions={this.state.criminal_convictions} />
                </Col>
              </Row>
              <Row gutter={16}>
                <Col xs={0} sm={9} lg={8}>
                </Col>
                <Col xs={0} sm={9} lg={8}>
                </Col>
                <Col xs={0} sm={6} lg={8} className="hidden-sm-down" >
                  
                </Col>
              </Row>
            </div>
          </LocaleProvider>
      </div>
    );
  }
}

function mapStateToProps(state) {
  //console.log("mapStateToProps",state);
  return { applicantsProfilePayload: state.applicants};
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ getPersonalDetailsDispatch: getPersonalDetailsDispatch }, dispatch);
}

export default connect( mapStateToProps, mapDispatchToProps)(Form.create()(BasicProfile));
