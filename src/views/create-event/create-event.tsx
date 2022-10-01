import { Button, Container, Grid, TextInput, Title } from "@mantine/core";
import { DatePicker } from "@mantine/dates";
import { useNavigate } from "react-router-dom";
import { useForm } from "@mantine/form";
import React, { useId } from "react";
import { goToEventPage } from "views/event";

export interface CreateEventInput {
  streetName: string;
  startDate: Date;
  endDate: Date;
  state: string;
  city: string;
  postCode: string;
  name: string;
  host: string
}

const CreateEvent = () => {
  const navigate = useNavigate();
  const id = useId();
  const form = useForm<CreateEventInput>({
    validate: {
      startDate: (value) => {
        console.log(value);
        return value.toString().length > 1 ? null : "StartDate Required";
      },
      endDate: (value) =>
        value.toString().length > 1 ? null : "EndDate Required",
      state: (value) => (value.length > 1 ? null : "State Required"),
      city: (value) => (value.length > 1 ? null : "City Required"),
      name: (value) => (value.length > 1 ? null : "Event name Required"),
      host: (value) => (value.length > 1 ? null : "Event host Required"),
      postCode: (value) => (value.length > 1 ? null : "PostCode Required"),
      streetName: (value) => (value.length > 1 ? null : "Street name Required"),
    },
  });

  const handleSubmit = (values: CreateEventInput) => {
    navigate(goToEventPage(id), { state: values });
    form.reset();
  };

  return (
    <Container size="lg">
      <form onSubmit={form.onSubmit(handleSubmit)}>
        <Grid sx={{ height: "100vh", alignContent: "center" }}>
          <Grid.Col span={12}>
            <Title color="indigo" order={2}>
              Create Event
            </Title>
          </Grid.Col>
           <Grid.Col span={6}>
            <TextInput
              label="Event name"
              placeholder="name"
              {...form.getInputProps("name")}
            />
          </Grid.Col>
          <Grid.Col span={6}>
            <TextInput
              label="Host"
              placeholder="host"
              {...form.getInputProps("host")}
            />
            </Grid.Col>
          <Grid.Col span={12}>
            <Title color="indigo" order={3}>
              Event Dates
            </Title>
          </Grid.Col>
          <Grid.Col span={6}>
            <DatePicker
              placeholder="Pick date"
              label="Start date"
              withAsterisk
              {...form.getInputProps("startDate")}
            />
          </Grid.Col>
          <Grid.Col span={6}>
            <DatePicker
              placeholder="Pick date"
              label="End date"
              withAsterisk
              {...form.getInputProps("endDate")}
            />
          </Grid.Col>
          <Grid.Col span={12}>
            <Title color="indigo" order={3}>
              Event Location
            </Title>
          </Grid.Col>
          <Grid.Col span={6}>
            <TextInput
              label="State"
              placeholder="State"
              {...form.getInputProps("state")}
            />
          </Grid.Col>
          <Grid.Col span={6}>
            <TextInput
              label="City"
              placeholder="City"
              {...form.getInputProps("city")}
            />
          </Grid.Col>
          <Grid.Col span={6}>
            <TextInput
              label="Street name"
              placeholder="Street name"
              {...form.getInputProps("streetName")}
            />
          </Grid.Col>
          <Grid.Col span={6}>
            <TextInput
              label="Post code"
              placeholder="PostCode"
              {...form.getInputProps("postCode")}
            />
          </Grid.Col>
          <Grid.Col span={3}>
            <Button
              type="submit"
              variant="gradient"
              fullWidth
              gradient={{ from: "grape", to: "pink", deg: 45 }}
              size="lg">
              Next
            </Button>
          </Grid.Col>
        </Grid>
      </form>
    </Container>
  );
};

export default CreateEvent;
