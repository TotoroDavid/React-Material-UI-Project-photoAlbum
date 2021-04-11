import { Typography, AppBar, Button, Card, CardActions, CardContent, CardMedia, CssBaseline, Grid, Toolbar, Container } from '@material-ui/core'
import PhotoCameraIcon from '@material-ui/icons/PhotoCamera';

import useStyles from './styles'

const cards = [1,2,3,4,5,6,7,8,9]
const App = () => {

    const classes = useStyles()

    return (
        <>
            <CssBaseline />
            <AppBar position="relative">
                <Toolbar className={classes.icon}>
                    <PhotoCameraIcon />
                    <Typography variant='h6'> 
                        Photo Album
                    </Typography>
                </Toolbar>
            </AppBar>
            <main>
                <div className={classes.container}>
                    <Container maxWidth='sm' style={{ marginTop: '100px'}}>
                        <Typography variant='h2' align='center' color='textPrimary' gutterBottom>
                            photoAlbum
                        </Typography>
                        <Typography variant='h5' align='center' color='textSecondary'  paragraph>
                            Hello everyOne this is a photoAlbum and I'm trying to make this sentence as long as possible so we can see how it look like on the screen
                        </Typography>
                        <div className={classes.button}>
                            <Grid container spacing={2} justify='center'>
                                <Grid item>
                                    <Button variant='contained' color='primary'>
                                        see my photos
                                    </Button>
                                </Grid>
                            </Grid>
                            <Grid container spacing={2} justify='center'>
                                <Grid item>
                                    <Button variant='outlined' color='primary'>
                                        Secondary action
                                    </Button>
                                </Grid>
                            </Grid>
                        </div>
                    </Container>
                </div>
                <Container className={classes.cardGrid} maxWidth='md'>
                    <Grid container spacing={4}>
                    {cards.map((card) => (
                        <Grid intem key={card} xm={12} sm={6} md={4}>
                            <Card className={classes.card}>
                                <CardMedia
                                    className={classes.cardMedia}
                                    image='https://source.unsplash.com/random'
                                    title='Image title'
                                />
                                <CardContent className={classes.cardContent}>
                                    <Typography gutterBottom variant='h5'>
                                        Heading
                                    </Typography>
                                    <Typography>
                                        this is a media card. you can  use this section to describe the content.
                                    </Typography>
                                </CardContent>
                                <CardActions>
                                    <Button size='small' color='primary'>view</Button>
                                    <Button size='small' color='primary'>Edit</Button>
                                </CardActions>
                            </Card>
                        </Grid>
                    ))}
                    </Grid>
                </Container>
            </main>
            <footer className={classes.footer}>
                <Typography variant='h6' align='center' gutterBottom>
                    Footer
                </Typography>
                <Typography variant='subtitle1' align='center' color='text-secondary'>
                    Something here to give the footer a purpuse !!
                </Typography>
            </footer>
        </>
    )
}

export default App