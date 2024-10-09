import React, { useState } from "react";
import { Button, Form, Input, notification, Card } from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";
import { userService } from "../services/userService";

interface LoginForm {
  email: string;
  password: string;
}

export const Login = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const onFinish = async (values: LoginForm) => {
    setLoading(true);
    try {
      const result = await userService.signinApi(values);
      notification.success({
        message: "Đăng nhập thành công",
      });
      navigate("/dashboard");
    } catch (error: any) {
      notification.error({
        message: "Đăng nhập thất bại",
        description: error.response?.data?.message || "Đã có lỗi xảy ra",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <Card
      className="flex items-center justify-center min-h-screen bg-gray-100 p-6"
      style={{ width: 400 }}
    >
      <div className="w-full max-w-md bg-white p-8 rounded-lg shadow-lg">
        <h2 className="text-2xl font-semibold text-center mb-6">Đăng Nhập</h2>
        <Form
          name="login"
          onFinish={onFinish}
          initialValues={{ email: "", password: "" }}
          layout="vertical"
          className="space-y-4"
        >
          <Form.Item
            name="email"
            label="Email"
            rules={[
              { required: true, message: "Vui lòng nhập email" },
              { type: "email", message: "Email không đúng định dạng" },
            ]}
          >
            <Input
              prefix={<UserOutlined className="site-form-item-icon" />}
              placeholder="Email"
              size="large"
              className="rounded-lg"
              autoComplete="email"
            />
          </Form.Item>

          <Form.Item
            name="password"
            label="Mật khẩu"
            rules={[{ required: true, message: "Vui lòng nhập mật khẩu" }]}
          >
            <Input.Password
              prefix={<LockOutlined className="site-form-item-icon" />}
              placeholder="Mật khẩu"
              size="large"
              className="rounded-lg"
              autoComplete="current-password"
            />
          </Form.Item>

          <Form.Item>
            <Button
              type="primary"
              htmlType="submit"
              size="large"
              loading={loading}
              className="w-full bg-blue-500 hover:bg-blue-600 text-white rounded-lg text-center"
            >
              Đăng Nhập
            </Button>
          </Form.Item>
          <div className="flex justify-between mt-4">
            <a href="#" className="text-sm text-blue-500 hover:underline">
              Forgot Password?
            </a>
            <a href="#" className="text-sm text-blue-500 hover:underline">
              Sign Up
            </a>
          </div>
        </Form>
      </div>
    </Card>
  );
};
