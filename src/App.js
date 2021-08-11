import { Container, createTheme, Grid, ThemeProvider } from "@material-ui/core";
import Header from "./components/Header/Header";
import './App.css'
import FeaturedPost from "./components/Featured/FeaturedPost";
import PostCard from "./components/PostCard/PostCard";
import { featuredPosts, sidebar } from "./data/data";
import Sidebar from "./components/Sidebar/Sidebar";
import Main from "./Main/Main";
import { makeStyles } from "@material-ui/core";
import Footer from "./components/Footer/Footer";

const useStyles = makeStyles((theme) => ({
  mainGrid: {
    marginTop: {
      marginTop: theme.spacing(3),
    },
  }
}))


function App() {
  const classes = useStyles();

  const darkTheme = createTheme({
    palette: {
      type: 'dark',
    },
  });

  return (
    <ThemeProvider theme={darkTheme}>
      <Container>
        <Header/>
          <FeaturedPost/>
          <br/>
          <Grid container spacing={4}>
            {featuredPosts.map((post) => (
                <PostCard post={post} key={post.title}/>
              ))}
          </Grid>
          <Grid container spacing={5} className={classes.mainGrid}>
              <Main title='hjdsa'/>
              <Sidebar 
              title={sidebar.title}
              descrption={sidebar.description}
              archives={sidebar.archives}
              social={sidebar.social}
              />
          </Grid>
      </Container>
      <Footer
        title='Footer'
        description='hdjsahdsajhdasjhdsja'
      />
    </ThemeProvider>
  );
}

export default App;
