import { Card, Col, Divider, List, Row, Tag, Typography } from "antd";
import { useContextUi } from "../context/hooks/useContextUi";
import { useContext, useEffect, useState } from "react";
import { SocketContext } from "../context/SocketContext";
import { Ticket } from "./CrearTicket";
import { getAssingnedTickets } from "./helpers/getAssingnedTickets";

export const Cola = () => {
  useContextUi(true);
  const { socket } = useContext(SocketContext);
  const [tickets, setTickets] = useState<Ticket[]>([]);

  useEffect(() => {
    socket.on("new ticket assigned", (tickets) => {
      console.log(tickets);
      setTickets(tickets);
    });

    return () => {
      socket.off("new ticket assigned");
    };
  }, [socket]);

  useEffect(() => {
    getAssingnedTickets().then((data) => {
      if (data) {
        setTickets(data);
      }
    });
  }, []);

  return (
    <>
      <Typography.Title level={1}>Atendiendo al cliente </Typography.Title>
      <Row>
        <Col span={12}>
          <List
            dataSource={tickets.slice(0, 3)}
            renderItem={(ticket) => (
              <List.Item>
                <Card
                  style={{ width: 300, marginTop: 16 }}
                  actions={[
                    <Tag color="volcano">{ticket.agent}</Tag>,
                    <Tag color="magenta">Escritorio: {ticket.desktop}</Tag>,
                  ]}
                >
                  <Typography.Title>No. {ticket.number}</Typography.Title>
                </Card>
              </List.Item>
            )}
          />
        </Col>
        <Col span={12}>
          <Divider>Historial</Divider>
          <List
            dataSource={tickets.slice(3)}
            renderItem={(item) => (
              <List.Item>
                <List.Item.Meta
                  title={`ticket No ${item.number}`}
                  description={
                    <>
                      <Typography.Text type="secondary">
                        En el escritorio
                      </Typography.Text>
                      <Tag color="magenta">{item.number}</Tag>
                      <Typography.Text type="secondary">
                        Agente:
                      </Typography.Text>
                      <Tag color="volcano">{item.agent}</Tag>
                    </>
                  }
                ></List.Item.Meta>
              </List.Item>
            )}
          />
        </Col>
      </Row>
    </>
  );
};
