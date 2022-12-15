import { AppBar, Toolbar, Typography, Stack, Box, Badge, InputBase, Avatar } from '@mui/material';
import DiamondIcon from '@mui/icons-material/Diamond';
import EmailIcon from '@mui/icons-material/Email';
import NotificationsIcon from '@mui/icons-material/Notifications';
import SearchIcon from '@mui/icons-material/Search';

import { styled } from '@mui/system';

const FlexBox = styled(Box)({
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%"
})
const SearchBox = styled(Box)(({ theme }) => ({
    backgroundColor: "white",
    padding: "0 10px",
    borderRadius: theme.shape.borderRadius,
    [theme.breakpoints.down("sm")]: {
        width: "80%",
    },
    [theme.breakpoints.up("sm")]: {
        width: "40%",
    },

    display: "flex",
    alignItems: "center"
}))

const TopBar = () => {
    return (
        <AppBar position="sticky">
            <Toolbar>
                <FlexBox>
                    <Stack direction="row" gap={1} alignItems="center" >
                        <Typography variant='h5' sx={{ display: { xs: "none", sm: "flex" } }}>MUI LIB</Typography>
                        <DiamondIcon />
                    </Stack>

                    <SearchBox>
                        <SearchIcon sx={{ color: "grey", m: 1 }} />
                        <InputBase placeholder='search ....'></InputBase>
                    </SearchBox>

                    <Stack direction="row" gap={1} alignItems="center" sx={{ display: { xs: "none", sm: "flex" } }} >
                        <Badge badgeContent={4} color="error">
                            <EmailIcon />
                        </Badge>
                        <Badge badgeContent={10} color="error">
                            <NotificationsIcon />
                        </Badge>
                        <Avatar sx={{ m: 1 }} alt="Remy Sharp" src={`${process.env.PUBLIC_URL}/assets/user.png`} />
                    </Stack>
                </FlexBox>
            </Toolbar>
        </AppBar>

    )
}

export default TopBar
