import {
  Button,
  Card,
  Container,
  Grid,
  Image,
  MediaQuery,
  Stack,
  Text,
  Title,
} from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";
import React from "react";
import { Link } from "react-router-dom";
import { createEventPageUrl } from "views/create-event/url";
import { useHomeStyles } from "./home.styles";

const Home = () => {
  const largeScreen = useMediaQuery("(min-width: 1200px)");
  const { classes } = useHomeStyles();

  return (
    <Container size="lg">
      <Grid className={classes.gridContainer} align="center">
        <Grid.Col orderLg={1} order={2} lg={6} md={12}>
          <Stack align="center">
            <Image
              height={largeScreen ? "80vh" : "50vh"}
              fit="fill"
              src="https://s3.us-west-2.amazonaws.com/secure.notion-static.com/ea95af2d-7f06-4f25-859c-9069519053a7/Landing_page_image.svg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20221001%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20221001T054306Z&X-Amz-Expires=86400&X-Amz-Signature=7f34c6cc2a05560246cc83059a7e6260a7bf67e5aa966b42d21cb1fc50c563a3&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22Landing%2520page%2520image.svg%22&x-id=GetObject"
              alt="hero"
            />

            <MediaQuery largerThan="lg" styles={{ display: "none" }}>
              <Button
                variant="gradient"
                gradient={{ from: "grape", to: "pink", deg: 45 }}
                sx={{ width: "max-content" }}
                size="lg">
                🎉 Create my event
              </Button>
            </MediaQuery>
          </Stack>
        </Grid.Col>
        <Grid.Col orderLg={2} order={1} lg={6} md={12}>
          <Stack align={largeScreen ? "flex-end" : "center"}>
            <Title
              className={classes.header}
              align={largeScreen ? "end" : "center"}
              order={1}>
              Imagine if <br />
              <Text
                variant="gradient"
                gradient={{ from: "grape", to: "pink", deg: 45 }}
                component="span">
                Snapchat
              </Text>
              <br />
              had events.
            </Title>
            <Text
              align={largeScreen ? "end" : "center"}
              size="lg"
              className={classes.headerSub}
              color="gray.5">
              Easily host and share events with your friends across any social
              media.
            </Text>
            <MediaQuery smallerThan="lg" styles={{ display: "none" }}>
              <Button
                variant="gradient"
                gradient={{ from: "grape", to: "pink", deg: 45 }}
                component={Link}
                to={createEventPageUrl}
                size="lg">
                🎉 Create my event
              </Button>
            </MediaQuery>
          </Stack>
        </Grid.Col>
      </Grid>
    </Container>
  );
};

export default Home;
