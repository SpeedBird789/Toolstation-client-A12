import React from 'react';
import { toast } from 'react-toastify';

const DeleteConfirmModal = ({deletingTool, setdeletingTool, refetch}) => {
    const {name} = deletingTool;
    const handleDelete = name =>{
        fetch(`https://toolstation-server-a12-ve89a8ziv-asif-mahmouds-projects.vercel.app/tool/${name}`, {
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
                setdeletingTool(null);
                refetch();
            }

        })
    }
    return (
        <div>
            
            <input type="checkbox" id="delete-confirm-modal" class="modal-toggle" />
            <div class="modal modal-bottom sm:modal-middle">
                <div class="modal-box">
                    <h3 class="font-bold text-lg text-red-600">Are you sure you want to delete {name}?</h3>
                    <p class="py-4">You may not be able to revert this decision</p>
                    <div class="modal-action">
                    <button onClick={()=> handleDelete(name)} class="btn btn-xs btn-error">Delete</button>
                        <label for="delete-confirm-modal" class="btn btn-xs">Cancel</label>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DeleteConfirmModal;