import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  flexGrow: { flexGrow: 1 },
  heightFull: { height: "100%" },
  flow: { "& > * + *": { marginTop: theme.spacing(2) } },
}));
