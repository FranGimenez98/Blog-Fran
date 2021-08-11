import { Grid, CardActionArea, Card, makeStyles, Typography, Hidden, CardMedia } from "@material-ui/core"

const useStyles = makeStyles({
    card:{
        display: 'flex',
        padding: '1rem',
    },
    cardDetails: {
        flex: 1,
    },
    cardMedia: {
        width: 160,
    }
});

const PostCard = ({post}) => {
    const classes = useStyles();

    return (
        <Grid item xs={12} md={6}>
            <CardActionArea component='a' href='#'>
                <Card className={classes.card}>
                    <div>
                        <Typography component='h2' variant='h5'>
                            {post.title}
                        </Typography>
                        <Typography variant='subtitle1' color='textSecondary'>
                            {post.date}
                        </Typography>
                        <Typography variant='subtitle1' paragraph>
                            {post.description}
                        </Typography>
                        <Typography variant='subtitle1' style={{color: 'skyblue'}}>
                            Continue Reading...
                        </Typography>
                    </div>
                    <Hidden xsDown>
                        <CardMedia className={classes.cardMedia}
                        image={post.image}
                        title={post.imageTitle} 
                        />
                    </Hidden>
                </Card>
            </CardActionArea>
        </Grid>
    )
}

export default PostCard;
