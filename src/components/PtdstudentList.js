import React from 'react'

export default function PtdstudentList({renderPtdstudentList}) {
console.log("Data:",renderPtdstudentList);
let ptdElement =renderPtdstudentList.map((ptdStudent, index)=>{
    return(
        <tr key={index}>
        <th scope="row">{index+1}</th>
        <td>{ptdStudent.PtdId}</td>
        <td>{ptdStudent.PtdName}</td>
        <td>{ptdStudent.PtdAge}</td>
        <td>{ptdStudent.PtdPhone}</td>
        <td>{ptdStudent.PtdEmail}</td>
        <td>{ptdStudent.PtdStatus}</td>
        <td>
            Edit / Delete
        </td>
    </tr>
    )
    
});
  return (
    <div>
        <h2>Danh sach sinh vien</h2>
        <table className="table table-bodered">
            <thead>
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">Mã sinh viên</th>
                    <th scope="col">Họ tên</th>
                    <th scope="col">Tuổi</th>
                    <th scope="col">Điện thoại</th>
                    <th scope="col">Email</th>
                    <th scope="col">Trạng thái </th>
                    <th scope="col">Chức năng</th>
                </tr>
            </thead>
            <tbody>
               {ptdElement}
                </tbody> 
        </table>
    </div>
  );
}
