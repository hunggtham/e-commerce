import { Box, Button, Modal, Typography } from "@mui/material";
import React from "react";
import RegisterForm from "./RegisterForm";
import LoginForm from "./LoginForm";
import { useLocation } from "react-router-dom";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  //   border: "1px solid #000",
  borderRadius: "5px",
  boxShadow: 24,
  p: 4,
  outline: "none",
};

const AuthModal = ({ handleClose, open }) => {
  const location = useLocation();
  return (
    <div>
      {/* <Button onClick={handleOpen}>Open modal</Button> */}
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          {location.pathname === "/login" ? <LoginForm /> : <RegisterForm />}
          {/* <RegisterForm /> */}
        </Box>
      </Modal>
    </div>
  );
};

export default AuthModal;
