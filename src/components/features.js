import React, { Component } from "react";

class Feature extends Component {
  state = {
    checkboxChecked: false,
    allTweets: true
  };

  checking = () => {
    if (this.state.checkboxChecked == false) {
      this.setState({ checkboxChecked: true });
    } else {
      this.setState({ checkboxChecked: false });
    }
  };

  render() {
    return (
      <div>
        <form onSubmit={this.checking}>
          <label>
            Only my teets
            <input type="checkbox" onChange={this.checking} />
          </label>
        </form>
      </div>
    );
  }
}

export default Feature;
