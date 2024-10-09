import React from "react";
import { useNavigate } from "react-router-dom";
import { UserOutlined, LockOutlined, TwitterOutlined } from "@ant-design/icons";
import { Button, Input, notification, Form, Card, Row, Col } from "antd";
import { userService } from "../services/userService";

const Register = () => {
  const navigate = useNavigate();

  const onFinish = async (values: any) => {
    try {
      await userService.signupApi(values);
      notification.success({
        message: "Đăng ký thành công",
      });
      navigate("/login");
    } catch (error: any) {
      notification.warning({
        message: `${error.response?.data.message}`,
      });
      console.log("error", error.response?.data);
    }
  };
  // Validate
  const validateMessages = {
    required: "${label} là bắt buộc!",
    types: {
      email: "${label} không đúng định dạng!",
    },
    string: {
      min: "${label} ít nhất ${min} ký tự!",
    },
  };

  return (
    <div
      className="container"
      style={{
        height: window.innerHeight,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Card title="Đăng Ký Tài Khoản" style={{ width: 400 }}>
        <Form
          name="register"
          onFinish={onFinish}
          validateMessages={validateMessages}
          layout="vertical"
        >
          <Form.Item
            className="my-8"
            name="email"
            label="Email"
            rules={[{ required: true }, { type: "email" }]}
          >
            <Input prefix={<UserOutlined />} autoComplete="email" />
          </Form.Item>

          <Form.Item
            className="mb-8"
            name="passWord"
            label="Mật Khẩu"
            rules={[
              { required: true },
              { min: 6, message: "Mật khẩu tối thiểu 6 ký tự!" },
            ]}
          >
            <Input.Password
              prefix={<LockOutlined />}
              autoComplete="new-password"
            />
          </Form.Item>

          <Form.Item
            className="my-8"
            name="name"
            label="Họ Tên"
            rules={[{ required: true }]}
          >
            <Input autoComplete="name" />
          </Form.Item>

          <Form.Item
            className="my-8"
            name="phoneNumber"
            label="Số Điện Thoại"
            rules={[{ required: true }]}
          >
            <Input type="tel" autoComplete="tel" />
          </Form.Item>

          <Form.Item>
            <Row gutter={16}>
              <Col span={12}>
                <Button
                  htmlType="submit"
                  style={{
                    width: "100%",
                    color: "#4096ff",
                  }}
                  className="text-white"
                  size="large"
                >
                  Đăng Ký
                </Button>
              </Col>
              <Col span={12}>
                <Button
                  onClick={() => navigate("/login")}
                  style={{
                    width: "100%",
                    backgroundColor: "#4096ff",
                  }}
                  className="text-white"
                  size="large"
                  type="primary"
                >
                  Đăng Nhập
                </Button>
              </Col>
            </Row>
          </Form.Item>

          <div className="social d-flex mt-3">
            <Button
              style={{ backgroundColor: "rgb(59,89,152)" }}
              shape="circle"
              size="large"
            >
              <span className="font-weight-bold text-white">F</span>
            </Button>
            <Button
              type="primary"
              shape="circle"
              icon={<TwitterOutlined />}
              size="large"
              className="ml-3"
            />
          </div>
        </Form>
      </Card>
    </div>
  );
};

export default Register;
