import React, {Component} from "react";
import PropTypes from "prop-types";
class ContactCard extends Component {
    render(){
        return <div>
            <h1>{this.props.name}</h1>
            <ul>
                <li>mobile: {this.props.mobile}</li>
                <li>work: {this.props.work}</li>
                <li>email: {this.props.email}</li>
            </ul>
        </div>
    }
}
export default ContactCard;

ContactCard.propTypes ={
    name:PropTypes.string.isRequired,
    mobile:PropTypes.string.isRequired,
    work:PropTypes.string,
    email:PropTypes.string.isRequired,
};

/* 
Exercise: Contact Cards
Props and PropTypes

*/