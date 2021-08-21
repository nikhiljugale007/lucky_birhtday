import React from 'react';
import './App.css';
import { FaLinkedinIn,FaGithub,FaInstagram ,FaWindowClose} from "react-icons/fa";

function App() {    
    const [message,setMessage] = React.useState('');
    const [userDate,setUserDate] = React.useState();
    const [luckyNo,setLukcyNo] = React.useState();
    const [privacy,setPrivacy] = React.useState(true);


    // function to check weather number is lucky or not
    const checkYourLuck = () =>{
        // if user does not enter anything give warning
        if(userDate === undefined || luckyNo === undefined){
            setMessage("Please fill both feilds");
            return;
        }
        const dateArray = userDate.split("-");
        let sum = 0;
            dateArray.map((string) => {
            for (let i = 0; i < string.length; i++) {
                sum = sum + Number(string[i]);
            }
           });

        if(sum % luckyNo === 0){
        setMessage("Congratulation "+  luckyNo + " is a lucky number")
        }
        else{
            setMessage(luckyNo + " is not a lucky number")
        }
    }

  return (
    <div className="App">
        {/* display privacy statement  */}
        {
            privacy && 
            <div className="privacyContainer">
                <p>We do not store any of your data </p> <FaWindowClose onClick={()=>setPrivacy(false)}/>
            </div>
        }

        {/* main input container for date and number  */}
        <div className="container">
        
        <h1>Is your birthday lucky ?</h1>
            <label>Date of Birth:</label>
            <input  id="dateInput" type="date" value={userDate} onChange={(e) => setUserDate(e.target.value)} />
            <label > &nbsp; Lucky Number:</label>
            <input placeholder="Enter a number" value={luckyNo} onChange={(e) => setLukcyNo(e.target.value)} />
        <button onClick={checkYourLuck} >Check Number</button>
        <div className="messageContainer">{message}</div>
        
        </div>

        {/* footer  */}
        <footer >
            <p onClick={()=>setPrivacy(true)}>Privacy Terms</p>
            <p> &copy; | 2021 | nikhiljugale007</p>
            <div style={{fontSize:"30px"}}>
            <a href="https://www.instagram.com/nikhiljugale007/" target="_blank"><FaInstagram className="fa-10x"  /> </a>
            <a href="https://www.linkedin.com/in/nikhiljugale007/" target="_blank"><FaLinkedinIn /> </a>
            <a href="https://github.com/nikhiljugale007" target="_blank"><FaGithub /> </a>
            </div>
        </footer>
    </div>
  );
}

export default App;
