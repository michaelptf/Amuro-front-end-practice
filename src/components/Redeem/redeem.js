//React
import React from 'react';

//MUI
import { Button, Grid, Paper, Divider, Typography, Link, ThemeProvider, Box, TextField, IconButton, } from '@mui/material';
import { useTheme as UseTheme } from '@mui/material';
import CssBaseline from '@mui/material/CssBaseline';
import { Container } from '@mui/system';
import QrCodeScannerIcon from '@mui/icons-material/QrCodeScanner';
import InputAdornment from '@mui/material/InputAdornment';

//UI
// import theme from '../../themes';
import logo from '../images/amuro_logo.png';
import UseStyles from './styles';

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

const redeem = () => {
    const themedStyles = UseStyles();
    const theme = UseTheme();
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
        
        {/* After Signin Unit */}
        <Grid className={themedStyles.signinGrid}>
          <Paper elevation={2} className={themedStyles.signinPaper}>

            {/* Show user name and wallet number */}
            <Typography align='center' className={themedStyles.userInfoText}>
              User connected as SZUYU WEI (Custodian wallet)
            </Typography> 
            <Box className={themedStyles.redeemCodeBox} >
              <div className='walletStatusTextContainer'>
                <Typography sx={{color: 'text.grey'}}>
                    Connected to 0xasckmk2o...
                </Typography> 
              </div>
              <div className='walletStatusSeperator' />
              <Button className={themedStyles.disconnectButton} >
                <Typography>
                    disconnect
                </Typography>
              </Button>
            </Box> 
            <Divider flexItem className={themedStyles.divider} sx={{
              px: '210px !important',
              marginTop: 1,
            }}>
              <Typography sx={{color:'text.grey'}}>
                  And enter your redemption code
              </Typography>
            </Divider>
            <TextField fullWidth variant="outlined" className={themedStyles.redeemTextField} InputProps={{
              endAdornment: (
              <InputAdornment position="start">
                <IconButton>
                  <QrCodeScannerIcon />
                </IconButton>
              </InputAdornment>
              ),}}>
            </TextField>

            <Box className={themedStyles.submitButtonBox} >
              <Button variant="contained" className={themedStyles.submitButton} >
                Submit
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

export default redeem