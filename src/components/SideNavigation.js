import React, { Component } from 'react';
import logo from "../assets/product-quality.png";
import { ListGroup, ListGroupItem, Fa } from 'mdbreact';
import { NavLink } from 'react-router-dom';

class SideNavigation extends Component {

    render() {
        return (
            <div className="sidebar-fixed position-fixed">
                <a href="#!" className="logo-wrapper waves-effect">
                    <img alt="MDB React Logo" className="img-fluid" src={logo}/>
                </a>
                <ListGroup className="list-group-flush">
                    <NavLink to="/createproduct" activeClassName="activeClass">
                        <ListGroupItem>
                            <Fa icon="plus-square" className="mr-3"/>
                            Create
                        </ListGroupItem>
                    </NavLink>
                    <NavLink to="/updateproduct" activeClassName="activeClass">
                        <ListGroupItem>
                            <Fa icon="upload" className="mr-3"/>
                            Update
                        </ListGroupItem>
                    </NavLink>
                    <NavLink to="/deleteproduct" activeClassName="activeClass">
                        <ListGroupItem>
                            <Fa icon="remove" className="mr-3"/>
                            Delete
                        </ListGroupItem>
                    </NavLink>
                </ListGroup>
            </div>
        );
    }
}

export default SideNavigation;