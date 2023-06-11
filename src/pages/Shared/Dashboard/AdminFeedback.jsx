import React, { useContext, useEffect, useState } from 'react';
import useAxiosSecure from '../../../hooks/useAxiosSecure';
import { AuthContext } from '../../../providers/AuthProviders';

const AdminFeedback = () => {

    const { user } = useContext(AuthContext);
    const [feedback, setFeedback] = useState("");

    const [axiosSecure] = useAxiosSecure();

    useEffect(() => {
        const fetchFeedback = async () => {
            try {
                const response = await axiosSecure.get(`/classes/feedback/${user?.email}`);
                setFeedback(response.data ? [response.data] : []);
            } catch (error) {
                console.log('Error fetching feedback:', error);
            }
        };

        fetchFeedback();
    }, [user?.email]);


    return (
        <div>
            <h2>Feedback:</h2>
            <p></p>
            {/* {feedback.length > 0 ? (
                feedback.map((fd) => <li key={fd._id}>{fd}</li>)
            ) : (
                <p>No feedback available.</p>
            )} */}
            <p>{feedback}</p>
        </div>
    );
};

export default AdminFeedback;