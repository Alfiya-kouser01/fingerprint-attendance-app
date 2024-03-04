import React from 'react'
import Header from './Header'
import Drawer from './Drawer'

const SideNav = () => {
    const [isDrawerOpen, setIsDrawerOpen] = React.useState(false);
    const [selectedIcon, setSelectedIcon] = React.useState(null);

    const toggleDrawer = () => {
        setIsDrawerOpen(!isDrawerOpen);
    };

    const handleIconClick = (icon) => {
        console.log("inside handleIconClick")
        console.log(icon)
        setSelectedIcon(icon);
    };

    return (
        <>
            <Header isDrawerOpen={isDrawerOpen} toggleDrawer={toggleDrawer} />
            <Drawer isDrawerOpen={isDrawerOpen} toggleDrawer={toggleDrawer} onIconClick={handleIconClick} />
        </>
    )
}

export default SideNav