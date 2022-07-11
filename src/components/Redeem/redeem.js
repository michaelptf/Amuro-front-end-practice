//React
import React from 'react';

//MUI
import { Button, Grid, Paper, Divider, Typography, Link, ThemeProvider, Box, TextField, IconButton} from '@mui/material';
import CssBaseline from '@mui/material/CssBaseline';
import { Container } from '@mui/system';
import QrCodeScannerIcon from '@mui/icons-material/QrCodeScanner';
import InputAdornment from '@mui/material/InputAdornment';

//UI
import theme from '../../themes';
import logo from '../images/amuro_logo.png';

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
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Container maxWidth="md" className='homepage' sx={{
        display: 'flex !important',
        flexDirection: 'column',
        alignSelf: 'center',
        p: 8
      }} >
        <Box sx={{
          display: 'flex',
          flex: 2,
          flexDirection: 'column',
          justifyContent: "center",
        }}>

        {/* Alert Unit */}
          <Grid className='alert_info' sx={{
            background: 'rgba(50, 102, 194, 0.08)',
            borderRadius: 1,
            height: 40,
            backdropFilter: 'blur(4)',
            display: 'flex',
            justifyContent: "center",
            alignItems: 'center'
          }}>
              <Typography className='alert_text' variant="h6" component="h1" sx={{
                color: 'text.secondary',
                textAlign: 'center',
                fontStyle: 'normal',
                alignItems: 'center',
                lineHeight: '140%',
                letterSpacing: 0.15,
              }}>Revonation in progress, stay tuned!</Typography>
          </Grid>

        {/* Logo and Solgan Unit */}
          <Grid container sx={{
            justifyContent: 'center',
            padding: 3
          }}>
            <Box component="img" src={logo} className='amuro_logo_homepage' alt="Amuro Logo" sx={{
            display: "block",
            maxWidth: '100%',
            width: 400,
            height: 77.5,
            marginTop: 6,
            }}>
            </Box> 
          </Grid>
           
          <Typography variant='h5' align='center' className='slogan' sx={{
            color: 'text.parimary',   
            fontWeight: 600,
            lineHeight: "120%",
          }}>NFTs For The Mass</Typography>
          
          {/* Signin Unit */}
          <Grid className='signin_grid' sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '16px 0 32px 0'
          }}>
            <Paper elevation={2} className='signin_paper' sx={{ 
              my: { xs: 3, md: 6 },
              p: { xs: 2, md: 3 },
              width: 845,
              height: 320,
              }}>
                <Typography align='center'>
                    User connected as SZUYU WEI (Custodian wallet)
                </Typography> 
                <Box sx={{
                    border: '1px solid',
                    borderRadius: '6.25rem',
                    maxWidth: '100%',
                    width: 420,
                    height: 36,
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'center',
                    alignItems: 'center',
                    marginTop: '1rem',
                    marginLeft: '190px',
                    padding: '0.5rem 1.25rem',
                    color: 'text.grey',
                }}>
                    <div className='walletStatusTextContainer'>
                        <Typography sx={{
                            color: 'text.grey'
                        }}>
                            Connected to 0xasckmk2o...
                        </Typography> 
                    </div>
                    <div className='walletStatusSeperator' />
                    <Button sx={{
                      textTransform: 'none',
                    }}>
                      <Typography className='disconnectText'>
                          disconnect
                      </Typography>
                    </Button>
                </Box> 
                <Divider flexItem sx={{
                px: 24,
                marginTop: 1,
              }}>
                <Typography sx={{color:'text.grey'}}>
                    And enter your redemption code
                </Typography>
              </Divider>
              <TextField fullWidth variant="outlined" InputProps={{
                endAdornment: (
                <InputAdornment position="start">
                  <IconButton>
                    <QrCodeScannerIcon />
                  </IconButton>
                </InputAdornment>
                ),}}
                sx={{
                maxWidth: "50%",
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                marginLeft: 25,
                marginRight: 10,
                marginTop: 2
                }}>
              </TextField>

              <Box sx={{
                display: 'flex',
                flex: 2,
                flexDirection: 'column',
                justifyContent: "center",
                alignItems: 'center',
              }}>
                
               
                <Button variant="contained" sx={{
                  maxWidth: "100%",
                  width: '400px !important',
                  height: 50,
                  bgcolor: '#C22A37',
                  borderRadius: "4px",
                  fontSize: 20,
                  textTransform: 'none',
                  margin: 2,
                  "&:hover":{
                    bgcolor: '#C22A37'
                  }
                }}>
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