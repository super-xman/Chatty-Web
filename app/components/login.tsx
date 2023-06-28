"use client";
import React from "react";
import { Button, Form, Input } from "antd";
import styles from "./login.module.scss";
import { Loading, useHasHydrated } from "./home";
import classNames from "classnames";
import "antd/dist/reset.css";
import { useEntryStore } from "../store/entry";

const Login: React.FC = () => {
  const setMode = useEntryStore((state) => state.setMode);
  const [form] = Form.useForm();

  return (
    <div className={classNames(styles["tight-container"], styles.container)}>
      <Form
        layout="vertical"
        form={form}
        className={styles.form}
        wrapperCol={{ span: "all" }}
      >
        <h1>登录 Chatty</h1>
        <p>
          还没有注册账号？
          <a
            className={styles["primary-link"]}
            onClick={() => setMode("register")}
          >
            注册
          </a>
        </p>
        <Form.Item name="accountId" rules={[{ required: true, message: "" }]}>
          <Input placeholder="用户名" />
        </Form.Item>
        <Form.Item name="password" rules={[{ required: true, message: "" }]}>
          <Input.Password placeholder="密码" />
        </Form.Item>
        <Button type="primary" htmlType="submit" className={styles.button}>
          登录
        </Button>
        <p>
          <a className={styles.link} onClick={() => setMode("forget")}>
            忘记密码?
          </a>
        </p>
      </Form>
    </div>
  );
};

const Forget: React.FC = () => {
  const setMode = useEntryStore((state) => state.setMode);
  const [form] = Form.useForm();

  return (
    <div className={classNames(styles["tight-container"], styles.container)}>
      <Form
        layout="vertical"
        form={form}
        className={styles.form}
        wrapperCol={{ span: "all" }}
      >
        <h1>重置密码</h1>
        <p>不用担心，我们会帮你重置密码</p>
        <div className={styles["reset-phone-container"]}>
          <Form.Item
            name="accountId"
            rules={[{ required: true, message: "" }]}
            className={styles["input-item"]}
          >
            <Input placeholder="手机号" />
          </Form.Item>
          <Button type="primary" className={styles.button}>
            发送验证码
          </Button>
        </div>
        <Form.Item name="accountId" rules={[{ required: true, message: "" }]}>
          <Input placeholder="验证码" />
        </Form.Item>
        <Button type="primary" htmlType="submit" className={styles.button}>
          重置密码
        </Button>
        <p>
          <a className={styles.link} onClick={() => setMode("login")}>
            返回
          </a>
        </p>
      </Form>
    </div>
  );
};

const Register: React.FC = () => {
  const setMode = useEntryStore((state) => state.setMode);
  const [form] = Form.useForm();

  return (
    <div className={classNames(styles["tight-container"], styles.container)}>
      <Form
        layout="vertical"
        form={form}
        className={styles.form}
        wrapperCol={{ span: "all" }}
      >
        <h1>注册账号</h1>
        <p>
          已经有账号？
          <a
            className={styles["primary-link"]}
            onClick={() => setMode("login")}
          >
            登录
          </a>
        </p>
        <Form.Item
          name="accountId"
          rules={[{ required: true, message: "" }]}
          style={{ marginBottom: 0 }}
        >
          <Input placeholder="用户名" />
        </Form.Item>
        <Form.Item name="password" rules={[{ required: true, message: "" }]}>
          <Input.Password placeholder="密码" />
        </Form.Item>
        <Form.Item
          name="comfirmedPassword"
          rules={[{ required: true, message: "" }]}
        >
          <Input.Password placeholder="确认密码" />
        </Form.Item>
        <Form.Item name="email">
          <Input placeholder="邮箱（可选）" />
        </Form.Item>
        <Form.Item name="phone">
          <Input placeholder="手机（可选）" />
        </Form.Item>
        <Button type="primary" htmlType="submit" className={styles.button}>
          注册
        </Button>
        <p>手机、邮箱仅用于找回密码</p>
      </Form>
    </div>
  );
};

export const Entry = () => {
  const mode = useEntryStore((state) => state.mode);
  const loading = !useHasHydrated();
  if (loading) {
    return <Loading />;
  }
  switch (mode) {
    case "register":
      return <Register />;
    case "forget":
      return <Forget />;
    default:
      return <Login />;
  }
};
