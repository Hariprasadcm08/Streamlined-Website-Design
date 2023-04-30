import axios from 'axios';
import React from 'react'
import '../Styles/ContactusPage.css'

export default function ContactUsPage() {

    const submit = (e) => {
        e.preventDefault();
        let fName = document.getElementById("fName").value;
        let lName = document.getElementById("lName").value;
        let email = document.getElementById("email").value;
        let concern = document.getElementById("concern").value;

        if (fName && email && concern) {
            let obj = {
                firstName: fName,
                lastName: lName,
                email: email,
                description: concern
            }
            axios.post("http://localhost:8000/createContact", obj).then((data) => {
                console.log(data)
                window.location.assign('/')
            })
        }
        else {
            alert("Please fill all the required fields!")
        }


    }

    return (
        <div>
           
            <form className='form'>
                <h1>Contact Us!</h1>
                <label>First Name<span style={{ color: 'red' }}>*</span> :</label>
                <br></br>
                <input type="text" placeholder='first name' id="fName" />
                <br></br>
                <label>Last Name :</label>
                <br></br>
                <input type="text" placeholder='last name' id="lName" />
                <br></br>
                <label>Email<span style={{ color: 'red' }}>*</span> :</label>
                <br></br>
                <input type="email" placeholder='email' id="email" />
                <br></br>
                <label>Mention your Concern<span style={{ color: 'red' }}>*</span> :</label>
                <br></br>
                <textarea row="2" id="concern" />
                <br></br>
                <br></br>
                <button id='submit' onClick={submit}>Submit</button>
            </form>
        </div>
    )
}