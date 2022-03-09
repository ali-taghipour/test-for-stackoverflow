import { makeStyles } from '@mui/styles';

export const styles = makeStyles((theme) => ({
    unit:{
        fontSize: "12px",
        background: "rgb(242, 242, 242)",
    },
    unitInput:{
        background: "transparent",
        width: "60px",
        border: "none",
        outline: "none",
        textAlign: "center",
        "&:clink":{
            outline: "none"
        },
        "&:focus":{
            outline: "none"
        }
    }
}));