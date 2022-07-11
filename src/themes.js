import { createTheme } from "@mui/material/styles";

export const theme = createTheme({
    palette: {
        text: {
          primary: '#3266C2',
          secondary: '#214482',
          white: '#ffffff',
          grey: '#808080',
        },
        background: {
            default: "#ffffff",
        },
        link: {
            blue: '#214482',
        },
        button: {
            blue: '#3266C2',
            green: 'green'
        }
    },
    typography: {
        fontFamily: [
          'Montserrat',
        ].join(','),
        fontSize: 12,
        h4: {
            fontSize: 80,
        }
      },
});

export default theme