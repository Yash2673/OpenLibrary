import React, {Component} from 'react'
import { connect } from 'react-redux';
import { count } from '../../store/actions/bookActions';

class Counter extends Component{

    handleClick = (item) => {
        this.props.count(item);
    }

    render(){
        const {counter} = this.props;
        return(
            <div className="card">
                <div className="card-content">
                    {counter && counter.map(item => {
                        return(
                            <div key={item.id}>
                                <p>{item.count}</p>
                                <button onClick={()=>{this.handleClick(item)}}>Increase</button>
                            </div>
                        )
                    })}
                </div>
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return{
        count : (item) => dispatch(count(item))
    }
}

export default connect(null,mapDispatchToProps)(Counter)