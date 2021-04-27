import React from 'react'
import { useSelector } from 'react-redux';
import ChatBox from './ChatBox';

export default function Footer() {
    const userSignin = useSelector((state) => state.userSignin);
    const { userInfo } = userSignin;
    return (
        <footer className="row center">
            {userInfo && !userInfo.isAdmin && <ChatBox userInfo={userInfo} />}
            <div>All right reserved</div>{' '}
        </footer>
    )
}
