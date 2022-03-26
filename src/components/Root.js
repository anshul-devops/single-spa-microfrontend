import React from "react";
import Home from './Home.js';

//export default function Root() {

export default class Root extends React.Component{

  constructor(props){
    super(props)
  }
  componentDidCatch(error, info) {
    console.log(error);
    console.log(info);
  }

  render() {
    console.log(this.props)
    return (
      <Home context={this.props.context}></Home>
    );
  }
}
