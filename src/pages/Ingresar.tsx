import { LoginOutlined } from "@ant-design/icons";
import { Button, Divider, Form, Input, InputNumber, Typography } from "antd";
import "../index.css";
import { useNavigate } from "react-router-dom";
const { Title, Text } = Typography;

export const Ingresar = () => {
  const navigate = useNavigate();
  const onFinish = (values: any) => {
    console.log("Success:", values);
    navigate("/escritorio");
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log("Failed:", errorInfo);
  };

  type FieldType = {
    agente?: string;
    escritorio?: string;
  };

  return (
    <>
      <Title level={2}>Ingresar</Title>
      <Text>Ingrese su nombre y numero de escritorio</Text>
      <Divider />
      <Form
        name="basic"
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 16 }}
        style={{ maxWidth: 600 }}
        initialValues={{ remember: true }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="on"
      >
        <Form.Item<FieldType>
          label="Nombre del agente"
          name="agente"
          rules={[{ required: true, message: "Por favor ingrese su nombre!" }]}
        >
          <Input />
        </Form.Item>

        <Form.Item<FieldType>
          label="Escritorio"
          name="escritorio"
          rules={[
            { required: true, message: "Ingrese el numero de escritorio!" },
          ]}
        >
          <InputNumber min={1} max={99} />
        </Form.Item>

        <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
          <Button type="primary" htmlType="submit">
            {/* <SaveOutlined /> */}
            <LoginOutlined />
            Ingresar
          </Button>
        </Form.Item>
      </Form>
    </>
  );
};
