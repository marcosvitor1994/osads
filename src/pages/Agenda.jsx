import React from "react";
import FullCalendar from "@fullcalendar/react"; // must go before plugins
import dayGridPlugin from "@fullcalendar/daygrid"; // a plugin!
import { Col, Container, Row } from "react-bootstrap";

const eventos = {
  events: [
    { title: `Ensaio Geral`, date: "2021-12-19" },
    { title: "event 2", date: "2021-12-24" },
  ],
  color: "yellow",
  textColor: "black",
};

function renderEventContent(eventInfo) {
  return (
    <>
      <b>{eventInfo.timeText}</b>
      <i>{eventInfo.event.title}</i>
    </>
  );
}

const Agenda = () => {
  return (
    <>
      <Container>
        <Row>
          <Col md={1}></Col>
          <Col md={10}>
            <FullCalendar
              timeZone="UTC-3"
              locale="br"
              plugins={[dayGridPlugin]}
              initialView="dayGridMonth"
              eventContent={renderEventContent}
              events={eventos}
            />
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Agenda;
