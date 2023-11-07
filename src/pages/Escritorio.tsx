import { CloseCircleOutlined, RightOutlined } from "@ant-design/icons";
import { Button, Col, Divider, Row, Typography } from "antd";
import { useContext, useState } from "react";
import { getUser } from "../context/helpers/getUser";
import { Navigate, useNavigate } from "react-router-dom";
import { SocketContext } from "../context/SocketContext";
import { useContextUi } from "../context/hooks/useContextUi";
import { Ticket } from "./CrearTicket";

export const Escritorio = () => {
  useContextUi(false);
  const { socket } = useContext(SocketContext);

  const [user] = useState(getUser());
  const [ticketAssign, setTicketAssign] = useState<Ticket>();

  const navigate = useNavigate();

  if (!user.agente || !user.escritorio) {
    return <Navigate to="/ingresar" />;
  }

  const salir = () => {
    localStorage.removeItem("agente");
    localStorage.removeItem("escritorio");

    navigate("/ingresar");
  };
  const siguienteTicket = () => {
    socket.emit(
      "asignar-ticket",
      {
        agent: user.agente,
        desktop: user.escritorio,
      },
      (ticket: Ticket) => {
        setTicketAssign(ticket);
        console.log(ticketAssign);
      }
    );
  };

  return (
    <>
      <Row>
        <Col span={20}>
          <Typography.Title level={2}>{user.agente}</Typography.Title>
          <Typography.Text>
            Usted esta trabajando en el escritorio:
          </Typography.Text>

          <Typography.Text
            style={{ fontSize: 20, paddingLeft: 10 }}
            type="success"
          >
            {user.escritorio}
          </Typography.Text>
        </Col>
        <Col
          span={4}
          style={{
            display: "flex",
            justifyContent: "flex-end",
            paddingRight: 100,
          }}
        >
          <Button shape="round" danger onClick={salir}>
            <CloseCircleOutlined />
            salir
          </Button>
        </Col>
      </Row>
      <Divider />
      {ticketAssign ? (
        <Row>
          <Col>
            <Typography.Text>
              Esta atendiendo al ticket numero:{" "}
            </Typography.Text>
            <Typography.Text style={{ fontSize: 30 }} type="danger">
              {ticketAssign.number}
            </Typography.Text>
          </Col>
        </Row>
      ) : (
        <h1>no tienes ningun ticket asignado</h1>
      )}
      <Row>
        <Col
          offset={18}
          span={6}
          style={{
            display: "flex",
            justifyContent: "flex-end",
            paddingRight: 100,
          }}
        >
          <Button shape="round" type="primary" onClick={siguienteTicket}>
            <RightOutlined />
            Siguiente
          </Button>
        </Col>
      </Row>
    </>
  );
};
