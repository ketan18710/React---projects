import React from 'react';
class App extends React.Component{
  constructor(props)
  {
    super(props)
    this.state = {
      lat : null,
      errMsg : null
    };
    window.navigator.geolocation.getCurrentPosition(
          (position) => {this.setState({lat : position.coords.latitude})},
          (err) => {this.setState({errMsg : err.message})}
    )
  }
  render()
  {
    if(!this.state.errMsg &&  this.state.lat){
      return <div> Latitude : {this.state.lat}</div>;
    }
    if(this.state.errMsg && !this.state.lat){
      return <div> Error : {this.state.errMsg}</div>;
    }
    return <div>Loading!</div>;
  }

}
export default App;
