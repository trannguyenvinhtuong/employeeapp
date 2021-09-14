import { Component } from "react";
import { Row, Col, Divider, Input, Table } from 'antd';
import userimg from './../../img/person.jpg';
import * as action from './../../actions/index';
import 'antd/dist/antd.css';
import { connect } from "react-redux";
import chart from './../../img/charts.PNG';

class FirstSection extends Component {
    constructor(props){
        super(props);
        this.state = {};
    }
    componentDidMount() {
        var {id} = this.props;
        this.props.requestOneData(id);
        this.props.requestInspec(id);
    }
    render() {
        var { dataone } = this.props;
        var { datains } = this.props;
        return (
            <div>
                <Row className="detail-row">
                    <Col span={12} style={{ paddingRight: '2rem' }}>
                        <div className="employee-spec" style={{ height: '35.1rem' }}>
                            <h3>{dataone.name}</h3>
                            <Divider className="line-break" />
                            <Row>
                                <Col span={10}>
                                    <p>employee image</p>
                                    <div>
                                        <div className="img-user-style">
                                            <img src={userimg} />
                                        </div>
                                        <div className="icon-plus">
                                            <i className="fas fa-plus"></i>
                                        </div>
                                    </div>

                                </Col>
                                <Col span={14}>
                                    <p>inpections completed</p>
                                    <img src={chart} style={{width: '100%', height: 'auto'}}/>
                                </Col>
                            </Row>
                            <br />
                            <br />
                            <br />
                            <br />
                            <Row>
                                <Col span={6}>
                                    <h2>total inspections</h2>
                                    <p>{datains.totalinspections}</p>
                                </Col>
                                <Col span={6}>
                                    <h2>open issues</h2>
                                    <p>{datains.openissues}</p>
                                </Col>
                                <Col span={6}>
                                    <h2>last login</h2>
                                    <p>{datains.lastlogin}</p>
                                </Col>
                                <Col span={6}>
                                    <h2>sites</h2>
                                    <p>{datains.sites}</p>
                                </Col>
                            </Row>
                        </div>
                    </Col>
                    <Col span={12} style={{ paddingLeft: '2rem' }}>
                        <div className="employee-spec">
                            <h3>details</h3>
                            <Divider className="line-break" />
                            <Row>
                                <Col span={8}></Col>
                                <Col span={8}></Col>
                                <Col span={8}>
                                    <h2>department</h2>
                                </Col>
                            </Row>
                            <Row>
                                <Col className="padding-1" span={8}>
                                    <Input className="input-style" value={dataone.firstname} />
                                </Col>
                                <Col className="padding-1" span={8}>
                                    <Input className="input-style" value={dataone.email} />
                                </Col>
                                <Col className="padding-1" span={8}>
                                    <Input className="input-style" value={dataone.department} />
                                </Col>
                            </Row>
                            <Row>
                                <Col span={8}></Col>
                                <Col span={8}></Col>
                                <Col span={8}>
                                    <h2>position</h2>
                                </Col>
                            </Row>
                            <Row>
                                <Col className="padding-1" span={8}>
                                    <Input className="input-style" value={dataone.lastname} />
                                </Col>
                                <Col className="padding-1" span={8}>
                                    <Input className="input-style" value={dataone.phone} />
                                </Col>
                                <Col className="padding-1" span={8}>
                                    <Input className="input-style" value={dataone.position} />
                                </Col>
                            </Row>
                        </div>
                        <div className="employee-spec" style={{ marginTop: '2rem' }}>
                            <h3>credentials</h3>
                            <Divider className="line-break" />
                            <div className="cre-spec">
                                <h3 style={{ float: 'left' }}>portal and chekmate</h3>
                                <h3 style={{ float: 'right' }}>chekrite application</h3>
                            </div>
                            <br />
                            <br />

                            <Row>
                                <Col span={8}>
                                    <h2>username</h2>
                                </Col>
                                <Col span={8}>
                                    <h2>role</h2>
                                </Col>
                                <Col span={8}>
                                    <h2>employee id</h2>
                                </Col>
                            </Row>
                            <Row>
                                <Col className="padding-1" span={8}>
                                    <Input className="input-style" value={dataone.username} />
                                </Col>
                                <Col className="padding-1" span={8}>
                                    <Input className="input-style" value={dataone.role} />
                                </Col>
                                <Col className="padding-1" span={8}>
                                    <Input className="input-style" value={dataone.employeeid} />
                                </Col>
                            </Row>
                            <Row>
                                <Col span={8}>
                                    <h2>password</h2>
                                </Col>
                                <Col span={8}>
                                    <h2>site access</h2>
                                </Col>
                                <Col span={8}>
                                    <h2>pin</h2>
                                </Col>
                            </Row>
                            <Row>
                                <Col className="padding-1" span={8}>
                                    <Input className="input-style" value={dataone.password} type="password" />
                                </Col>
                                <Col className="padding-1" span={8}>
                                    <Input className="input-style" value={dataone.siteacess} />
                                </Col>
                                <Col className="padding-1" span={8}>
                                    <Input className="input-style" value={dataone.pin} type="password" />
                                </Col>
                            </Row>
                        </div>
                    </Col>
                </Row>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        dataone: state.getOne,
        datains: state.getInspec,
    }
}

const mapDispatchToProps = (dispatch, props) => {
    return {
        requestOneData: (id) => {
            dispatch(action.requestOneData(id));
        },
        requestInspec: (id) => {
            dispatch(action.requestInspec(id));
        }
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(FirstSection);