import React from 'react'
import DashboardIcon from '@mui/icons-material/Dashboard';
import PeopleIcon from '@mui/icons-material/People';
import BarChartIcon from '@mui/icons-material/BarChart';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import StudentRegModal from '../Registration/StudentRegModal';
import { useNavigate } from "react-router-dom";


const MainList = ({handleIconClick}) => {
    let navigate = useNavigate();

    const [isModalOpen, setIsModalOpen] = React.useState(false);
    const [selectedItem, setSelectedItem] = React.useState('');

    const closeModal = () => {
        setIsModalOpen(false);
    };

    const navigateToHome = () => {
        handleIconClick("home")
        navigate('/home');
    };

    const navigateToReports = () => {
        handleIconClick("reports")
        navigate('/reports');
    };


    const handleItemClick = (itemName) => {
        if (itemName === 'home') {
            //alert(`Clicked on: ${itemName}`);
            navigateToHome()
        }
        if (itemName === 'studentReg') {
            // alert(`Clicked on: ${itemName}`);
            setSelectedItem(itemName);
            setIsModalOpen(true);
        }
        if (itemName === 'staffReg') {
            // alert(`Clicked on: ${itemName}`);
            setSelectedItem(itemName);
            setIsModalOpen(true);
        }
        if (itemName === 'reports') {
            // alert(`Clicked on: ${itemName}`);
            navigateToReports()
        }
    };

    return (
        <React.Fragment>
            <ListItemButton>
                <ListItemIcon onClick={() => handleItemClick('home')}>
                    <DashboardIcon />
                </ListItemIcon>
                <ListItemText primary="Home" />
            </ListItemButton>
            <ListItemButton onClick={() => handleItemClick('studentReg')}>
                <ListItemIcon>
                    <PeopleIcon />
                </ListItemIcon>
                <ListItemText primary="Student Registration" />
            </ListItemButton>
            <ListItemButton onClick={() => handleItemClick('staffReg')}>
                <ListItemIcon>
                    <PeopleIcon />
                </ListItemIcon>
                <ListItemText primary="Staff Registration" />
            </ListItemButton>
            <ListItemButton onClick={() => handleItemClick('reports')}>
                <ListItemIcon>
                    <BarChartIcon />
                </ListItemIcon>
                <ListItemText primary="Reports" />
            </ListItemButton>

            <StudentRegModal isOpen={isModalOpen} closeModal={closeModal} selectedItem={selectedItem}>
            </StudentRegModal>
        </React.Fragment>

    )

}

export default MainList