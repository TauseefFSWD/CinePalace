import axios from "axios";
import React from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import "./Contact.css";
import Navbar from "./Navbar";
import Footer from "./Footer";

function Contact() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    const userInfo = {
      name: data.name,
      email: data.email,
      message: data.message,
    };
    try {
      await axios.post("https://getform.io/f/agdynmwb", userInfo);
      toast.success("Your message has been sent");
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong");
    }
  };

  return (
    <div>
      <Navbar />
      <div className="contact-container">
        <h1 className="contact-header">Contact Us</h1>
        <p className="contact-description">
          We would love to hear from you! Please fill out the form below to get
          in touch with us.
        </p>
        <form onSubmit={handleSubmit(onSubmit)} className="contact-form">
          <div className="form-group">
            <label className="form-label">Full Name</label>
            <input
              {...register("name", { required: "Full Name is required" })}
              className="form-input"
              id="name"
              type="text"
              placeholder="Enter your full name"
            />
            {errors.name && (
              <span className="form-error">{errors.name.message}</span>
            )}
          </div>
          <div className="form-group">
            <label className="form-label">Email Address</label>
            <input
              {...register("email", { required: "Email Address is required" })}
              className="form-input"
              id="email"
              type="email"
              placeholder="Enter your email address"
            />
            {errors.email && (
              <span className="form-error">{errors.email.message}</span>
            )}
          </div>
          <div className="form-group">
            <label className="form-label">Message</label>
            <textarea
              {...register("message", { required: "Message is required" })}
              className="form-input"
              id="message"
              placeholder="Enter your message"
              rows="4"
            />
            {errors.message && (
              <span className="form-error">{errors.message.message}</span>
            )}
          </div>
          <button type="submit" className="form-button">
            Send Message
          </button>
        </form>
      </div>
      <Footer />
    </div>
  );
}

export default Contact;
