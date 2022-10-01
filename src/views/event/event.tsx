import { Container, Grid, Image, Stack, Text, Title } from "@mantine/core";
import { useLocation } from "react-router-dom";
import { CreateEventInput } from "views/create-event";
import EventInfoItem from "./components/event-info-item";
import { useEventStyles } from "./event.styles";

const Event = () => {
  const { classes } = useEventStyles();
  const { state } = useLocation();

  return (
    <Container size="lg">
      <Grid className={classes.gridContainer} align="center">
        <Grid.Col orderLg={2} order={1} lg={6} md={12}>
          <Stack align="center">
            <Image
              fit="fill"
              src="https://s3.us-west-2.amazonaws.com/secure.notion-static.com/17d6299f-f287-469c-a403-b8ab9d75aa62/Birthday_cake.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20221001%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20221001T070838Z&X-Amz-Expires=86400&X-Amz-Signature=cb7b880fc882fd6f57e1d28a10beb5f63ab41d135f7b3e2c543c398d8914e28e&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22Birthday%2520cake.png%22&x-id=GetObject"
              alt="event_image"
            />
          </Stack>
        </Grid.Col>
        <Grid.Col orderLg={1} order={2} lg={6} md={12}>
          <Stack>
            <Title color="indigo" className={classes.header} order={2}>
              {state.name}
            </Title>
            <Text size="md" className={classes.headerSub} color="gray.4">
              Hosted by {state.host}
            </Text>

            <EventInfoItem
              startTime={state.startDate}
              endTime={state.endDate}
            />
            <EventInfoItem
              state={state.state}
              streetName={state.streetName}
              city={state.city}
              postCode={state.postCode}
            />
          </Stack>
        </Grid.Col>
      </Grid>
    </Container>
  );
};

export default Event;
