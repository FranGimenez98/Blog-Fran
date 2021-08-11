import { Button, Card, CardActions, CardContent, makeStyles, Typography } from '@material-ui/core'
import React from 'react'

const useStyles = makeStyles((theme) =>({
    title: {
        fontSize: 40,
        fontFamily: "Arial",
    },
    cover: {
        backgroundImage: 'url(https://ideas.ted.com/wp-content/uploads/sites/3/2021/03/FINAL_Bees.jpg)',
        backgroundPosition: 'center',
        padding: '35px 25px'
    },
    btn: {
    },
}))

const FeaturedPost = () => {
    const classes = useStyles();

    return (
        <Card className={classes.cover}>
            <CardContent className={classes.textContainer}>
                <Typography className={classes.title} gutterBottom>Abejitas Locas</Typography>
                <Typography variant="h5">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae accusantium placeat, excepturi rerum quidem numquam voluptatem nobis enim, deleniti amet perferendis sequi porro in cumque, modi libero ut iusto ipsum itaque aperiam debitis ullamñ
                </Typography>
            </CardContent>

            <CardActions>
                <Button variant="text" className={classes.btn}>
                    Read More...
                </Button>
            </CardActions>
        </Card>
    )
}

export default FeaturedPost
