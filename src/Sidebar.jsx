import React from 'react'
import 
{BsCart3, BsGrid1X2Fill, BsFillArchiveFill, BsFillGrid3X3GapFill, BsPeopleFill, 
  BsListCheck, BsMenuButtonWideFill, BsFillGearFill}
 from 'react-icons/bs';
 import {Link} from 'react-router-dom';

function Sidebar({openSidebarToggle, OpenSidebar}) {
  return (
    <aside id="sidebar" className={openSidebarToggle ? "sidebar-responsive": ""}>
        <div className='sidebar-title'>
            <div className='sidebar-brand'>
                <BsCart3  className='icon_header text-white'/> Star Holidays Admin
            </div>
            <span className='icon close_icon text-white' onClick={OpenSidebar}>X</span>
        </div>

        <ul className='sidebar-list'>
            <Link to = '/' ><li className='sidebar-list-item'>
            
                    <BsGrid1X2Fill className='icon'/>
                    Dashboard
            </li>
            </Link>
            <Link to ='/bookings'><li className='sidebar-list-item'>
                
                    <BsFillArchiveFill className='icon'/> Bookings
                
            </li></Link>
            <Link to  = '/formreq'>
            <li className='sidebar-list-item'>
                <a href="">
                    <BsFillGrid3X3GapFill className='icon'/>Form Request
                </a>
            </li>
            </Link>
            <Link to = '/customers'>
            <li className='sidebar-list-item'>
                <a href="">
                    <BsPeopleFill className='icon'/> Customers
                </a>
            </li>
            </Link>
            <Link to = '/offers'>
            <li className='sidebar-list-item'>
                <a href="">
                    <BsPeopleFill className='icon'/> Offers
                </a>
            </li>
            </Link>
            <li className='sidebar-list-item'>
                <a href="">
                    <BsFillGearFill className='icon'/>Logout
                </a>
            </li>
        </ul>
    </aside>
  )
}

export default Sidebar