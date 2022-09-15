import React, { Component } from "react";
import { Link } from "react-router-dom";
import { GrClose } from "react-icons/gr";
import { BsVimeo } from "react-icons/bs";
import { FaFacebookF, FaInstagram, FaYoutube } from "react-icons/fa";
import Data from "../../../api/data.json";

export default class ModalServices extends Component {
  render() {
    let modelStyle = {
      display: "block",
      background: "rgba(0,0,0,0.8)",
    };
    return (
      <div className="modal show fade" style={modelStyle}>
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h3 className="modal-title text-capitalize">{this.props.name}</h3>
              <button
                type="button"
                className="close"
                onClick={this.props.hide}
                data-bs-dismiss="modal"
                aria-label="Close"
              >
                <GrClose />
              </button>
            </div>
            <div className="modal-body">
              <div className="text-center">
                <img src={this.props.img} alt="model" />
              </div>
              <p className="pt-3 text-black">{this.props.description}</p>
              <ul>{this.props.itemservices}</ul>
            </div>
            <div className="modal-footer flex justify-content-between">
             
            </div>
          </div>
        </div>
      </div>
    );
  }
}
