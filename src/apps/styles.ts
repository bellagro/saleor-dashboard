import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles(
  theme => ({
    [theme.breakpoints.up("lg")]: {
      colName: {
        "&&": {
          width: "auto"
        }
      }
    },
    appContainer: {
      marginBottom: theme.spacing(3)
    },
    appContent: {
      "&:last-child": {
        padding: "0!important"
      },
      padding: 0
    },
    appName: {
      color: theme.palette.primary.main
    },
    colAction: {
      "&&": {
        paddingRight: theme.spacing(1)
      },
      textAlign: "right"
    },
    colInstallAction: {
      "& > *": {
        display: "inline-flex"
      }
    },
    colName: {
      paddingLeft: 0,
      width: theme.spacing(30)
    },
    colSpinner: {
      "& svg": {
        textAlign: "right"
      },
      paddingLeft: theme.spacing(3),
      paddingRight: theme.spacing(2)
    },
    error: {
      "& svg": {
        bottom: theme.spacing(0.2),
        marginLeft: theme.spacing(0.6),
        position: "relative"
      },
      color: theme.palette.error.main,
      margin: theme.spacing(0, 1, 0.7, 0)
    },
    hr: {
      border: "none",
      borderTop: `1px solid ${theme.palette.divider}`,
      height: 0,
      marginBottom: 0,
      marginTop: 0,
      width: "100%"
    },
    marketplaceContent: {
      "& button": {
        marginTop: theme.spacing(1)
      },
      "&:last-child": {
        padding: theme.spacing(2, 3, 0, 3)
      },
      padding: theme.spacing(1)
    },
    retryBtnCol: {
      paddingRight: theme.spacing(1),
      width: theme.spacing(14)
    },
    table: {
      tableLayout: "fixed"
    },
    tableRow: {
      cursor: "pointer"
    },
    text: {
      color: theme.palette.text.secondary
    },
    title: {
      flex: 1,
      fontWeight: 500,
      lineHeight: 1
    }
  }),
  { name: "WebhooksList" }
);
