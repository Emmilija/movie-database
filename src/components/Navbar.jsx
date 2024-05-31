import '../assets/styles/scss/navbar.scss'
import { Menu } from 'antd'
import { Link } from 'react-router-dom';
import { useState } from 'react';

function Navbar () {
    const [current, setCurrent] = useState('home');



    const handleClick = (e) => {
        setCurrent(e.key);
       
    };
 
      const items = [
        {
            label: <Link to='/'>Home</Link>,
            key: 'home',
            title: 'Home',
        },
        {
            label: <Link to='/favorites'>Favorites</Link>,
            key: 'favorites',
            title: 'Favorites',
        },
        {
            label: <Link to='/searched'>Searched</Link>,
            key: 'searched',
            title: 'Searched',
        },
        {
            label:  <Link to='/login'>Login</Link>,
            key: 'login',
            title: 'Login',
        }

    ];

    
    return (
        <div className='navbar'>
        <Menu mode="horizontal" className='navbar'  onClick={handleClick} itemType='item' defaultOpenKeys={['sub1']}
        selectedKeys={[current]} items={items}>
    </Menu>
    </div>
    )
}

export default Navbar;