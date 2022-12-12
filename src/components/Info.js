import React from "react";
import Title from "./Title";
import aboutBcg from "../images/aboutBcg.jpeg";
class Info extends React.Component {
  state = {
    toggleText: false,
  };
  renderText = () => {
    this.setState({ toggleText: !this.state.toggleText });
  };
  render() {
    return (
      <section className="py-5">
        <div className="container">
          <div className="row">
            <div className="col-10 mx-auto col-md-6 my-3">
              <img
                src={aboutBcg}
                alt="About Company"
                className="img-fluid img-thumbnail"
                style={{ background: "var(--darkGrey)" }}
              />
            </div>
            <div className="col-10 mx-auto col-md-6 my-3">
              <Title title="about us" />
              <p className="text-lead text-muted my-3">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Dignissimos itaque neque ex velit accusamus eaque eius ea,
                obcaecati voluptatum officia!
              </p>
              <p className="text-lead text-muted my-3">
                {this.state.toggleText ? (
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea
                    cumque qui blanditiis soluta eius reprehenderit dolor maxime
                    quo, cum numquam. Lorem ipsum, dolor sit amet consectetur
                    adipisicing elit. Ex soluta placeat illum quos enim. Magni,
                    voluptate cum odio adipisci officia dolor et doloremque
                    molestiae quae repellendus a, ipsa ex distinctio.
                  </p>
                ) : (
                  <p></p>
                )}
              </p>
              <button
                className="main-link"
                style={{ marginTop: "2rem" }}
                onClick={this.renderText}
              >
                {this.state.toggleText ? "less info" : " more info"}
              </button>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Info;
