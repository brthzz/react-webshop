import React from 'react';

import { Link } from 'react-router-dom';

import { connect } from 'react-redux';
import { auth } from '../../firebase/firebase.utils';
import { ReactComponent as Logo } from '../../assets/logo.svg';

import CartIcon from "../cart-icon/cart-icon.component";
import CartDropdown from '../cart-dropdown/cart-dropdown.component';

import './header.style.scss';


const Header = ( { currentUser, hidden} ) => (
    <div className='header'>
        <Link className='logo-container' to='/'>
            <Logo className='logo' />
        </Link>
        <div className='options'>
            <Link to='/shop' className='option'> Shop </Link>
            <Link to='/contact' className='option'> Contact </Link>
            {
                currentUser ?
                <div className='option' onClick={() => auth.signOut()}> Sign Out </div>
                :
                <Link className='option' to='/signin'> Sign In </Link>
            }
            <CartIcon />
        </div>
        {/* dropdown outside of options */}
        {hidden ? null : <CartDropdown />}
    </div>
)

const mapStateToProps = ({user: {currentUser}, cart: {hidden}}) => ({
    currentUser,
    hidden
});

export default connect(mapStateToProps)(Header);