import { Modal, Stack } from "@mui/material";

export default function BasicModal(props) {
  return (
    <Modal
      open={props.open}
      onClose={props.onClose}
      sx={{
        backdropFilter: "blur(5px)",
        WebkitBackdropFilter: "blur(5px)",
      }}
    >
      <Stack
        sx={{
          position: "absolute",
          top: "50%",
          right: "50%",
          transform: "translate(50%,-50%)",
          borderRadius: 3,
          overflow: "hidden",
        }}
      >
        {props.children}
      </Stack>
    </Modal>
  );
}
