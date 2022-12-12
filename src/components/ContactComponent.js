import React from "react";
import Title from "./Title";

class ContactComponent extends React.Component {
  state = {
    fullName: "",
    email: "",
    subject: "",
    message: "",
  };
  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  render() {
    const { fullName, email, subject, message } = this.state;
    return (
      <section className="py-5">
        <div className="row">
          <div className="col-10 mx-auto col-md-6 my-3">
            <Title title="Contact Us" />
            <form
              className="mt-5"
              action="https://formspree.io/kevinkhalifa911@gmail.com"
              method="POST"
            >
              <div className="form-group">
                <input
                  onChange={this.handleChange}
                  value={this.state.fullName}
                  type="text"
                  name="fullName"
                  className="form-control"
                  placeholder="John Smith"
                />
              </div>
              <div className="form-group">
                <input
                  onChange={this.handleChange}
                  value={this.state.email}
                  type="email"
                  name="email"
                  className="form-control"
                  placeholder="eamil@email.com"
                />
              </div>
              <div className="form-group">
                <input
                  onChange={this.handleChange}
                  value={this.state.subject}
                  type="text"
                  name="subject"
                  className="form-control"
                  placeholder="Subject"
                />
              </div>
              <div className="form">
                <textarea
                  onChange={this.handleChange}
                  value={this.state.message}
                  name="message"
                  rows="10"
                  className="form-control"
                  placeholder="Description"
                />
              </div>
              <button
                style={{ marginTop: "20px" }}
                className={`fluid ui button primary ${
                  fullName && email && message && subject !== ""
                    ? ""
                    : "disabled"
                }`}
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </section>
    );
  }
}

export default ContactComponent;
