import React, { Component } from 'react';
import { Button, Row, Col, Card, Modal, Form,
  Input, Icon } from 'antd';

const FormItem = Form.Item;

class ExperienceCard extends Component {

  constructor(props) {
    super(props);
    //this.state = { };
    //console.log(this.props);
  }

  render() {
    return (
      <Col span={8} style={{'marginTop': 10,'padding': 5 }}>
        <Card className="card-header-background" title={this.props.experience.position} extra={<div><Button className="edit_experience" id={this.props.experience.id} onClick={this.props.onclick}>Edit</Button>
        <Button experienceid={this.props.experience.id} onClick={this.props.onExperienceDelete}><Icon type="delete" /></Button></div>}
        >
          <div>
            <Row type="flex" justify="space-between">
              <Col><span><strong>Country</strong></span></Col>
              <Col><span>{this.props.experience.country}</span></Col>
            </Row>
            <Row type="flex" justify="space-between">
              <Col><span><strong>School</strong></span></Col>
              <Col><span>{this.props.experience.name_of_school}</span></Col>
             </Row>
            <Row type="flex" justify="space-between">
              <Col><span><strong>From</strong></span></Col>
              <Col><span>{this.props.experience.from}</span></Col>
            </Row>
            <Row type="flex" justify="space-between">
              <Col><span><strong>To</strong></span></Col>
              <Col><span>{this.props.experience.to}</span></Col>
            </Row>
            <Row type="flex" justify="space-between">
              <Col><span><strong>School level</strong></span></Col>
              <Col><span>{this.props.experience.school_level}</span></Col>
            </Row>
          </div>
        </Card>
      </Col>
    );
  }
}

export default ExperienceCard;
