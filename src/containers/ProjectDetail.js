import React, { Component } from 'react'
import { connect } from 'react-redux';
import {
  Container,
  Row, 
  Col
} from 'react-bootstrap';
import {
  CustomButton,
  CustomTable,
  CustomInput
} from '../components';
import { updateIssues } from '../redux/actions/issuetracker';

class ProjectDetail extends Component {
  constructor() {
    super();
    this.state = {
      projectName: 'Issue Tracker for BizAnalytics',
      modalShow: false
    }
  }

  onEditable = event => {
    this.setState({
      editable: !this.state.editable
    })
  }

  onChange = (index) => (event) => {
    const { issues } = this.props.issuetracker;
    const updatedIssues = [...issues];
    updatedIssues[index] = {...updatedIssues[index], status: event.target.value};
    this.props.dispatch(updateIssues(updatedIssues));
  }

  onChangeProject = (event) => {
    this.setState({
      projectName: event.target.value
    });
  }

  render() {
    const { issues } = this.props.issuetracker;
    const { editable, projectName } = this.state;
    return (
      <Container className="mt-5">
        <Row>
          <Col sm={12} className="text-center mb-5">
            <h2>
              {
                editable ? <CustomInput value={projectName} onChange={this.onChangeProject} placeholder="Name" /> : projectName
              }
              <CustomButton title={editable ? 'Done' : 'Edit'} onClick={this.onEditable} btnColor='primary' className='ml-2' />
            </h2>
            <CustomTable data={issues} onChange={this.onChange} />
          </Col>
        </Row>
      </Container>
    )
  }
}

export default connect((state) => state)(ProjectDetail);