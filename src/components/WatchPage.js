import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { useParams, useSearchParams } from 'react-router-dom'
import { closeMenu } from '../redux/appSlice';
import LiveChat from './LiveChat';
import CommentsContainer from './CommentsContainer';

const WatchPage = () => {
    const dispatch = useDispatch();
    const [searchParams] = useSearchParams();

    useEffect(() => {
        dispatch(closeMenu());
    }, []);

    return (
        <div className="flex flex-col w-full">
            <div className="px-5 flex w-full">
                <div className="">
                <iframe
                    width="1200"
                    height="600"
                    src={"https://www.youtube.com/embed/" + searchParams.get("v")}
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                ></iframe>
                </div>
                <div className="w-full">
                <LiveChat />
                </div>
            </div>
            <CommentsContainer />
        </div>
    )
}

export default WatchPage