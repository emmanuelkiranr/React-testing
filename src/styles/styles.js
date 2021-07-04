import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  card: {
    position: "relative",
    margin: "20px",
    height: "150px",
    width: "250px",
    borderRadius: "15px",
    background:
      "linear-gradient(30deg, rgba(33,52,231,1) 10%, rgba(51,226,243,1) 100%)",
  },

  box: {
    position: "absolute",
    top: "20px",
    height: "35px",
    width: "35px",
    left: "20px",
    borderRadius: "4px",
    padding: "5px;",
    /* background: linear-gradient(30deg, rgba(33,52,231,1) 10%, rgba(51,226,243,1) 100%); */
    color: "white",
  },

  count: {
    position: "absolute",
    bottom: "35px",
    minWidth: "130px",
    color: "white",
    fontFamily: "poppins",
    fontSize: "35px",
    fontWeight: "500",
  },

  label: {
    position: "absolute",
    bottom: "20px",
    color: "white",
    fontFamily: "poppins",
    fontSize: "12px",
    letterSpacing: "0.4px",
  },

  pill: {
    position: "absolute",
    top: "100px",
    left: "155px",
    height: "30px",
    width: "75px",
    color: "white",
    /* border: 0.5px solid #ffffff30; */
    borderRadius: "40px",
    backgroundColor: "#ffffff1f",
  },

  percentage: {
    marginTop: "3px",
    textAlign: "center;",
    fontFamily: "poppins",
  },
}));

export default useStyles;
