import { login } from "models/test/actions"
import { Button as MuiButton } from "@mui/material"
import withProps from "./withProps"

const Button = ({login}) => {

    return (
<MuiButton onClick={login}>Submit</MuiButton>
    )
}

export default withProps({},{login})(Button)