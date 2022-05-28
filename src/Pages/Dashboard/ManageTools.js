import React, { useState } from 'react';
import { useQuery } from 'react-query';
import Loading from '../Shared/Loading';
import DeleteConfirmModal from './DeleteConfirmModal';
import ToolsRow from './ToolsRow';

const ManageTools = () => {
    const [deletingTool, setdeletingTool] = useState(null);
    const {data: tools, isLoading, refetch} = useQuery('tools', ()=> fetch('http://localhost:5000/tool', {
        headers:{
            authorization: `Bearer ${localStorage.getItem('accessToken')}`
        }
    }).then(res=>res.json()));

    if(isLoading){
        return <Loading></Loading>
    }


    return (
        <div>
            <h2 className='text-2xl mb-5 mt-1'>Manage Tools: {tools.length} </h2>
            <div className="overflow-x-auto">
  <table className="table w-full">
    <thead>
      <tr>
        <th></th>
        <th>Image</th>
        <th>Name</th>
        <th>Action</th>
      </tr>
    </thead>
    <tbody>
     {
         tools.map((tool, index) => <ToolsRow key={tool._id} tool={tool} index={index} refetch={refetch} setdeletingTool={setdeletingTool}></ToolsRow>)
     }
    </tbody>
  </table>
</div>
     {
         deletingTool && <DeleteConfirmModal deletingTool={deletingTool} setdeletingTool={setdeletingTool} refetch={refetch}></DeleteConfirmModal>
     }
    </div>
    );
};

export default ManageTools;