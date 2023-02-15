import {Box,Typography, useTheme} from "@mui/material";

import { tokens } from "../theme";


const Header =({title, subtitle})=> {

    const theme= useTheme();
    const colors= tokens(theme.pallete.mode);


    return (
        <Box mb="30px">
            <Typography
                variant="h2"
                color={colors.grey[100]}
                fontWeight="bold"
                sx={{mb: "5px"}}
            >
                {title}
            </Typography>
            <Typography
                variant="h5"
                color={colors.greenaccent[400]}
            >
                {subtitle}
            </Typography>
        </Box>
    )

}
export default Header