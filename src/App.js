import { Typography, AppBar, CardActions, CardContent, CardMedia, CssBaseline, Grid, Toolbar, Container } from '@material-ui/core'
import PhotoCameraIcon from '@material-ui/icons/PhotoCamera';

const App = () => {
    return (
        <>
            <CssBaseline />
            <AppBar position="relative">
                <Toolbar>
                    <photoCameraIcon />
                    <Typography variant='h6'> 
                        Photo Album
                    </Typography>
                </Toolbar>
            </AppBar>
            <main>
                <div>
                    <Container maxWidth='sm'>
                        <Typography variant='h2' align='center' color='textPrimary' gutterBottom>
                            photoAlbum
                        </Typography>
                        <Typography variant='h5' align='center' color='textSecondary'  paragraph>
                            Hello everyOne this is a photoAlbum and I'm trying to make this sentence as long as possible so we can see how it look like on the screen
                        </Typography>
                    </Container>
                </div>
            </main>
        </>
    )
}

export default App