import React from 'react';
import ReactDOM from 'react-dom';
import 'antd/dist/antd.css';
import { Modal, Button , Card, Checkbox, Input } from 'antd';
import TextArea from 'rc-textarea';
import Axios from 'axios'
import './style.css'
export class PaymentDrop extends React.Component {
  
  state = {
    loading: false,
    visible: true,
    valueofDay:null,
    visible1:false,
    amount : localStorage.getItem('Amount'),
    click : false,
  };

  loadScript(src) {
    return new Promise((resolve) => {
      const script = document.createElement('script')
      script.src = src
      script.onload = () => {
        resolve(true)
      }
      script.onerror = () => {
        resolve(false)
      }
      document.body.appendChild(script)
    })
  }

  
    async  displayRazorpay() {
      const res = await this.loadScript('https://checkout.razorpay.com/v1/checkout.js')
  
      if (!res) {
        alert('Razorpay SDK failed to load. Are you online?')
        return
      }
  
      const data = await fetch('https://api.razorpay.com/v1/orders', {
         method: 'POST' ,
         headers: { 
           'Content-Type': 'application/json' ,
           'Authorization': 'Basic cnpwX3Rlc3RfUUZ1ZmxDNm5kM1Q4ekI6ZjdlOG1qTUlCdjVvNEUxV0hDb2p3TG1D',

        },
          body: JSON.stringify({
          "amount": localStorage.getItem('Amount'),
          "currency": "INR",
          "receipt": "Receipt no. 1",
          "notes": {
            "notes_key_1": "Tea, Earl Grey, Hot",
            "notes_key_2": "Tea, Earl Grey… decaf."
          }
        }),
     }).then((t) =>
        t.json()
      )
  
      console.log(data)
  
      const options = {
        key: 'rzp_test_QFuflC6nd3T8zB' ,
        currency: data.currency,
        amount: localStorage.getItem('Amount').toString(),
        order_id: data.id,
        name: 'Donation',
        description: 'Thank you for nothing. Please give us some money',
        image: 'http://localhost:1337/logo.svg',
        handler: function (response) {
          alert(response.razorpay_payment_id)
          alert(response.razorpay_order_id)
          alert(response.razorpay_signature)
        },
        prefill: {
          name : 'Gaurav',
          email: 'sdfdsjfh2@ndsfdf.com',
          phone_number: '9899999999'
        }
      }
      const paymentObject = new window.Razorpay(options)
      paymentObject.open()
    }

  showModal = () => {
    this.setState({
      visible: true,
    });
  };

  showModal1 = () => {
    this.setState({
      visible1: true,
    });
  };

  handleOk = () => {
    this.setState({ loading: true });
    setTimeout(() => {
      this.setState({ loading: false, visible: false , visible1:false });
    }, 3000);
  };

  handleCancel = () => {
    this.setState({ visible: false });
  };

  handleSubmi = () => {
    console.log(this.props)
    this.setState({visible : false})
    window.location.href = "/Login";
  }

  handlefinal = () => {
    this.setState({
      visible1 : false
    })
    // this.displayRazorpay()
    const date = `${new Date().getDate()} '-' ${new Date().getMonth()} '-' ${new Date().getFullYear()} `
    const user = {amount : this.state.amount}
    localStorage.setItem('amount' , this.state.amount)
    localStorage.setItem('days' , this.state.valueofDay)
    localStorage.setItem('Time' ,  date  )
    window.location.href = "/Egrowopen";
  }

  Esgrowclick = () => {
    this.setState({
      click : true,
    })
  }

  render() {
    const { visible, visible1 , loading } = this.state;
    return (
      <>
      <div>
        <Modal
          footer = {null}
          visible={visible}
          closeIcon={null}
        >
          <Card>
              <div>
                  Google Pay
              </div>
          </Card>
          <Card>
              <div>
                  Debit Card
              </div>
          </Card>
          <Card>
              <div>
                  Net banking
              </div>
          </Card>
          <Card onClick = {() => this.Esgrowclick()} className={`selectEs${this.state.click}`} >
              <div >
                  EsGrow
              </div>
          </Card>
          <Card>
              <div>
                  UPI
              </div>
          </Card>
        <Button onClick={() => this.handleSubmi()}> Next </Button>
        </Modal>
      </div>
      <div>
        <Modal
          visible={visible1}
          footer={[
            <Button id="rzp-button1" onClick={() => this.handlefinal()}> Pay Now </Button>
          ]}
        >
  
             <div className="amount">
             <Input placeholder="Amount " value={this.state.amount} onChange={(e)=>this.setState({amount : e.target.value})}/> 
 
             </div>
              <div className = "time-duration">
                  <Input placeholder="Time Duration in Days" value={this.state.valueofDay} onChange={(e)=>this.setState({valueofDay : e.target.value})}/> 
              </div>
              <div>
                <p className = "term">Terms & Conditions</p>
                <div className= "check-box-handle">
                <Checkbox> Changes to be made </Checkbox> <br />
                <Checkbox> Not as per Agreement </Checkbox>
                </div>
              </div>
          
        
        </Modal>
        </div>
      </>
    );
  }
}

export default PaymentDrop