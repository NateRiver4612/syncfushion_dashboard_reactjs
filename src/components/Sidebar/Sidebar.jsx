import React, { Fragment } from 'react'
import { SiShopware } from 'react-icons/si';
import { useStateContext } from '../../context/contextProvider';
import { links } from '../../data/dummy'
import { Sidebar_NavLink, Sidebar_Title, Sidebar_Container, Sidebar_Link, Sidebar_Link_Container } from './Sidebar.style';


const Sidebar = () => {
    // const activeLink = 'flex items-center gap-5 pl-4 pt-3 pb-2.5 rounded-lg  text-white  text-md m-2';
    // const normalLink = 'flex items-center gap-5 pl-4 pt-3 pb-2.5 rounded-lg text-md text-gray-700 dark:text-gray-200 dark:hover:text-black hover:bg-light-gray m-2';
    const { currentColor, activeMenu } = useStateContext()


    return (
        <Sidebar_Container>
            {activeMenu && (
                <Fragment>
                    <Sidebar_Link_Container >
                        <Sidebar_Link to="/" >
                            <SiShopware /> <span>Shoppy</span>
                        </Sidebar_Link>
                    </Sidebar_Link_Container>
                    <div className='mt-10'>
                        {
                            links.map((item) => {
                                const { title, links } = item
                                return (
                                    <div key={title}>
                                        <Sidebar_Title>
                                            {title}
                                        </Sidebar_Title>
                                        {
                                            links.map((link) => (
                                                <Sidebar_NavLink
                                                    to={`/${link.name}`}
                                                    key={link.name}
                                                    currentColor={currentColor}

                                                >
                                                    {link.icon}
                                                    <span>{link.name}</span>
                                                </Sidebar_NavLink>
                                            ))
                                        }
                                    </div>
                                )
                            })
                        }
                    </div>
                </Fragment>
            )}
        </Sidebar_Container >
    )
}



export default Sidebar