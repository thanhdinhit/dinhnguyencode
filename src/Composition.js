import React, { Component } from "react";

class CloseableTab extends Component {
  constructor() {
    super();
    this.tpItem = () => {
      console.log("hello, item clicked");
    };
  }
  render() {
    console.log(this.tpItem);
    return (
      <div>
        <ProductList itemChange={this.tpItem} />
      </div>
    );
  }
}

class ProductList extends Component {
  render() {
    console.log(this.props);

    return null;
  }
}

export default CloseableTab;
