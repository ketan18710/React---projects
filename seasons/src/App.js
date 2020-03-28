import React from 'react';
import Season from './SeasonDisplay'
import Spinner from './Spinner'
class App extends React.Component{
  constructor(props)
  {
    super(props)
    this.state = {
      lat : null,
      errMsg : null
    };

  }
  componentDidMount()
  {
    window.navigator.geolocation.getCurrentPosition(
      (position) => {this.setState({lat : position.coords.latitude})},
      (err) => {this.setState({errMsg : err.message})}
  )
  }
  renderContent(){
    if(!this.state.errMsg &&  this.state.lat){
      return <Season lat={this.state.lat} />;
    }
    if(this.state.errMsg && !this.state.lat){
      return <div> Error : {this.state.errMsg}</div>;
    }
    return <Spinner />;
  }
  render()
  {
    return(
      <div className="border red">
          {this.renderContent()}
      </div>
    )
  }

}
export default App;
