import { Component } from 'react';
import * as action from '../../actions';
import Tab from './Tab';
import Tableofdata from './Tableofdata';
import { connect } from 'react-redux';
import { Row, Col, Input, Select } from 'antd';
import 'antd/dist/antd.css';

const { Option } = Select;

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            filtername: '',
            filterid: -1,
            filterde: '',
            filterem: ''
        };
    }
    onToggleFilter = () => {
        this.props.onToggleFilter();
    }
    showEmployeeID = (data) => {
        var rs = null;
        if (data.length > 0) {
            rs = data.map((da, index) => {
                return (
                    <Option value={da.employeeid}>{da.employeeid}</Option>
                );
            });
        }
        return rs;
    }
    showDepartment = (data) => {
        var rs = null;
        if (data.length > 0) {
            rs = data.map((da, index) => {
                return (
                    <Option value={da.department}>{da.department}</Option>
                );
            });
        }
        return rs;
    }
    showEmail = (data) => {
        var rs = null;
        if (data.length > 0) {
            rs = data.map((da, index) => {
                return (
                    <Option value={da.email}>{da.email}</Option>
                );
            });
        }
        return rs;
    }
    onChange = (event) => {
        var target = event.target;
        var name = target.name;
        var value = target.value;
        var filter = {
            filtername: name === 'filtername' ? value : this.state.filtername,
            filterid: name === 'filterid' ? value : this.state.filterid
        };
        this.props.onFilter(filter);
        this.setState({
            [name]: value
        });
    }

    handleChangeID = (value) => {
        var filter = {
            filtername: '',
            filterid: value
        };
        this.props.onFilter(filter);
        this.setState({
            filtername: '',
            filterid: value
        })
    }

    handleChangeDe = (value) => {
        var filter = {
            filtername: '',
            filterid: -1,
            filterde: value
        };
        this.props.onFilter(filter);
        this.setState({
            filtername: '',
            filterid: -1,
            filterde: value
        })
    }

    handleChangeEm = (value) => {
        var filter = {
            filtername: '',
            filterid: -1,
            filterde: '',
            filterem: value
        };
        this.props.onFilter(filter);
        this.setState({
            filtername: '',
            filterid: -1,
            filterde: '',
            filterem: value
        })
    }

    onReset = () => {
        var filter = {
            filtername: '',
            filterid: -1,
            filterde: '',
            filterem: ''
        };
        this.props.onFilter(filter);
        this.setState({
            filtername: '',
            filterid: -1,
            filterde: '',
            filterem: ''
        });
    }

    componentDidMount() {
        this.props.requestData();
    }

    render() {
        var { onToggleFilter } = this.props;
        var { data } = this.props;
        var { filtername, filterid, filterde, filterem } = this.state;
        
        return (
            <div>
                <Tab len={data.length} />
                <Row>
                    <Col span={onToggleFilter === true ? 6 : 0}>
                        <div className="filter">
                            <h2>filter</h2>
                            <div>
                                <h3>name</h3>
                                <Input className="input-style" placeholder="Employee name" name="filtername" value={filtername} onChange={this.onChange} />
                            </div>
                            <br />
                            <div>
                                <h3>employee id</h3>
                                <Select placeholder="ID" 
                                    className="dropdown-filter" 
                                    name="filterid" 
                                    onChange={this.handleChangeID}
                                    value = {filterid === -1 ? null : filterid}
                                    >
                                        {this.showEmployeeID(data)}
                                </Select>
                            </div>
                            <br />
                            <div>
                                <h3>department</h3>
                                <Select placeholder="Choice" 
                                    className="dropdown-filter" 
                                    onChange={this.handleChangeDe} 
                                    name="filter-department"
                                    value = {filterde === '' ? null : filterde}>
                                        {this.showDepartment(data)}
                                </Select>
                            </div>
                            <br />
                            <div>
                                <h3>more</h3>
                                <Select placeholder="Choice" 
                                    className="dropdown-filter" 
                                    name="filter-email" 
                                    onChange={this.handleChangeEm}
                                    value = {filterem === '' ? null : filterem}>
                                        {this.showEmail(data)}
                                </Select>
                            </div>
                            <br />
                            <div style={{ width: '100%' }}>
                                <button className="reset" onClick={this.onReset}>Reset</button>
                            </div>

                        </div>
                    </Col>
                    <Col span={onToggleFilter === true ? 18 : 24}>
                        <Tableofdata filtername = {filtername} filterid = {filterid} 
                            filterde = {filterde} filterem = {filterem} />
                    </Col>
                </Row>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        onToggleFilter: state.onToggleFilter,
        data: state.showData
    }
}

const mapDispatchToProps = (dispatch, props) => {
    return {
        onFilter: (filter) => {
            dispatch(action.onFilter(filter));
        },
        requestData: () => {
            dispatch(action.requestData());
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);