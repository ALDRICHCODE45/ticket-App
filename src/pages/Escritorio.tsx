import { CloseCircleOutlined, RightOutlined } from "@ant-design/icons";
import { Button, Col, Divider, Row, Typography } from "antd";

export const Escritorio = () => {
  const salir = () => {
    console.log("salir");
  };
  const siguienteTicket = () => {
    console.log("siguiente ticket");
  };
  return (
    <>
      <Row>
        <Col span={20}>
          <Typography.Title level={2}>Aldrich</Typography.Title>
          <Typography.Text>
            Usted esta trabajando en el escritorio:
          </Typography.Text>

          <Typography.Text type="success"> 5</Typography.Text>
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
      <Row>
        <Col>
          <Typography.Text>Esta atendiendo al ticket numero: </Typography.Text>
          <Typography.Text style={{ fontSize: 30 }} type="danger">
            55
          </Typography.Text>
        </Col>
      </Row>
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
