export const eventPageUrl = "/event/:id/";

export const goToEventPage = (id: string) => eventPageUrl.replace(":id", id)
