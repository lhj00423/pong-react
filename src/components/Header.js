import React, { useEffect } from 'react';
//import { MdFace } from "react-icons/md";
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { setLogin, setLogout } from '../modules/logincheck';
import { getCookie, removeCookie } from '../util/cookie';
import './Header.css';
const Header = () => {
    const isLogin = useSelector(state=>state.logincheck.isLogin);
    const username = getCookie("username");
    const dispatch = useDispatch();
    const logoutClick = () => {
        removeCookie('username');
        removeCookie('useremail');
        dispatch(setLogout());
    }
    useEffect(()=>{
        const loop =setInterval(()=>{
            const username = getCookie("username")
            if(username){
                dispatch(setLogin());
            }else{
                dispatch(setLogout());
                clearInterval(loop);
            }
        },3000)
        
    },[dispatch,username])
    return (
        <header>
            <h1><Link to="/"><img class="mainlogo" src='/images/pong.jpg' alt=''/></Link></h1>
            <ul className='menu'>
                <li><Link to="/special">브랜드</Link></li>
                <li><Link to="/room">기획전</Link></li>
                <li><Link to="/reservation">매트</Link></li>
                <li>야외용품</li>
                <li>안전용품</li>
                <li>위생용품</li>
                { isLogin && username === 'admin' ? 
                <>
                    <li><Link to='/writeevent'>용품 등록</Link></li> 
                    <li><Link to='/writeroom'>이벤트 등록</Link></li>
                </>
                :null}
            </ul>
            <div>
                <div className='iconDiv'>
                    {/* <MdFace/> */}
                    <p>뭐하지요</p>
                    <ul className='membermenu'>
                        { isLogin ? 
                        <><li onClick={logoutClick}>로그아웃</li>
                        <li><Link to="/join">회원정보</Link></li></> : 
                        <><li><Link to="/login">로그인</Link></li>
                        <li><Link to="/join">회원가입</Link></li></>
                        }
                    </ul>
                </div>
            </div>
            
        </header>
    );
};

export default Header;