
import { makeStyles } from '@mui/styles'

const useStyles = makeStyles((theme) => ({
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
        height: 398,
    },
    redeemText: {
        padding: 10,
        fontWeight: '500 !important',
        letterSpacing: 1,
    },
    metamaskButton: {
        width: 409,
        height: 38,
        borderRadius: 2,
        background: '#3266C2 !important',         
    },
    metamaskButtonText: {
        fontWeight: 600,
        fontSize: 36,
        textTransform: 'none',
        color: 'text.white',        
    },
    metamaskButtonNote: {
        padding: 12,
        fontSize: 12,
        letterSpacing: 0.4,
    },
    learnText: {
        color: 'link.blue',
        paddingLeft: 230
    },
    divider: {
        display: 'flex',
        px: 240,   
        marginLeft: '200px !important',
        marginRight: '200px !important',
    },
    buttonBox: {
        display: 'flex',
        flex: 2,
        flexDirection: 'column',
        justifyContent: "center",
        alignItems: 'center',
    },
    googleButton: {
        color: 'grey',
        maxWidth: '260px',
        borderRadius: '8px',
        width: '260px',
        textDecoration: 'none'
    },
    facebookButton: {
        maxWidth: '260px',
        borderRadius: '8px',
        width: '260px',
        textDecoration: 'none'
    },
    phoneButton: {
        maxWidth: 250,
        width: 250,
        height: 50,
        marginTop: '8px !important',
        backgroundColor: 'green !important',
        borderRadius: "4px",
        fontSize: '19px !important',
        textTransform: 'none !important',
        "&:hover":{
        bgcolor: 'darkgreen !important'
        }
    }
}))

export default useStyles;