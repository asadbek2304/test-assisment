import { createStyles } from "@mantine/core";

export const useEventStyles = createStyles((theme) => ({
  gridContainer: {
    height: "100vh",
    alignItems: "center",
    [theme.fn.smallerThan("sm")]: {
      alignContent: "flex-start",
    },
  },
  header: {
    [theme.fn.smallerThan("sm")]: {
      fontSize: 28,
    },
  },
  headerSub: {
    [theme.fn.smallerThan("sm")]: {
      fontSize: 16,
    },
  },
}));
