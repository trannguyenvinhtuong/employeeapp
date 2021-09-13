import { Component } from "react";
import { connect } from "react-redux";
import { Divider, Table } from 'antd';
import * as action from './../../actions/index';

const columns = [
    {
        title: '#',
        dataIndex: 'id'
    },
    {
        title: 'Checklist',
        dataIndex: 'checklist',
    },
    {
        title: 'Date',
        dataIndex: 'date'
    },
    {
        title: 'Duration',    
        dataIndex: 'duration'    
    }
];

class SecondSection extends Component {
    constructor(props){
        super(props);
        this.state = {};
    }
    componentDidMount() {
        var {id} = this.props;
        this.props.requestOneData(id);
        this.props.requestInspecDetail();
    }
    render() {
        var {dataone} = this.props;
        var {datainsde} = this.props;
        var datalast = [];
        if(datainsde.length>0){
            datainsde.map((da,index)=>{
                if(da.employeeid === dataone.employeeid){
                    datalast.push({
                        key: index,
                        id: da.id,
                        checklist: da.checklist,
                        date: da.date,
                        duration: da.duration
                    });
                }
            })
        }
        return (
            <div className="detail-row">
                <div className="employee-spec">
                    <h3>Employee Inspections</h3>
                    <Divider className="line-break" />
                    <div className="ins">
                        Inspections
                    </div>
                    <div className="ins ins-deactive">
                        Issues
                    </div>
                    <br />
                    <br />
                    <Table
                        className="table-data"
                        columns={columns}
                        dataSource={datalast}
                    />
                </div>
            </div>

        );
    }
}

const mapStateToProps = (state) => {
    return {
        dataone: state.getOne,
        datainsde : state.getInspecDetail
    }
}

const mapDispatchToProps = (dispatch, props) => {
    return {
        requestOneData: (id) => {
            dispatch(action.requestOneData(id));
        },
        requestInspecDetail: () => {
            dispatch(action.requestInspecDetail());
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SecondSection);