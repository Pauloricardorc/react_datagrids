import { Button, Modal, Typography } from "@mui/material";
import { X } from "phosphor-react";
import { useState } from "react";
import { Container, ImageModal } from "./styles";

interface IProps {
  image: string | any;
  title: string;
}

export function ComponentModal({ image, title }: IProps) {
  const [open, setOpen] = useState(false);

  function handleOpen() {
    setOpen(true);
  }

  function handleClose() {
    setOpen(false);
  }

  return (
    <>
      <Button onClick={handleOpen}>exibir</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Container>
          <X className="close-icon" size={24} onClick={handleClose} />
          <Typography id="modal-modal-title" variant="h6" component="h2">
            <p className="title">{title}</p>
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            <ImageModal src={image} alt="" />
          </Typography>
        </Container>
      </Modal>
    </>
  );
}
