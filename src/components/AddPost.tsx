import * as React from 'react';
import {
    Box, Button, Typography, styled, TextField, Stack, Avatar, ButtonGroup, autocompleteClasses
} from '@mui/material';

import Modal from '@mui/material/Modal';
import Fab from '@mui/material/Fab';
import {
    Add,
    DateRange,
    EmojiEmotions,
    Image,
    PersonAdd,
    VideoCameraBack,
} from "@mui/icons-material";



const style = {
    bgcolor: "background.default",
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    borderRadius: "30px",
    width: {
        xs: "auto",
        sm: "400px"
    },

    padding: "30px"
}
const UserBox = styled(Box)({
    display: "flex",
    alignItems: "center",
    gap: "10px",
    marginBottom: "20px",
});

const AddPost = () => {

    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return (
        <div>
            <Fab color="primary" aria-label="add" sx={{
                position: "fixed",
                left: "10px",
                bottom: "10px"
            }}>
                <Add onClick={handleOpen} />
            </Fab>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <Typography variant="h6" color="gray" textAlign="center">
                        Create post
                    </Typography>
                    <UserBox>
                        <Avatar
                            src="https://material-ui.com/static/images/avatar/3.jpg"
                            sx={{ width: 30, height: 30 }}
                        />
                        <Typography fontWeight={500}>
                            John Doe
                        </Typography>
                    </UserBox>
                    <TextField
                        sx={{ width: "100%" }}
                        id="standard-multiline-static"
                        multiline
                        rows={3}
                        placeholder="What's on your mind?"
                        variant="standard"
                    />
                    <Stack direction="row" gap={1} mt={2} mb={3}>
                        <EmojiEmotions color="primary" />
                        <Image color="secondary" />
                        <VideoCameraBack color="success" />
                        <PersonAdd color="error" />
                    </Stack>
                    <ButtonGroup
                        fullWidth
                        variant="contained"
                        aria-label="outlined primary button group"
                    >
                        <Button>Post</Button>
                        <Button sx={{ width: "100px" }}>
                            <DateRange />
                        </Button>
                    </ButtonGroup>
                </Box>
            </Modal>
        </div>
    );
}

export default AddPost
