import {
  Box, Typography, Avatar, AvatarGroup, List, ListItem, Divider, ListItemText, ListItemAvatar
} from '@mui/material'

import React from 'react'
import { styled } from '@mui/system';


const StyledItemList = styled(Box)(({ theme }) => ({
  display: "flex",
  [theme.breakpoints.up("md")]: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center"

  },
  [theme.breakpoints.down("md")]: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center"
  }
}))

const RightBar = () => {
  return (
    <Box p={2} sx={{ height: "100vh", overFlow: "auto" }} >
      <Box sx={{ position: "fixed", overFlow: "auto" }}>
        <Typography variant='h6' fontWeight="400" mb={1} > Online Friends</Typography>
        <Box display="flex">
          <AvatarGroup max={3}>
            <Avatar
              sx={{ width: 50, height: 50 }}
              alt="Remy Sharp"
              src="https://material-ui.com/static/images/avatar/1.jpg"
            />
            <Avatar
              sx={{ width: 50, height: 50 }}

              alt="Travis Howard"
              src="https://material-ui.com/static/images/avatar/2.jpg"
            />
            <Avatar
              sx={{ width: 50, height: 50 }}

              alt="Cindy Baker"
              src="https://material-ui.com/static/images/avatar/3.jpg"
            />
            <Avatar alt="Agnes Walker" src="" />

          </AvatarGroup>
        </Box>

        <Typography variant='h6' fontWeight="400" mb={1} mt={4}> Latest Posts</Typography>

        <List sx={{ overflow: "auto", height: "350px" }}>
          <StyledItemList >
            <ListItemAvatar>
              <Avatar alt="Remy Sharp"
                src="https://material-ui.com/static/images/avatar/1.jpg"
              />
            </ListItemAvatar>
            <ListItemText
              primary="Brunch this weekend?"
              secondary={
                <React.Fragment>
                  <Typography
                    sx={{ display: 'inline' }}
                    component="span"
                    variant="body2"
                    color="text.primary"
                  >
                    Ali Connors
                  </Typography>
                  {" — I'll be in your neighborhood doing errands this…"}
                </React.Fragment>
              }
            />
          </StyledItemList>
          <Divider variant="inset" component="li" />
          <StyledItemList >
            <ListItemAvatar>
              <Avatar alt="Travis Howard"
                src="https://material-ui.com/static/images/avatar/2.jpg"
              />
            </ListItemAvatar>
            <ListItemText
              primary="Summer BBQ"
              secondary={
                <React.Fragment>
                  <Typography
                    sx={{ display: 'inline' }}
                    component="span"
                    variant="body2"
                    color="text.primary"
                  >
                    to Scott, Alex, Jennifer
                  </Typography>
                  {" — Wish I could come, but I'm out of town this…"}
                </React.Fragment>
              }
            />
          </StyledItemList>
          <Divider variant="inset" component="li" />
          <StyledItemList alignItems="flex-start">
            <ListItemAvatar>
              <Avatar alt="Cindy Baker"
                src="https://material-ui.com/static/images/avatar/3.jpg"
              />
            </ListItemAvatar>
            <ListItemText
              primary="Let Join The Tour !!!"
              secondary={
                <React.Fragment>
                  <Typography
                    sx={{ display: 'inline' }}
                    component="span"
                    variant="body2"
                    color="text.primary"
                  >
                    Sandra Adams
                  </Typography>
                  {' — Do you have Paris recommendations? Have you ever…'}
                </React.Fragment>
              }
            />
          </StyledItemList>
          <StyledItemList alignItems="flex-start">
            <ListItemAvatar>
              <Avatar alt="Cindy Baker"
                src="https://material-ui.com/static/images/avatar/4.jpg"
              />
            </ListItemAvatar>
            <ListItemText
              primary="Weekend Plan"
              secondary={
                <React.Fragment>
                  <Typography
                    sx={{ display: 'inline' }}
                    component="span"
                    variant="body2"
                    color="text.primary"
                  >
                    Sandra Adams
                  </Typography>
                  {' — Do you have Paris recommendations? Have you ever…'}
                </React.Fragment>
              }
            />
          </StyledItemList>
          <StyledItemList alignItems="flex-start">
            <ListItemAvatar>
              <Avatar alt="Cindy Baker"
                src="https://material-ui.com/static/images/avatar/5.jpg"
              />
            </ListItemAvatar>
            <ListItemText
              primary="Lorem Ipsum"
              secondary={
                <React.Fragment>
                  <Typography
                    sx={{ display: 'inline' }}
                    component="span"
                    variant="body2"
                    color="text.primary"
                  >
                    Sandra Adams
                  </Typography>
                  {' — Do you have Paris recommendations? Have you ever…'}
                </React.Fragment>
              }
            />
          </StyledItemList>
          <StyledItemList alignItems="flex-start">
            <ListItemAvatar>
              <Avatar alt="Cindy Baker"
                src="https://material-ui.com/static/images/avatar/6.jpg"
              />
            </ListItemAvatar>
            <ListItemText
              primary="Oui Oui"
              secondary={
                <React.Fragment>
                  <Typography
                    sx={{ display: 'inline' }}
                    component="span"
                    variant="body2"
                    color="text.primary"
                  >
                    Sandra Adams
                  </Typography>
                  {' — Do you have Paris recommendations? Have you ever…'}
                </React.Fragment>
              }
            />
          </StyledItemList>

        </List>

      </Box>
    </Box>)
}

export default RightBar
