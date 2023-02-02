import React, { useEffect, useState } from "react";
import { Button, Checkbox, Form, Input, Space } from "antd";

export default function Register() {
  const [form] = Form.useForm();
  const [data, setData] = useState<{ username?: string; password?: string }>();
  const onFinish = async (values: any) => {
    setData(values);
  };
  const [posts, setPosts] = useState<any>([
    {
      id: 1,
      title: "First2 post",
      body: "This is the first post",
    },
  ]);

  useEffect(() => {
    // fetch("https://jsonplaceholder.typicode.com/posts")
    //   .then((response) => {
    //     if (response.ok) {
    //       return response.json();
    //     } else {
    //       throw Error();
    //     }
    //   })
    //   .then((postsData) => {
    //     setPosts(postsData);
    //   })
    //   .catch(() => {});
    setPosts([
      {
        id: 1,
        title: "First post",
        body: "This is the first post",
      },
    ]);
  }, []);

  return (
    <>
      {posts?.length > 0 && (
        <ul>
          {posts.slice(0, 10).map((item: any) => (
            <li key={item?.id}>{item?.title}</li>
          ))}
        </ul>
      )}
      <Space
        align="center"
        direction="horizontal"
        style={{ flexDirection: "column", paddingTop: "2rem" }}
      >
        <h1>Login Page</h1>
        {data?.username && (
          <span data-testid="username">{`UserName : ${data?.username}`}</span>
        )}
        {data?.password && (
          <span data-testid="password">{`password : ${data?.password}`}</span>
        )}
        <Form form={form} name="basic" onFinish={onFinish} scrollToFirstError>
          <Form.Item
            label="Username"
            name="username"
            rules={[
              {
                required: true,
                message: "Please input your username!",
              },
              {
                type: "email",
                message: "Invalid email format",
              },
            ]}
          >
            <Input aria-label="username" placeholder="Enter your email" />
          </Form.Item>
          <Form.Item
            label="Password"
            name="password"
            rules={[{ required: true, message: "Please input your password!" }]}
          >
            <Input.Password
              aria-label="password"
              placeholder="Enter your password"
            />
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
            <Form.Item
              wrapperCol={{ offset: 8, span: 16 }}
              noStyle
              shouldUpdate
            >
              {() => (
                <Button
                  type="primary"
                  htmlType="submit"
                  disabled={
                    !form.isFieldsTouched(["username", "password"]) ||
                    form.getFieldsError().filter(({ errors }) => errors.length)
                      .length > 0
                  }
                >
                  Login
                </Button>
              )}
            </Form.Item>
          </div>
        </Form>
      </Space>
    </>
  );
}
