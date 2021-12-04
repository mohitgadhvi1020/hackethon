import React , {useState , useEffect} from 'react'
import { Button, Card , Checkbox , Modal , notification} from 'antd';
import { CheckOutlined, CloseOutlined } from '@ant-design/icons'


const arr = [1,2,3,4,5]

export const Egrow = () => {
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [approve , changeApprove] = useState(false)
    const [decline , changeDecline] = useState(false)

    const showModal = () => {
      setIsModalVisible(true);
    };

    const amount = localStorage.getItem('amount')
    console.log('amount' , amount)
  
    const handleOk = () => {
      setIsModalVisible(false );
      changeDecline(true);
    };
   
    const HandleApprove = () => {
        changeApprove(true);
    }
    const openNotification = (msg) => {
        notification.open({
          message: 'NOTIFY',
          description:
            msg,
          className: 'custom-class',
          style: {
            width: 600,
          },
        });
      };

    useEffect(() => {
        if (isModalVisible){
            return () => {
                openNotification('Seller Has been notified of Your Issue, Your Payment is been hold for now !!')
            }
        }
        
    }, [isModalVisible] )

    useEffect(() => {
        if (approve){
            
          openNotification(' Your Payment has been released now !!')
          
        }
        
    }, [approve] )

    const handleCancel = () => {
      setIsModalVisible(false);
    };

    const handlemodalopen = () => {
        document.getElementById('id01').style.display='block'
    }
    const modalclose = () => {
        document.getElementById('id01').style.display='none'
    }
    const [openmodal , changeopenmodal] = useState(false)
    const dayremaining = localStorage.getItem('days')
    const timest = localStorage.getItem('Time')
    return (
    <div>
        <h1 style={{marginLeft: "200px" , marginRight:"100px"}}>Your Payment List Via EsGrow</h1>
        <div style={{marginLeft: "200px" , marginRight:"100px"}}>
        {/* {
            arr.map( fruit => (
                <Card key={fruit}>
                    <div>
                  <div className="paymentid"> Payment ID</div> 
                  <div className="payment-time-remaining"> Time remaining 2 hour</div>    
                  <div className="paymentamount"> Payment amount</div>    
                  <div className="payment-terms"> Payment Terms</div>    
                  <div className="paymentdate"> Payment date</div>    
                  </div>
                    <div className="accept-button" >
                    <CheckOutlined />
                    </div>
                    <div className="issue-button" onClick={()=>showModal()}>
                    <CloseOutlined />
                    </div>
                </Card>
            )
            )
        } */}
        <Card >
                    <div>
                      <div className="box">
                  <div className="paymentid" style={{fontWeight : 'bold' }}> Payment ID :  <span style = {  { fontWeight:'lighter' ,  margin : '30px'}}>1</span></div> 
                  <div className="payment-time-remaining" style={{fontWeight : 'bold' }}>DayRemaining : <span style = {  { fontWeight:'lighter' ,  margin : '15px'}}>{dayremaining}</span> </div>    
                  <div className="paymentamount" style={{fontWeight : 'bold' }}> Payment amount : <span style = {  { fontWeight:'lighter' ,  margin : '5px'}}>{amount}</span></div>    
                  <div className="payment-terms" style={{display:'flex' , fontWeight:'bold'}}> 
                  Payment Terms  : <div style={{ marginLeft : '10px' , fontWeight:'lighter'}}>
                  <div>Changes to be made in Services / Products </div> 
                  <div style={{}}>Not as per Agreement</div>
                  <div style={{}}>Others</div>
                    </div>  
                  </div>    
                  <div className="paymentdate" style={{ margin : "5px" , fontWeight:'bold', }}> Payment date : <span style={{marginLeft: '18px', fontWeight:'lighter'}}> {timest} </span></div>    
                  </div>
                  </div>
                  <div style={{marginTop:'10px'}}>
                  { !decline && !approve ? ( 
                      <div>
                          
                      <button style={{ width:'100px' , backgroundColor:'green' , color:'white'}} onClick={()=>HandleApprove()} >Accept</button>
          
                    
                      <button style={{ width:'100px', marginLeft:'20px', backgroundColor:'red' , color:'white'}} onClick={()=>showModal()} > Decline </button>
                
                      </div>
                      
                  ) : (
                      <div>
                          {approve ? <div>Approved !</div> : (
                            <div><div> On hold for now</div>
                            <Button onClick={()=>HandleApprove()}> Release Payment</Button>
                            </div>
                          )}
                      </div> )
                  }
                  </div>
                    
                </Card>
        </div>
        <Modal title="Decline Payment" visible={isModalVisible}  showOk= {false}  onCancel={handleCancel} footer={null}>
        <Checkbox> Not As per Agrrement </Checkbox>
            <br />
            <Checkbox> Changes to be made in Services / Products </Checkbox>
            <br />
            <Checkbox>Others</Checkbox><br />
            <Button onClick={handleOk}>Hold Payment</Button>
      </Modal>
    </div>
    )
}

{/* <div class="w3-container">
  <h2>W3.CSS Modal</h2>
  <button onclick="document.getElementById('id01').style.display='block'" class="w3-button w3-black">Open Modal</button>

  <div id="id01" class="w3-modal">
    <div class="w3-modal-content">
      <div class="w3-container">
        <span onclick="document.getElementById('id01').style.display='none'" class="w3-button w3-display-topright">&times;</span>
        <p>Some text. Some text. Some text.</p>
        <p>Some text. Some text. Some text.</p>
      </div>
    </div>
  </div>
</div> */}