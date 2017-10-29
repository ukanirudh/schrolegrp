import React, { Component } from 'react';
import { Layout, Menu, Breadcrumb, Icon } from 'antd';

/*import css*/
import '../../App.css';

/*router functionalities*/
import { Link, browserHistory } from 'react-router';

/*Import Redux functionalities*/
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import thunk from 'redux-thunk';
import reducers from "../../reducers";
import { testDispatch } from "../../actions/index";

/*Import Components*/
import Logout from '../Logout';
const { Header, Content, Footer } = Layout;

const store1=createStore(reducers, applyMiddleware(thunk)) ;
store1.dispatch(testDispatch());

class UserProfileDashboard extends Component {
  
  onMenuClick = (e) => {
    this.setState({
      currentTab: e.key,
    });
  }

  constructor(props) {
    super(props);
    this.state = { currentTab: '1', user: '' , authToken: '' };
  }

  componentDidMount() {
    //call AJAX over here
    //console.log(this.props);
    if(this.props.location.state) {
      const { email, auth_token} = this.props.location.state.stateData ;
      this.setState({ user: email , authToken: auth_token });
    } else if ( localStorage.getItem("userprofile") ) {
      console.log(JSON.parse(localStorage.getItem("userprofile")));
      const { email, auth_token} = JSON.parse(localStorage.getItem("userprofile"));
      this.setState({ user: email , authToken: auth_token });
    } else {
      browserHistory.push({
        pathname: '/Login'
      });
    }
  }

  render() {
    return (
      <Provider store={store1}>
      <div className="height-fluid">
        <div className="featured-list-container" >
          <Layout className="layout">
            <Header>
              <div className="logo" />
              <Menu
                theme="dark"
                onClick={this.onMenuClick}
                mode="horizontal"
                selectedKeys={[this.state.currentTab]}
                defaultSelectedKeys={['1']}
                style={{ lineHeight: '64px' }}
              >
                <Menu.Item key="1"><Icon type="desktop" /><Link role="button" to="/userprofile" style={{'display':'inline-flex'}}>Dashboard</Link></Menu.Item>
                <Menu.Item key="2"><Icon type="mail" /><Link role="button" to={{ pathname: '/userprofile/schools'/*, state: { stateData: "Anirudh" }*/ }} style={{'display':'inline-flex'}}>School</Link></Menu.Item>
                <Menu.Item key="3"><Icon type="user-add" /><Link role="button" to={{ pathname: '/userprofile/vacancies'/*, state: { stateData: "Anirudh" }*/ }} style={{'display':'inline-flex'}}>Vacancies</Link></Menu.Item>
                <Menu.Item key="4"><Icon type="global" /><Link role="button" to={{ pathname: '/userprofile/application'/*, state: { stateData: "Anirudh" }*/ }} style={{'display':'inline-flex'}}>Applications</Link></Menu.Item>
                <Menu.Item key="5"><Icon type="smile-o" /><Link role="button" to={{ pathname: '/userprofile/profile'/*, state: { stateData: "Anirudh" }*/ }} style={{'display':'inline-flex'}}>Profile</Link></Menu.Item>
                <Menu.Item key="6"><Icon type="search" /><Link role="button" to={{ pathname: '/userprofile/search'/*, state: { stateData: "Anirudh" }*/ }} style={{'display':'inline-flex'}}>Search</Link></Menu.Item>
                <Menu.Item key="7"><Icon type="user" />{this.state.user}</Menu.Item>
                <Menu.Item key="8" className="pull-right"><Logout auth_token={this.state.authToken} user_email={this.state.user}/></Menu.Item>
              </Menu>
            </Header>
            <Content style={{ padding: '0 20px' }}>
              <Breadcrumb separator=">" routes={this.props.routes} params={this.props.params} className="breadCrumb-container" />
              <div style={{ background: '#fff', padding: 15, minHeight: 280 }}>
                <div>
                  {this.props.children}
                </div>
              </div>
            </Content>
            <Footer style={{ textAlign: 'center' }}>
              Ant Design ©2016 Created by Ant UED
            </Footer>
          </Layout>
        </div>
      </div>
      </Provider>
    );
  }
}

export default UserProfileDashboard;
