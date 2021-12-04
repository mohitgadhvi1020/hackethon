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
  
    const handleOk = () => {
      setIsModalVisible(false );
      changeDecline(true);
    };
   
    const HandleApprove = () => {
        changeApprove(true);
    }
    const openNotification = (msg) => {
        notification.open({
          message: 'ON HOLD',
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
            return () => {
                openNotification(' Your Payment has been released now !!')
            }
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
    return (
    <div>
        <h1>Your Payment List Via Egrow</h1>
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
                  <div className="paymentid"> Payment ID</div> 
                  <div className="payment-time-remaining"> Time remaining 2 hour</div>    
                  <div className="paymentamount"> Payment amount</div>    
                  <div className="payment-terms"> Payment Terms</div>    
                  <div className="paymentdate"> Payment date</div>    
                  </div>
                  { !decline && !approve ? ( 
                      <div>
                          <div className="accept-button"  >
                      <CheckOutlined onClick={()=>HandleApprove()} />
                      </div>
                      <div className="issue-button" >
                      <CloseOutlined onClick={()=>showModal()} />
                      </div>
                      </div>
                      
                  ) : (
                      <div>
                          {approve ? <div>Approved !</div> : <div> On hold for now</div>}
                      </div> )
                  }
                    
                </Card>
        </div>
        <Modal title="Decline Modal" visible={isModalVisible}  showOk= {false}  onCancel={handleCancel}>
        <Checkbox> Not As per Agrrement </Checkbox>
            <br />
            <Checkbox> Changes to be Made </Checkbox>
            <br />
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