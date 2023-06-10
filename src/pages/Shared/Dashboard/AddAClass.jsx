import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import Swal from 'sweetalert2';
import useAxiosSecure from '../../../hooks/useAxiosSecure';
import { AuthContext } from '../../../providers/AuthProviders';

const image_hosting_token = import.meta.env.VITE_Image_Upload_Token;

const AddAClass = () => {

    const { register, handleSubmit, reset } = useForm();

    const { user } = useContext(AuthContext);

    const [axiosSecure] = useAxiosSecure();

    const image_hosting_url = `https://api.imgbb.com/1/upload?key=${image_hosting_token}`

    const onSubmit = data => {

        const formData = new FormData();
        formData.append('image', data.image[0]);

        fetch(image_hosting_url, {
            method: 'POST',
            body: formData
        })
            .then(res => res.json())
            .then(imgResponse => {
                if (imgResponse.success) {
                    const imgURL = imgResponse.data.display_url;
                    const { name, email, language, price, availableSeats } = data;
                    const newItem = {
                        email, name, image: imgURL, language, price: parseFloat(price), availableSeats: parseFloat(availableSeats)
                    }
                    console.log(newItem)
                    axiosSecure.post('/classes', newItem)
                        .then(data => {
                            console.log('Updated Class', data.data);
                            if (data.data.insertedId) {
                                reset();
                                Swal.fire({
                                    position: 'top-end',
                                    icon: 'success',
                                    title: 'Class added successfully',
                                    showConfirmButton: false,
                                    timer: 1500
                                })
                            }
                        })
                }
            })
    }

    console.log(image_hosting_token)

    return (
        <div className="w-1/2 mx-auto px-10 mb-10">
            <h1 className='py-16 text-5xl text-center font-[Pacifico]'>Add A Class</h1>
            <form onSubmit={handleSubmit(onSubmit)}>

                {/* email and name */}
                <div className="form-control w-full mb-4">
                    <label className="label">
                        <span className="label-text font-semibold">Name</span>
                    </label>
                    <input type="name" placeholder={user?.displayName} readOnly defaultValue={user?.displayName}
                        {...register("name",)}
                        className="input input-bordered w-full hover:bg-[#ef476f] font-semibold hover:text-black hover:placeholder:text-black" />
                </div>
                <div className="form-control w-full mb-4">
                    <label className="label">
                        <span className="label-text font-semibold">Email</span>
                    </label>
                    <input type="email" placeholder={user?.email} readOnly defaultValue={user?.email}
                        {...register("email",)}
                        className="input input-bordered w-full hover:bg-[#ef476f] font-semibold hover:text-black hover:placeholder:text-black" />
                </div>

                {/* email and name */}

                <div className=" w-full mb-4">
                    <label className="label">
                        <span className="label-text font-semibold">Class Name*</span>
                    </label>
                    <input type="text" placeholder="Class Name"
                        {...register("language", { required: true, maxLength: 120 })}
                        className="input input-bordered w-full hover:bg-[#ef476f] font-semibold hover:text-black hover:placeholder:text-black" />
                </div>
                <div className="flex gap-5">
                    <div className='w-full'>
                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text font-semibold">Price*</span>
                            </label>
                            <input type="number" {...register("price", { required: true })} placeholder="Type here" className="input input-bordered w-full hover:bg-[#ef476f] font-semibold hover:text-black hover:placeholder:text-black" />
                        </div>
                    </div>
                    <div className='w-full'>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text font-semibold">Available Seats</span>
                            </label>
                            <input type="number" {...register("availableSeats", { required: true })} placeholder="Type here" className="input input-bordered w-full hover:bg-[#ef476f] font-semibold hover:text-black hover:placeholder:text-black" />
                        </div>
                    </div>
                </div>
                {/* <div className="form-control">
                    <label className="label">
                        <span className="label-text">Class Details</span>
                    </label>
                    <textarea {...register("details", { required: true })} className="textarea textarea-bordered h-24" placeholder="Bio"></textarea>
                </div> */}
                <div className="form-control w-full my-4">
                    <label className="label">
                        <span className="label-text">Class Image*</span>
                    </label>
                    <input type="file" {...register("image", { required: true })} className="file-input file-input-bordered w-full " />
                </div>
                <input className="w-full bg-transparent hover:bg-[#ef476f] font-semibold hover:text-white py-2 px-4 border border-[#ef476f] hover:border-transparent rounded" type="submit" value="Add Class" />
            </form>
        </div>
    );
};

export default AddAClass;