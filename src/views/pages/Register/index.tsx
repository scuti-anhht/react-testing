import React, { useState } from "react";
import { Button, Checkbox, Form, Input, Space } from "antd";

export default function Register() {
  const [data, setData] = useState<{ username?: string; password?: string }>();
  const onFinish = (values: any) => {
    console.log("Success:", values);
    setData(values);
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log("Failed:", errorInfo);
  };

  const [state, setState] = useState("Initial State");

  const changeState = () => {
    setState("Initial State Changed");
  };

  return (
    <Space
      align="center"
      direction="horizontal"
      style={{ flexDirection: "column" }}
    >
      <h1>Login Text</h1>
      {data?.username && (
        <span data-testid="username">{`UserName : ${data?.username}`}</span>
      )}
      {data?.password && (
        <span data-testid="password">{`password : ${data?.password}`}</span>
      )}
      <Form
        name="basic"
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 16 }}
        initialValues={{ remember: true }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <Form.Item
          label="Username"
          name="username"
          rules={[{ required: true, message: "Please input your username!" }]}
        >
          <Input aria-label="username" />
        </Form.Item>
        <Form.Item
          label="Password"
          name="password"
          rules={[{ required: true, message: "Please input your password!" }]}
        >
          <Input.Password aria-label="password" />
        </Form.Item>
        <div>
          <Form.Item
            name="remember"
            valuePropName="checked"
            wrapperCol={{ offset: 8, span: 16 }}
            noStyle
          >
            <Checkbox>Remember me</Checkbox>
          </Form.Item>
        </div>
        <div style={{ marginTop: "1rem" }}>
          <Form.Item wrapperCol={{ offset: 8, span: 16 }} noStyle>
            <Button type="primary" htmlType="submit">
              Login
            </Button>
          </Form.Item>
        </div>
      </Form>
    </Space>
  );
}
