import { createStyles } from "@mantine/core";

export const useEventInfoStyles = createStyles((theme) => ({
  iconWrapper: {
    boxShadow: theme.shadows.md,
    borderRadius: theme.defaultRadius,
    padding: theme.spacing.sm,
    display: "grid",
    placeItems: "center",
    width: 56,
    height: 56,
  },
  icon: {
    color: theme.primaryColor,
  },
  arrow: {
    color: theme.colors.gray[5],
  },
}));
