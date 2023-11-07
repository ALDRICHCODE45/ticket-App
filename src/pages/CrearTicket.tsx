import { DownloadOutlined } from "@ant-design/icons";
import { Button, Col, Row, Typography } from "antd";
import { useContextUi } from "../context/hooks/useContextUi";
import { useContext, useState } from "react";
import { SocketContext } from "../context/SocketContext";
export interface Ticket {
  agent: null;
  desktop: null;
  id: string;
  number: number;
}

export const CrearTicket = () => {
  useContextUi(true);

  const { socket } = useContext(SocketContext);
  const [ticket, setTicket] = useState<Ticket>();

  const nuevoTicket = () => {
    socket.emit("solicitar-ticket", null, (ticket: any) => {
      setTicket(ticket);
    });
  };
  return (
    <>
      <Row
        style={{
          display: "flex",
          justifyContent: "center",
          justifyItems: "center",
          alignContent: "center",
        }}
      >
        <Col span={20} style={{ display: "flex", justifyContent: "center" }}>
          <Typography.Title level={3}>
            Presione el boton para un nuevo ticket
          </Typography.Title>
        </Col>

        <Col span={20} style={{ display: "flex", justifyContent: "center" }}>
          <Button
            type="primary"
            shape="round"
            icon={<DownloadOutlined />}
            size="large"
            onClick={nuevoTicket}
          >
            Nuevo Ticket
          </Button>
        </Col>
      </Row>
      {ticket && (
        <Row
          style={{
            marginTop: 100,
          }}
        >
          <Col
            span={10}
            offset={7}
            style={{
              display: "flex",
              justifyContent: "center",
              alignContent: "center",
            }}
          >
            <Typography.Text aria-level={2}>Su numero</Typography.Text>
          </Col>

          <Col
            span={4}
            offset={10}
            style={{
              display: "flex",
              justifyContent: "center",
              alignContent: "center",
              alignItems: "center",
            }}
          >
            <Typography.Text type="success" style={{ fontSize: 55 }}>
              {ticket.number}
            </Typography.Text>
          </Col>
        </Row>
      )}
    </>
  );
};
