import React from 'react';
import { toast } from 'react-toastify';

const ToolsRow = ({ tool, index, refetch, setdeletingTool }) => {
    const { name, img } = tool;

    const handleDelete = name =>{
        fetch(`https://immense-island-73172.herokuapp.com/tool/${name}`, {
            method: 'DELETE',
            headers:{
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
        .then(res=>res.json())
        .then(data =>{
            console.log(data);
            if(data.deletedCount){
                toast.success(`${name} is deleted`)
                refetch();
            }

        })
    }


    return (
        <tr>
            <th>{index + 1}</th>
            <td><div className="avatar">
                <div className="w-20 rounded">
                    <img src={img} alt={name} />
                </div>
            </div></td>
            <td>{name}</td>
            <td>
                <label onClick={()=> setdeletingTool(tool)} htmlFor="delete-confirm-modal" className="btn btn-xs btn-error">Delete</label>
                {/* <button onClick={()=> handleDelete(name)} className="btn btn-xs btn-error">Delete</button> */}
            </td>
        </tr>
    );
};

export default ToolsRow;