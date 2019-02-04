import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Payments from './Payments';
import '../css/nav.css'



class Header extends Component {
    
    renderContent() {
        switch (this.props.auth) {
            case null:
                return;
            case false:
                return(
                    <li><a href="/auth/google">Login With Google</a></li>
                    );
            default:
                return [
                    <li key="1"><Payments /></li>,
                    // first piece indicate top and bottom margin
                    // second piece idicate let and right hand margin
                    <li key="3" style={{margin: '0 10px'}}>
                        Credits: {this.props.auth.credits}
                    </li>,
                    <li key='4'><Link to={'/news'}>News</Link></li>,
                    <li key="2"><a href="/api/logout">Logout</a></li>
                ];
        }
    }
    render() {
        return (
                <nav>
                    <div className="nav-wrapper">
                        <Link 
                            to={this.props.auth ? '/surveys' : '/'}
                            className="left brand-logo"
                        >
                            eSharing
                        </Link>
                        <ul className = "right">
                            {this.renderContent()}
                        </ul>
                    </div>
                </nav>
            );
    }
}

function mapStateToProps( { auth } ) {
    return { auth };
}
export default connect(mapStateToProps) (Header);