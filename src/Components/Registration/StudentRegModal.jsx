import * as React from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import StudentFormTemplate from './StudentFormTemplate';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: "60%",
    bgcolor: 'background.paper',
    boxShadow: 10,
    p: 1,
};

export default function StudentRegModal({ isOpen, closeModal, selectedItem }) {
    return (
        <div>
            <Modal
                open={isOpen}
                onClose={closeModal}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <StudentFormTemplate closeModal={closeModal}  regCategory = {selectedItem}/>
                </Box>
            </Modal>
        </div>
    );
}