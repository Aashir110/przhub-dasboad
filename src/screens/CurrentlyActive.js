import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchApiData1 } from '../app/reducers/Slicer';

const CurrentlyActive = () => {
    const dispatch = useDispatch();
    const { user, loading, error } = useSelector((state) => state.app);

    useEffect(() => {
        dispatch(fetchApiData1());
    }, [dispatch]);

    return (
        <div>
            {loading ? (
                <div>Loading...</div>
            ) : error ? (
                <div>Error: {error}</div>
            ) : (
                <div>
                    {user.map((item) => (
                        <p key={item.id}>UserID: {item.id}, Title: {item.login}</p>
                    ))}
                </div>
            )}
        </div>
    );
};

export default CurrentlyActive;
