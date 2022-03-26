import React from 'react';

export default class Home extends React.Component {
  constructor() {
    super()
  }

  componentDidMount() {
  }

  render() {
    return (
      <div>
        <h1 >Hola, I'm a {JSON.parse(this.props.context).name}</h1>
      </div>
    );
  }
}
