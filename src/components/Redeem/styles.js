import { makeStyles } from '@mui/styles'

const UseStyles = makeStyles((theme) => ({
  mainContainer: {
    display: 'flex !important',
    flexDirection: 'column !important',
    alignSelf: 'center !important',
    padding: '20px !important',
    marginTop: '50px'
  },
  boxContainer: {
      display: 'flex',
      flex: 2,
      flexDirection: 'column',
      justifyContent: "center",
  },
  alertContainer: {
      background: 'rgba(50, 102, 194, 0.08)',
      borderRadius: 1,
      height: 40,
      backdropFilter: 'blur(4)',
      display: 'flex',
      justifyContent: "center",
      alignItems: 'center'
  },
  alertText: {
      color: 'text.secondary',
      textAlign: 'center',
      fontStyle: 'normal',
      lineHeight: '140%',
      letterSpacing: 0.15,
  },
  logoContainer: {
      justifyContent: 'center',
      padding: 16,
      marginTop: '20px'
  },
  logoBox: {
      display: "block",
      maxWidth: '100%',
      width: 400,
      height: 77.5,
      marginTop: 24,
  },
  sloganText: {
      color: 'text.parimary',   
      fontWeight: 600,
      lineHeight: "120%",
  },
  signinGrid: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '16px 0 32px 0'
  },
  signinPaper: {
      my: { xs: 3, md: 6 },
      p: { xs: 2, md: 3 },
      width: 845,
      height: 316,
      
  },
  userInfoText: {
    marginTop: '16px !important',
  },
  redeemCodeBox: {
    border: '1px solid',
    borderRadius: '6.25rem',
    maxWidth: '100%',
    width: 420,
    height: 36,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '0.5rem 1.25rem',
    color: 'grey',
    margin: '20px',
    marginLeft: '210px'
  },
  disconnectButton: {
    textTransform: 'none !important'
  },
  divider: {
    px: '24px !important',
    marginTop: 1,
  },
  redeemTextField: {
    maxWidth: "50%",
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: '210px !important',
    marginTop: "20px !important"
  },
  submitButtonBox: {
    display: 'flex',
    flex: 2,
    flexDirection: 'column',
    justifyContent: "center",
    alignItems: 'center',
  },
  submitButton: {
    maxWidth: "100%",
    width: '420px !important',
    height: 50,
    backgroundColor: '#C22A37 !important',
    borderRadius: "4px",
    fontSize: '18px !important',
    textTransform: 'none',
    margin: '20px !important',
    "&:hover":{
      backgroundColor: '#C22A36 !important'
    }
  }
}))

export default UseStyles;