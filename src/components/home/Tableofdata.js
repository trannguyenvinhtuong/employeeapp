import { Component } from 'react';
import { Checkbox, Table } from 'antd';
import 'antd/dist/antd.css';
import {Link} from 'react-router-dom';
import userimg from './../../img/person.jpg';
import { connect } from 'react-redux';
import * as action from '../../actions';
import Tab from './Tab';

const columns = [
    {
        title: 'Image',
        render: (text) => <img alt={text} className="user-small-img" src={userimg} />
    },
    {
        title: 'Name',        
        render: (record) => <Link className="link-name" to={'/detail/' + record.id}>{record.firstname + ' ' + record.lastname}</Link>
    },
    {
        title: 'EmployeeID',
        dataIndex: 'employeeid'
    },
    {
        title: 'Position',    
        dataIndex: 'position'    
    },
    {
        title: 'Department',
        dataIndex: 'department',
    },
    {
        title: 'Email',
        dataIndex: 'email'
    },
    {
        dataIndex: 'id'
    }
];

class Tableofdata extends Component {  
    constructor(){
        super();
        this.state={
            status : true,
            filtername: '',
            filterid: -1,
            filterde: '',
            filterem: '',
            selectedRowKeys: []
        }
    }

    onDel = () =>{
        this.setState({
            status : this.props.status
        })
    }

    onDeSelect = () => {
        this.setState({
            selectedRowKeys: []
        })
    }

    render() {        
        var {toogleCheck, data} = this.props;
        var { filtername, filterid, filterde, filterem } = this.state;
        var { filter } = this.props;
        if (filter.filtername) {
            data = data.filter((da) => {
                return (da.firstname + " " + da.lastname).toLowerCase().indexOf(filter.filtername.toLowerCase()) !== -1;
            })
        }

        if (filter.filterid > 0) {
            data = data.filter((da) => {
                return da.employeeid === filter.filterid;
            })
        }

        if (filter.filterde) {
            data = data.filter((da) => {
                return (da.department).toLowerCase().indexOf(filter.filterde) !== -1;
            })
        }

        if (filter.filterem) {
            data = data.filter((da) => {
                return (da.email).toLowerCase().indexOf(filter.filterem) !== -1;
            })
        }
        const rowSelection = {
            onChange: (selectedRowKeys, selectedRows) => {
                if(selectedRowKeys.length > 0){
                    // this.props.deleteEmploy(selectedRowKeys);   
                    this.setState({selectedRowKeys : selectedRowKeys});               
                    
                    this.props.deleteEmploy(selectedRows);                    
                }                            
            }
          };
        return (            
            <div>
                <Table
                    className="table-data"  
                    rowKey = 'id'
                    rowSelection={toogleCheck === true ? {
                        type: 'checkbox',  
                        ...rowSelection,                     
                      } : ''}
                    columns={columns}
                    dataSource={data}                    
                />
            </div>
        );
    }
}

const mapStateToProps = (state) =>{
    return{
        toogleCheck : state.toogleCheck,
        data: state.showData,
        filter: state.onFilter
    }
}

const mapDispatchToProps = (dispatch, props) =>{
    return{
        deleteEmploy : (deldata) =>{
            dispatch(action.onDeleteE(deldata))
        },
        requestDelete: (id) => {
            dispatch(action.requestDelete(id))
        }
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Tableofdata);