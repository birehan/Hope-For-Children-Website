const useStyles = () => {
  return {
    container: {
      "flex-direction": { xs: "row" },
      width: { xs: "90%", xl: "80%" },
      margin: { xs: "50px auto", lg: "0px auto" },
      gap: { xs: "30px", lg: "50px" },
      position: { xs: "relative", lg: "absolute" },
      bottom: { xs: "0", lg: "-150px" },
      zIndex: 100,
      left: 0,
      right: 0,
    },
    card: {
      display: "flex",
      flexDirection: "column",
      gap: "0px",
      alignItems: "center",
      justifyContent: "center",
      background: "#FFFFFF",
      boxShadow: "4px 4px 30px 18px rgba(0, 0, 0, 0.08)",
      borderRadius: "30px",
      // height: "300px",
    },
    media: {
      height: "200px",
      backgroundSize: "cover",
      backgroundPosition: "top center",
    },
    title: {
      fontWeight: "bold",
      color: "#00b1f4",
    },
    description: {
      marginBottom: "10px",
    },
    button: {
      borderRadius: "50px",
      padding: "5px 30px",
      color: "#00b1f4",
      border: "1px solid #00b1f4",
      "&:hover": {
        backgroundColor: "#00b1f4",
        color: "white",
        border: "1px solid white",
      },
    },
    landingContainer: {
      height: { xs: "500px", md: "600px", lg: "800px" },
      width: "100%",
      position: "relative",
    },
    landingText: {
      color: "#E9ECEB",
      fontStyle: "normal",
      fontWeight: 700,
      fontSize: { xs: "40px", md: "48px", xl: "60px" },
      lineHeight: "72px",
      textAlign: "center",
    },
    landingDesc: {
      color: "#E9ECEB",
      fontStyle: "normal",
      fontSize: { xs: "22px", md: "26px" },
      textAlign: "center",
      lineHeight: { xs: "32px", md: "72px" },
      fontWeight: "500",
    },
    swipeImage: {
      backgroundSize: "cover",
      width: "100%",
      height: { xs: "500px", md: "600px", lg: "800px" },
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    },
    donateButton: {
      background: "#00B1F4",
      textDecoration: "none",
      borderRadius: "30px",
      color: "white",
      padding: "10px 20px",
      border: "1px solid #00B1F4",
      "&:hover": {
        color: "#00B1F4",
        border: "1px solid #00B1F4",
        transition: "400ms all ease-in-out",
      },
      fontWeight: 500,
    },
    videoButton: {
      background: "transparent",
      textDecoration: "none",
      borderRadius: "30px",
      color: "white",
      padding: "10px 30px",
      border: "1px solid white",
      "&:hover": {
        background: "#00B1F4",

        color: "white",
        border: "1px solid #00B1F4",
        transition: "400ms all ease-in-out",
      },
      fontWeight: 500,
    },
    buttonContainer: {
      flexDirection: "row",
      gap: "30px",
      justifyContent: "center",
      alignItems: "center",
      marginTop: "10px",
    },
  };
};

export default useStyles;