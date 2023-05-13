import React, {useState} from 'react';
import './SideNav.css';
import {RiFileListLine, RiQuestionAnswerLine, RiUser5Line} from "react-icons/ri";
import {BiChalkboard} from "react-icons/bi";
import {FaChalkboardTeacher} from "react-icons/fa";
import {IoStarHalf} from "react-icons/io5";
import {MdOutlineDashboard} from "react-icons/md";
import {TbPigMoney} from "react-icons/tb";
import {Link} from "react-router-dom";

export default function SideNav({isActive, setIsActive}) {
    // 새로 고침시 초기화 되고 만다.
    const [activeLi, setActiveLi] = useState(0);

    const handleClick = () => {
        (isActive === '') ?  setIsActive('active') : setIsActive('')
    };

    return (
    <>
        <div className={`navigation ${isActive}`}>
      <div className={`menuToggle`} onClick={handleClick}>
      </div>
        <ul>
            <li className={`list ${activeLi === 0 ? 'active' : ''}`}
                onClick={() => setActiveLi(0)}>
                <Link to="/admin">
                    <span className={`icon`} style={{'--clr': '#f44336'}}>
                        <MdOutlineDashboard />
                    </span>
                    <span className={`text`}>HOME</span>
                </Link>
            </li>
            <li className={`list ${activeLi === 1 ? 'active' : ''}`}
                onClick={() => setActiveLi(1)}>
                <Link to="/admin/myinfo">
                    <span className={`icon`} style={{'--clr': '#ffa117'}}>
                        <RiUser5Line />
                    </span>
                    <span className={`text`}>나의 정보</span>
                </Link>
            </li>
            <li className={`list ${activeLi === 2 ? 'active' : ''}`}
                onClick={() => setActiveLi(2)}>
                <Link to="#">
                    <span className={`icon`} style={{'--clr': '#0fc70f'}}>
                        <BiChalkboard />
                    </span>
                    <span className={`text`}>공지사항 관리</span>
                </Link>
            </li>
            <li className={`list ${activeLi === 3 ? 'active' : ''}`}
                onClick={() => setActiveLi(3)}>
                <Link to="#">
                    <span className={`icon`} style={{'--clr': '#2196f3'}}>
                        <FaChalkboardTeacher />
                    </span>
                    <span className={`text`}>원데이클래스</span>
                </Link>
            </li>
            <li className={`list ${activeLi === 4 ? 'active' : ''}`}
                onClick={() => setActiveLi(4)}>
                <Link to="#">
                    <span className={`icon`} style={{'--clr': '#7986cb'}}>
                       <RiQuestionAnswerLine />
                    </span>
                    <span className={`text`}>문의 관리</span>
                </Link>
            </li>
            <li className={`list ${activeLi === 5 ? 'active' : ''}`}
                onClick={() => setActiveLi(5)}>
                <Link to="#">
                    <span className={`icon`} style={{'--clr': '#b145e9'}}>
                        <IoStarHalf />
                    </span>
                    <span className={`text`}>리뷰 관리</span>
                </Link>
            </li>
            <li className={`list ${activeLi === 6 ? 'active' : ''}`}
                onClick={() => setActiveLi(6)}>
                <Link to="#">
                    <span className={`icon`} style={{'--clr': '#c5e1a5'}}>
                        <RiFileListLine />
                    </span>
                    <span className={`text`}>판매 내역</span>
                </Link>
            </li>
            <li className={`list ${activeLi === 7 ? 'active' : ''}`}
                onClick={() => setActiveLi(7)}>
                <Link to="#">
                    <span className={`icon`} style={{'--clr': '#e57373'}}>
                        <TbPigMoney />
                    </span>
                    <span className={`text`}>정산 내역</span>
                </Link>
            </li>
        </ul>
    </div>
    </>
  );
}