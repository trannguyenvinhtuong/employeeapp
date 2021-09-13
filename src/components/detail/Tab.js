import {Component} from 'react';
import { connect } from "react-redux";
import * as action from './../../actions/index';

class Tab extends Component {
    componentDidMount() {
        var {id} = this.props;
        this.props.requestOneData(id);    
    }
    render() {
        var {dataone} = this.props;
        return (
            <div className="tab" style={{ paddingTop: '4rem' }}>
                <div>
                    <h3>Employess 
                        <i class="fas fa-chevron-right" style={{paddingLeft:'1rem',color:'white'}}></i>
                    </h3>
                    <h3 className="number-employ">{dataone.firstname + ' ' + dataone.lastname}</h3>
                </div>
                <div className="right-item">                    
                    <div>
                        <a href="#">
                            <i class="fas fa-ellipsis-v" style={{color:'white', fontSize: '1.4rem'}}></i>
                        </a>
                    </div>

                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        dataone: state.getOne
    }
}
const mapDispatchToProps = (dispatch, props) => {
    return {
        requestOneData: (id) => {
            dispatch(action.requestOneData(id));
        }
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(Tab);