//React
import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { FacebookLoginButton, GoogleLoginButton } from "react-social-login-buttons";

//MUI
import { Button, Grid, Paper, Divider, Typography, Link, ThemeProvider, Box, useTheme} from '@mui/material';
import CssBaseline from '@mui/material/CssBaseline';
import { Container } from '@mui/system';
import LocalPhoneRoundedIcon from '@mui/icons-material/LocalPhoneRounded';

//UI
// import theme from '../../themes';
import logo from '../images/amuro_logo.png';
import useStyles from './styles';

function Copyright() {
  return (
    <Typography variant="body2" color="text.grey" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://amuro.io">
        Amuro
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}


const Homepage = () => {
  const themedStyles = useStyles();
  const theme = useTheme();
  return (
    <ThemeProvider theme={theme}>
      
      <Container maxWidth="md" className={themedStyles.mainContainer}>
        <CssBaseline />
        <Box className={themedStyles.boxContainer} >

        {/* Alert Unit */}
          <Grid className={themedStyles.alertContainer} >
              <Typography variant="h6" component="h1" className={themedStyles.alertText}>
                Revonation in progress, stay tuned!
              </Typography>
          </Grid>

        {/* Logo and Solgan Unit */}
          <Grid container className={themedStyles.logoContainer}>
            <Box component="img" src={logo} className={themedStyles.logoBox} alt="Amuro Logo">
            </Box> 
          </Grid>
           
          <Typography variant='h5' align='center' className='sloganText'>
            NFTs For The Mass
          </Typography>
          
          {/* Signin Unit */}
          <Grid className={themedStyles.signinGrid}>
            <Paper elevation={2} className={themedStyles.signinPaper}>
              <Typography align='center' variant='h6' className={themedStyles.redeemText}>
                Redeem NFT with:
              </Typography>
              <Box textAlign="center">
                <Button variant="contained" className={themedStyles.metamaskButton} component={RouterLink} to="/redeem">
                  <Typography className={themedStyles.metamaskButtonText} >
                    Connect To Metamask
                  </Typography>
                </Button>
                <Typography variant='subtitle2' align='center' className={themedStyles.metamaskButtonNote} >
                  Please note: Only Metamask provides a non-custodian wallet 
                </Typography>
              </Box>
              <Link href="#" underline="always" className={themedStyles.learnText}>
                {'LEARN MORE'}
              </Link>
              
              <Divider flexItem className={themedStyles.divider} >
                <Typography sx={{color:'text.grey'}}>
                  Or Sign in with
                </Typography>
              </Divider>

              {/* Signin with other option unit*/}
              <Box className={themedStyles.buttonBox} >
                <RouterLink to="/redeem" className='googlebutton'>
                  <GoogleLoginButton>
                    <span>Sign in with Google</span>
                  </GoogleLoginButton>
                </RouterLink>
                <RouterLink to="/redeem" className='facebookbutton'>
                <FacebookLoginButton >
                    <span>Sign in with Facebook</span>
                </FacebookLoginButton>
                </RouterLink>
               
                <Button className={themedStyles.phoneButton} variant="contained" component={RouterLink} to="/redeem" startIcon={<LocalPhoneRoundedIcon />} >
                  Sign in with Phone
                </Button>
              </Box>
             
            </Paper>
          </Grid>
          <Copyright />
          </Box>
      </Container>
    </ThemeProvider>
  )
}

export default Homepage