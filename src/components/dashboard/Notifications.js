import React, { Component } from 'react'
import moment from 'moment'

class Notifications extends Component{
    render(){
        const {notifications} = this.props;
        return(
            <div>
                <div className="card pink lighten-5">
                    <div className="card-content">
                    <div className="card-title center pink-text"><strong>Notifications</strong></div>
                        <ul>
                            {notifications && notifications.map(item => {
                                return(
                                    <li key={item.id}>
                                        <span><strong>{item.book} - </strong></span>
                                        <span className="red-text">{item.author} </span>
                                        <span>{item.content}</span>
                                        <span className="purple-text"> {item.user}</span><br></br>
                                        <span className="grey-text darken-3">{moment(item.time.toString()).fromNow()}</span>
                                    </li>
                                )
                            })}
                        </ul>
                    </div>
                </div>
            </div>
        )
    }
}

export default Notifications