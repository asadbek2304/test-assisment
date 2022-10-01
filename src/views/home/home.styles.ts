import { createStyles } from "@mantine/core";

export const useHomeStyles = createStyles((theme) => ({
  gridContainer: {
    height: "100vh",
    alignItems: "center",
    [theme.fn.smallerThan("sm")]: {
      alignContent: "center",
    },
  },
  header: {
    [theme.fn.smallerThan("sm")]: {
      fontSize: 36,
      lineHeight: "41px",
    },
  },
  headerSub: {
    [theme.fn.smallerThan("sm")]: {
      fontSize: 16,
    },
  },
}));
