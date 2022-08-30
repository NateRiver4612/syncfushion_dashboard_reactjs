import React, { useEffect } from 'react'
import { useStateContext } from '../../context/contextProvider'
import { Navbar_Container, Navbar_Body, Profile_Container } from './Navbar.style'
import { Tooltip } from '@material-ui/core'
import { FiMenu } from 'react-icons/fi';
import { FiShoppingCart } from 'react-icons/fi';
import { BsChatLeft } from 'react-icons/bs';
import { RiNotification3Line } from 'react-icons/ri';
import { MdKeyboardArrowDown } from 'react-icons/md';
import avatar from '../../data/avatar.jpg'

const NavBar_Button = ({ title, onClick, icon, color, dot }) => (
    <Tooltip title={title} >
        <button onClick={onClick} style={{ color: color }} className="relative text-xl rounded-full p-3 hover:bg-light-gray">
            <span style={{ backgroundColor: dot }} className="absolute h-2 w-2 rounded-full right-2 top-2" />
            {icon}
        </button>
    </Tooltip>
)

const Navbar = () => {
    const { currentColor, activeMenu, setActiveMenu, screenSize, setScreenSize } = useStateContext()

    useEffect(() => {
        const handleResize = () => setScreenSize(window.innerWidth);

        window.addEventListener('resize', handleResize);

        handleResize()

        return () => {
            window.removeEventListener('resize', handleResize)
        }
    }, [])



    useEffect(() => {
        console.log(screenSize)
        if (screenSize <= 900) {
            setActiveMenu(false);
        } else {
            setActiveMenu(true);
        }
    }, [screenSize]);

    const handleActivateMenu = () => setActiveMenu(!activeMenu)

    return (
        <Navbar_Container>
            <NavBar_Button title="Menu" onClick={handleActivateMenu} color={currentColor} icon={<FiMenu />} />
            <Navbar_Body>
                <NavBar_Button title="Cart" onClick={() => { }} color={currentColor} icon={<FiShoppingCart />} />
                <NavBar_Button title="Chat" onClick={() => { }} color={currentColor} icon={<BsChatLeft />} dot="#03C9D7" />
                <NavBar_Button title="Notification" onClick={() => { }} color={currentColor} icon={<RiNotification3Line />} dot="rgb(254, 201, 15)" />
                <Tooltip title="Profile">
                    <Profile_Container
                        onClick={() => { }}>
                        <img src={avatar} className="rounded-full h-8 w-8" />
                        <p>
                            <span className="text-gray-400 text-14">Hi,</span>{' '}
                            <span className="text-gray-400 font-bold ml-1 text-14">
                                Michael
                            </span>
                        </p>
                        <MdKeyboardArrowDown className="text-gray-400 text-14" />
                    </Profile_Container>
                </Tooltip>
            </Navbar_Body>
        </Navbar_Container>
    )
}

export default Navbar