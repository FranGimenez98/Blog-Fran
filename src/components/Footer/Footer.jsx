import { makeStyles, Typography, Container, Link } from "@material-ui/core";

const useStyles = makeStyles((theme)=> ({
    footer: {
        backgroundColor: theme.palette.background.paper,
        marginTop: theme.spacing(4),
        padding: theme.spacing(6,0),
    }
}))

export default function Footer({description, title}){
    const classes = useStyles();

    return (
        <footer>
            <Container maxWidth='lg'>
                <Typography variant='h6' align='center' gutterBottom>
                    {title}
                </Typography>
                <Typography
                    variant='subtitle'
                    align='center'
                    color='textSecondary'
                    component='p'
                >
                    {description}
                </Typography>
                <Typography variant='body2' color='textSecondary' align='center'>
                    Copyright @{" "}
                    <Link color='inherit' href="https://material-ui.com">
                        Your Website
                    </Link>
                    {new Date().getFullYear}.
                </Typography>
            </Container>
        </footer>
    )
}

