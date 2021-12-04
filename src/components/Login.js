import React  ,{useState}from 'react';
import ReactDOM from 'react-dom';
import 'antd/dist/antd.css';
import { Form, Input, Button, Checkbox , Modal } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';

export const Login = () => {
  const onFinish = (values) => {
      localStorage.setItem('username' , values.username)
    console.log('Received values of form: ', values);
    setVisible1(true)
  };
const [visible1, setVisible1] = useState(false)
const [valueofDay, setValueofday] = useState(0)
const [amount, setamount] = useState(localStorage.getItem('Amount'))

const  handlefinal = () => {
    setVisible1(false)
    // this.displayRazorpay()
    const date = `${new Date().getDate()} -  ${new Date().getMonth()} - ${new Date().getFullYear()} `
    const user = {amount : amount}
    localStorage.setItem('amount' , amount)
    localStorage.setItem('days' , valueofDay)
    localStorage.setItem('Time' ,  date  )
    window.location.href = "/Card";
  }

  return (
      <div className="central">
          <span style ={{marginLeft : '80px'}}> ESGrow Login</span>
    <Form
      name="normal_login"
      className="login-form"
      initialValues={{
        remember: true,
      }}
      onFinish={onFinish}
    >
      <Form.Item
        name="username"
        rules={[
          {
            required: true,
            message: 'Please input your Username!',
          },
        ]}
      >
        <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Username" />
      </Form.Item>
      <Form.Item
        name="password"
        rules={[
          {
            required: true,
            message: 'Please input your Password!',
          },
        ]}
      >
        <Input
          prefix={<LockOutlined className="site-form-item-icon" />}
          type="password"
          placeholder="Password"
        />
      </Form.Item>
      <Form.Item>
        <Form.Item name="remember" valuePropName="checked" noStyle>
          <Checkbox>Remember me</Checkbox>
        </Form.Item>
      </Form.Item>
      <Form.Item>
        <Button type="primary" htmlType="submit" className="login-form-button">
          Log in
        </Button>
      </Form.Item>

    </Form>
    <div>
        <Modal
          visible={visible1}
          footer={[
            <Button id="rzp-button1" onClick={() => handlefinal()}> Pay Now </Button>
          ]}
        >
  
             <div className="amount">
               <label> Amount to be Paid</label>
             <Input placeholder="Amount " value={amount} onChange={(e)=> setamount(e.target.value) }/> 
 
             </div>
              <div className = "time-duration">
                  <label>No. of Days to hold payment </label>
                  <Input placeholder="Time Duration in Days" value={valueofDay} onChange={(e)=>setValueofday(e.target.value) }/> 
              </div>
              <div>
                <p className = "term">Terms & Conditions</p>
                <div className= "check-box-handle">
                <Checkbox> Changes to be made in Services / Products </Checkbox> <br />
                <Checkbox> Not as per Agreement </Checkbox><br />
                <Checkbox> Others</Checkbox>
                </div>
              </div>
          
        
        </Modal>
        </div>
</div>    
  );
};

