import { useEffect, useState } from "react";
import useAxiosSecure from "../../../hooks/useAxiosSecure";

const ManageClasses = () => {

    const [axiosSecure] = useAxiosSecure();

    const [classes, setClasses] = useState([]);

    const [feedbackInput, setFeedbackInput] = useState('');

    const [selectedClassId, setSelectedClassId] = useState('');

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axiosSecure.get('/all-classes');
                setClasses(response.data);
            } catch (error) {
                console.log('Error fetching classes:', error);
            }
        };

        fetchData();
    }, []);


    const handleApprove = async (classId) => {
        try {
            await axiosSecure.patch(`/classes/approve/${classId}`);
            setClasses(classes);
        } catch (error) {
            console.log('Error approving class:', error);
        }
    };


    const handleDeny = async (classId) => {

        try {
            await axiosSecure.patch(`/classes/deny/${classId}`);
            // setClasses((prevClasses) => prevClasses.filter((classItem) => classItem._id !== classId));
        } catch (error) {
            console.log('Error approving class:', error);
        }
    }



    const handleFeedbackSubmit = async () => {
        try {
            await axiosSecure.post(`/classes/feedback/${selectedClassId}`, {
                feedback: feedbackInput,
            });
            // Clear the feedback input
            setFeedbackInput('');
            // Close the modal
            window.my_modal_1.close();
        } catch (error) {
            console.log('Error submitting feedback:', error);
        }
    };


    return (
        <div>
            <h1 className='py-12 text-5xl font-[Pacifico] text-center'>All Classes Posted By Instructors</h1>
            <table className="min-w-full divide-y-2 divide-gray-200 bg-white text-sm">
                <thead className="ltr:text-left rtl:text-right">
                    <tr>
                        <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                            #
                        </th>
                        <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                            Image
                        </th>
                        <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                            Language Name
                        </th>
                        <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900 hidden sm:block">
                            Take Action
                        </th>
                        <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                            Current Status
                        </th>
                        <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                            Give Feedback
                        </th>
                    </tr>
                </thead>

                <tbody className="divide-y divide-gray-200">

                    {
                        classes.map((classItem, index) =>
                            <tr className='' key={classItem._id}>
                                <th className='font-normal text-center py-2'>{index + 1}</th>

                                <td>
                                    <div className="avatar">
                                        <div className="mask mask-squircle w-12 h-12">
                                            <img src={classItem.image} alt="" />
                                        </div>
                                    </div>
                                </td>
                                
                                <td className='text-center'>
                                    <h2>{classItem.language}</h2>
                                </td>

                                <td className="text-center">
                                    <button className={`ml-3 bg-transparent hover:bg-[#ef476f] font-semibold hover:text-white py-2 px-4 border-b-4 border-[#ef476f] hover:border-transparent rounded ${classItem.status === 'denied' || classItem.status === 'approved' && "opacity-50"}`}
                                        onClick={() => handleApprove(classItem._id)}
                                        disabled={classItem.status === 'approved' || classItem.status === 'denied'}
                                    >
                                        Approve
                                    </button>


                                    <button className={`ml-3 bg-transparent hover:bg-[#ef476f] font-semibold hover:text-white py-2 px-4 border-b-4 border-[#ef476f] hover:border-transparent rounded ${classItem.status === 'approved' || classItem.status === 'denied' && "opacity-50"}`}
                                        onClick={() => handleDeny(classItem._id)}
                                        disabled={classItem.status === 'approved' || classItem.status === 'denied'}
                                    >
                                        Deny
                                    </button>
                                </td>

                                <td className="text-center uppercase">
                                    <p>{classItem.status}</p>
                                </td>

                                <td className="text-center">
                                    {
                                        classItem.status === 'denied' && (
                                            <button
                                                className="bg-transparent hover:bg-[#ef476f] font-semibold hover:text-white py-2 px-4 border-b-4 border-[#ef476f] hover:border-transparent rounded"
                                                onClick={() => {
                                                    setSelectedClassId(classItem._id);
                                                    window.my_modal_1.showModal();
                                                }}
                                            >
                                                Feedback
                                            </button>
                                        )
                                    }
                                </td>
                            </tr>
                        )
                    }
                </tbody>
            </table>

            {/* Open the modal using ID.showModal() method */}

            <dialog id="my_modal_1" className="modal">
                <form method="dialog" className="modal-box">
                    <div className="relative mb-3" data-te-input-wrapper-init>
                        <textarea
                            value={feedbackInput}
                            onChange={(e) => setFeedbackInput(e.target.value)}
                            className="peer block min-h-[auto] w-full rounded border-0 bg-transparent px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"

                            rows="5"
                            placeholder="Your message"></textarea>
                        <label

                            className="pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-primary"
                        >Your Feedback</label>
                    </div>

                    <div className="flex justify-center gap-5">
                        <button className="bg-transparent hover:bg-[#ef476f] font-semibold hover:text-white py-2 px-4 border border-[#ef476f] hover:border-transparent rounded w-1/3" onClick={handleFeedbackSubmit}>
                            Send
                        </button>
                        <button className="bg-transparent hover:bg-[#ef476f] font-semibold hover:text-white py-2 px-4 border border-[#ef476f] hover:border-transparent rounded w-1/3" onClick={() => window.my_modal_1.close()}>
                            Close
                        </button>
                    </div>
                </form>
            </dialog>

        </div>
    );
};

export default ManageClasses;