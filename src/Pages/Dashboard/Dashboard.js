import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, Outlet } from 'react-router-dom';
import auth from '../../firebase.init';
import useAdmin from '../../hooks/useAdmin';

const Dashboard = () => {
    const [user] = useAuthState(auth);
    const [admin] = useAdmin(user);
    return (
            <div className="drawer drawer-mobile">
            <input id="dashboard-sidebar" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content">
                <h2 className='text-4xl font-bold text-pink-500'>Welcome to your Dashboard</h2>
                <Outlet></Outlet>
            </div>
            <div className="drawer-side">
                <label htmlFor="dashboard-sidebar" className="drawer-overlay"></label>
                <ul className="menu p-4 overflow-y-auto w-48 bg-base-100 text-base-content bg-transparent">
                    <li><Link to='/dashboard'>My Orders</Link></li>
                    <li><Link to='/dashboard/addreview'>Add Review</Link></li>
                    <li><Link to='/dashboard/myprofile'>My Profile</Link></li>
                    { admin && <>
                        <li><Link to='/dashboard/users'>Make Admin</Link></li>
                        <li><Link to='/dashboard/addproduct'>Add A Product</Link></li>
                        <li><Link to='/dashboard/manageproduct'>Manage Products</Link></li>
                    </>}
                </ul>
            </div>
        </div>
    );
};

export default Dashboard;