import React from 'react';
import { toast } from 'react-toastify';


const UserRow = ({user, refetch}) => {
    const {email, role} = user;
    const makeAdmin = () => {
        fetch(`${process.env.REACT_APP_BASE_URL}/user/admin/${email}`, {
            method: 'PUT',
            headers: {
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res =>{
                if(res.status === 403){
                    toast.error('Failed to make an admin');
                } 
               return res.json()})
            .then(data => {
               if(data.modifiedCount > 0){
                refetch();
                toast.success(`Successfully made an admin`);
               }
            })
    }
    return (
        <tr>
        {/* <th>1</th> */}
        <th>{email}</th>
        <td>{role !== 'admin' && <button onClick={makeAdmin} className="btn btn-xs">Make Admin</button>}</td>
        <td><button className="btn btn-xs">Remove user</button></td>
      </tr>
    );
};

export default UserRow;