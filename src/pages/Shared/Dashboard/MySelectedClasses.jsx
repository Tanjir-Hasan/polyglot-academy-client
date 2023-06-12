import React from 'react';
import { useCart } from '../../../hooks/useCart';
import Swal from 'sweetalert2';
import { ImBin2 } from 'react-icons/im';
import { Link, useParams } from 'react-router-dom';

const MySelectedClasses = () => {
    const [cart, refetch] = useCart();

    const { id } = useParams();

    const total = cart.reduce((sum, item) => item.price + sum, 0);

    const handleDelete = item => {
        Swal.fire({
            title: 'Are you sure?',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`https://summer-camp-server-rouge.vercel.app/carts/${item._id}`, {
                    method: 'DELETE',
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.deletedCount > 0) {
                            refetch();
                            Swal.fire(
                                'Deleted!',
                                'Class has been deleted.',
                                'success'
                            )
                        }
                    })
            }
        })
    }

    return (
        <div className='w-10/12 mx-auto'>
            <div className="uppercase flex justify-evenly items-center py-12 text-5xl font-[Pacifico] text-center">
                <h3 className="text-2xl font-medium">Total Courses: {cart.length}</h3>
                <h3 className="text-2xl font-medium">Total price: $ {total}</h3>
            </div>
            <div className="overflow-x-auto w-full">
                <table className="table w-full">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Image</th>
                            <th>Language Name</th>
                            <th>Instructor Name</th>
                            <th className='text-end'>Price</th>
                            <th className='text-center'>Make Payment</th>
                            <th className='text-center'>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            cart.map((item, index) => <tr key={item._id}>
                                <td>{index + 1}</td>
                                <td>
                                    <div className="avatar">
                                        <div className="mask mask-squircle w-12 h-12">
                                            <img src={item.image} alt="" />
                                        </div>
                                    </div>
                                </td>
                                <td>{item.language}</td>
                                <td>{item.name}</td>
                                <td className='text-end'>$ {item.price}</td>
                                <td className='text-center'>
                                    {/* <Link to={`/dashboard/payment/${id}`}> */}
                                    <Link to="/dashboard/payment">
                                        <button className="bg-transparent hover:bg-[#ef476f] font-semibold hover:text-white py-2 px-4 border border-[#ef476f] hover:border-transparent rounded">Pay</button>
                                    </Link>
                                </td>
                                <th className='text-center'>
                                    <button onClick={() => handleDelete(item)} className="bg-transparent hover:bg-[#ef476f] font-semibold hover:text-white py-2 px-4 border border-[#ef476f] hover:border-transparent rounded"><ImBin2 /></button>
                                </th>
                            </tr>
                            )
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MySelectedClasses;