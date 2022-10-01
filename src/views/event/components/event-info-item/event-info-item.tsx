import { Box, Group, Stack, Text } from "@mantine/core";
import React from "react";
import { IoIosArrowForward } from "react-icons/io";
import { IoCalendarOutline } from "react-icons/io5";
import { GrLocation } from "react-icons/gr";
import { IconType } from "react-icons";
import { useEventInfoStyles } from "./event-info-item.styles";

interface EventInfoItemProps {
  startTime: string;
  endTime: string;
  city: string;
  state: string;
  postCode: string;
  streetName: string;
}

const EventInfoItem: React.FC<Partial<EventInfoItemProps>> = ({
  startTime,
  endTime,
  streetName,
  state,
  city,
  postCode,
}) => {
  const { classes } = useEventInfoStyles();

  return (
    <Group position="apart" align="center">
      <Group align="center">
        <Box className={classes.iconWrapper}>
          {streetName ? <GrLocation className={classes.icon} size={24} /> : <IoCalendarOutline className={classes.icon}  size={24} />}
        </Box>
        <Stack spacing={0}>
          <Text color="indigo" weight={700} size="md">
            {startTime ? new Date(startTime).toLocaleString() : streetName}
          </Text>
          {streetName ? (
            <Text size="md" color="gray.5">
              {city}, {state}, {postCode}
            </Text>
          ) : (
            <Text size="md">
              to {" "}
              <Text component="span" weight={700}>
                {new Date(endTime || "").toLocaleString()}
              </Text> {" "}
              UTC{" "}
              {-new Date().getTimezoneOffset() / 60}
            </Text>
          )}
        </Stack>
      </Group>
      <IoIosArrowForward className={classes.arrow} />
    </Group>
  );
};

export default EventInfoItem;
