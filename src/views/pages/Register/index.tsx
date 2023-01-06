import React from "react";
import { Button, Checkbox, Form, Input, Space } from "antd";

export default function Register() {
  const onFinish = (values: any) => {
    console.log("Success:", values);
    alert(JSON.stringify(values));
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <div>
      <label htmlFor="username-input">Username</label>
      <input id="username-input" />
      <label id="username-label">Username</label>
      <input aria-labelledby="username-label" />
      <label>
        Username <input />
      </label>
      <label>
        <span>Username</span>
        <input />
      </label>
      <input aria-labelledby="Username" placeholder="Test" />
    </div>
    // <Space
    //   align="center"
    //   direction="horizontal"
    //   style={{ flexDirection: "column" }}
    // >
    //   <h1>Login Text</h1>
    //   <Form
    //     name="basic"
    //     labelCol={{ span: 8 }}
    //     wrapperCol={{ span: 16 }}
    //     initialValues={{ remember: true }}
    //     onFinish={onFinish}
    //     onFinishFailed={onFinishFailed}
    //     autoComplete="off"
    //   >
    //     <Form.Item
    //       label="Username"
    //       name="username"
    //       rules={[{ required: true, message: "Please input your username!" }]}
    //     >
    //       <Input />
    //     </Form.Item>
    //     <Form.Item
    //       label="Password"
    //       name="password"
    //       rules={[{ required: true, message: "Please input your password!" }]}
    //     >
    //       <Input.Password />
    //     </Form.Item>
    //     <div>
    //       <Form.Item
    //         name="remember"
    //         valuePropName="checked"
    //         wrapperCol={{ offset: 8, span: 16 }}
    //         noStyle
    //       >
    //         <Checkbox>Remember me</Checkbox>
    //       </Form.Item>
    //     </div>
    //     <div style={{ marginTop: "1rem" }}>
    //       <Form.Item wrapperCol={{ offset: 8, span: 16 }} noStyle>
    //         <Button type="primary" htmlType="submit">
    //           Login
    //         </Button>
    //       </Form.Item>
    //     </div>
    //   </Form>
    // </Space>
  );
}
