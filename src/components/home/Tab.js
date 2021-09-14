import { Component } from "react";
import { Menu, Dropdown } from 'antd';
import { DownOutlined } from '@ant-design/icons';
import 'antd/dist/antd.css';
import { connect } from 'react-redux';
import * as action from '../../actions';
import Tableofdata from "./Tableofdata";
import * as FileSaver from 'file-saver';
import * as XLSX from 'xlsx';

class Tab extends Component {

    onToggleFilter = () => {
        this.props.onToggleFilter();
    }
    onToogleCheck = () => {
        this.props.onToogleCheck();
    }
    findIndex = (emps, id) => {
        var rs = -1;
        emps.forEach((emp, index) => {
            if (emp.id === id) {
                rs = index;
            }
        });
        return rs;
    }
    onDeleteE = () => {
        if (this.props.deldata.length < 1) {
            alert('Please check!');
        }
        else {
            var { deldata } = this.props;
            if (confirm('Are you sure?')) { //eslint-disable-line  
                var da = [];
                deldata.map((d, index) => {
                    da.push(d[index]);
                })
                da.map((d, index) => {
                    try {
                        this.requestDelete(d.id);
                    }
                    catch {

                    }
                })
                alert("Done!");
                this.props.requestData();
                <Tableofdata status={false} />
                this.props.onDeleteEmploy([]);
            }
        }
    }
    requestDelete = (id) => {
        this.props.requestDelete(id);
    }
    exportData = (csvData, fileName) => {
        const fileType = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8';
        const fileExtension = '.xlsx';
        const ws = XLSX.utils.json_to_sheet(csvData);
        const wb = { Sheets: { 'data': ws }, SheetNames: ['data'] };
        const excelBuffer = XLSX.write(wb, { bookType: 'xlsx', type: 'array' });
        const data = new Blob([excelBuffer], { type: fileType });
        FileSaver.saveAs(data, fileName + fileExtension);
    }
    getDataE = () => {
        var { deldata } = this.props;
        var da = [];
        deldata.map((d, index) => {
            da.push(d[index]);
        })

        da.map((d, index) => {
            this.props.requestManyData(d.id);
        })
    }
    onExport = () => {
        if (this.props.deldata.length < 1) {
            alert('Please check!');
        }
        else {
            this.getDataE();

            var { datamany } = this.props;
            this.exportData(datamany, "dulieu");
           
        }
    }
    render() {



        var { toogleCheck } = this.props;
        const menu = (
            <Menu>
                <Menu.Item icon={toogleCheck === true ? <DownOutlined /> : ''} onClick={this.onToogleCheck}>
                    <a target="_blank" rel="noopener noreferrer">
                        Select Columns
                    </a>
                </Menu.Item>
                <Menu.Item>
                    <a target="_blank" rel="noopener noreferrer" onClick={this.onExport}>
                        Download Employees
                    </a>
                </Menu.Item>
                <Menu.Item>
                    <a target="_blank" rel="noopener noreferrer">
                        Import Employee
                    </a>
                </Menu.Item>
                <Menu.Item>
                    <a target="_blank" rel="noopener noreferrer" onClick={this.onDeleteE}>
                        Delete Employee
                    </a>
                </Menu.Item>
            </Menu>
        );
        return (
            <div className="tab" style={{ paddingTop: '4rem' }}>
                <div>
                    <h3>Employess</h3>
                    <h3 className="number-employ">{this.props.len} Employess</h3>
                </div>
                <div className="right-item">
                    <div>
                        <Dropdown overlay={menu}>
                            <a className="ant-dropdown-link" onClick={e => e.preventDefault()}>
                                <i className="fas fa-filter" style={{ color: 'white', fontSize: '1.3rem' }}></i>
                            </a>
                        </Dropdown>
                    </div>
                    <div>
                        <a onClick={this.onToggleFilter}>
                            <i className="fas fa-ellipsis-v" style={{ color: 'white', fontSize: '1.4rem' }}></i>
                        </a>
                    </div>

                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        toogleCheck: state.toogleCheck,
        deldata: state.onDeleteE,
        data: state.showData,
        datamany: state.getMany
    }
}

const mapDispatchToProps = (dispatch, props) => {
    return {
        onToggleFilter: () => {
            dispatch(action.onToggleFilter())
        },
        onToogleCheck: () => {
            dispatch(action.toogleCheck())
        },
        requestDelete: (id) => {
            dispatch(action.requestDelete(id))
        },
        requestData: () => {
            dispatch(action.requestData());
        },
        onDeleteEmploy: (data) => {
            dispatch(action.onDeleteE(data));
        },
        requestManyData: (id) => {
            dispatch(action.requestManyData(id));
        },
        getMany: (data) => {
            dispatch(action.getMany(data));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Tab);