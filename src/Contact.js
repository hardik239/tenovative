import React, { useState } from 'react'
import { notEmpty, ValidateEmail, ValidatePhone } from './functions'
import querySvg from './queryImage.svg'
import emailjs from 'emailjs-com'
import swal from "sweetalert"

const Contact = () => {

    const [userDetails, setUserDetails] = useState({
        name:'',
        email:'',
        phone:'',
        message:''
    })

    const handleChange = (e) => {
        const { name, value } = e.target
        setUserDetails((prev) => {
            return {...prev , [name]:value }
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        
        if(notEmpty(userDetails.name) && ValidateEmail(userDetails.email) && ValidatePhone(userDetails.phone) && notEmpty(userDetails.message)){
                swal({
                    title:"Please Wait",
                    text: "We are Sending Mail",
                  })
            emailjs.sendForm(`${process.env.REACT_APP_SERVICE_ID}`, `${process.env.REACT_APP_TEMPLATE_ID}`, e.target,`${process.env.REACT_APP_USER_ID}`)
            .then(() => {
                swal({
                    title:"!!! Good Job !!!",
                    text: "Email Sent Successfully ... We Will Contact You Soon!!",
                    icon: "success"
                  })
                setUserDetails({
                    name:'',
                    email:'',
                    phone:'',
                    message:''
                })
            },() => {
                swal({
                    title:"Oppsss",
                    text: "Something Went Wrong",
                    icon: "warning"
                  })
            });
        }
    }

    return (
        <div className="row d-flex justify-content-center align-items-center mt-md-5 ">
            <div className="col-md-5 mt-md-5">
                <img src={querySvg} alt="Question" className="img-fluid" />
            </div>
            <div className="col-md-2"></div>
            <div className="col-md-5 px-4">
                <h1 className="text-primary fw-bold text-center mb-2">Ask Your Query</h1>
                <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <label className="form-label">Name</label>
                        <input  type="text"
                                value={userDetails.name}
                                onChange={handleChange} 
                                className="form-control" 
                                placeholder="Enter Your Name"
                                name="name" />
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Email</label>
                        <input  type="email"
                                value={userDetails.email}
                                onChange={handleChange} 
                                className="form-control"
                                placeholder="Enter Your Email" 
                                name="email" />
                        <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Phone</label>
                        <input  type="number" 
                                value={userDetails.phone}
                                onChange={handleChange}
                                placeholder="Enter Your Phone Number" 
                                className="form-control" 
                                name="phone" />
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Enter Your Query</label>
                        <textarea className="form-control" 
                                  rows="3"
                                  value={userDetails.message}
                                  onChange={handleChange} 
                                  placeholder="Leave a Query here" 
                                  name="message">
                        </textarea>
                    </div>
                    <button type="submit" className="w-100 mb-4 btn btn-primary">Send Query</button>
                </form>
            </div>
        </div>
    )
}

export default Contact
