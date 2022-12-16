import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Checkbox from '@mui/material/Checkbox';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ShareIcon from '@mui/icons-material/Share';
import MoreVertIcon from '@mui/icons-material/MoreVert';

const Post = () => {
    return (
        <Card sx={{ width: "100%", marginBottom: "20px" }}>
            <CardHeader
                avatar={
                    <Avatar
                        src="https://material-ui.com/static/images/avatar/1.jpg"
                        sx={{ bgcolor: red[500] }} aria-label="recipe">

                    </Avatar>
                }
                action={
                    <IconButton aria-label="settings">
                        <MoreVertIcon />
                    </IconButton>
                }
                title="Joe Doe"
                subheader="September 14, 2016"
            />
            <CardMedia
                component="img"
                height="380"
                image={`${process.env.PUBLIC_URL}/assets/hero.jpg`}
                alt="Paella dish"
            />
            <CardContent>
                <Typography variant="body2" color="text.secondary">
                    This impressive paella is a perfect party dish and a fun meal to cook
                    together with your guests. Add 1 cup of frozen peas along with the mussels,
                    if you like.
                </Typography>
            </CardContent>
            <CardActions disableSpacing>
                <Checkbox

                    icon={< FavoriteBorderIcon color="error" />}
                    checkedIcon={<FavoriteIcon color="error" />}
                />
                <IconButton aria-label="share">
                    <ShareIcon />
                </IconButton>

            </CardActions>

        </Card>
    )
}

export default Post
