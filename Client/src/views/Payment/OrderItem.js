import React, {Component} from 'react';
import { Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import { Table, TabContent, TabPane, Nav, NavItem, NavLink, Card, Button, CardTitle, CardText, Row, Col } from 'reactstrap';

class OrderItem extends Component {

    constructor(props){
        super(props);
        
        this.state={
            item:props.item 
        }
    }

    render() {
        return (  
            <tr>
                <td>{this.state.item.orderId}</td>
                <td>{this.state.item.orderDate}</td>  
                <td>45000</td>              
                <td>
                        <Button color="success" onClick={this.props.setModal}>View</Button>                            
                        <Button color="danger" onClick={this.props.setPayModal}>Pay Now</Button>                            
                </td>
            </tr>  
        )
    }
}

export default OrderItem;