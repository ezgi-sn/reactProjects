import React, { Component } from 'react'

class ActivityDecision extends Component {
    constructor(props){
        super(props);
        this.state={
            latitude:0,
            error:''
        }
    }
    activityDecision(latitude){
        const currentMonth=new Date().getMonth();
        if(latitude<0){
            if(currentMonth>9 && currentMonth<3){
                
                return 'You can go to swimming pool';
            }
            else{
                return 'You can go to ski';
            }
        }
        else{
            if(currentMonth>9 && currentMonth<3){
                return 'You can go to ski';
            }
            else{
                return 'You can go to swimming pool';
            }
        }

    }
  render() {
    const {latitude,error}=this.state;
    window.navigator.geolocation.getCurrentPosition((position) => {
        console.log(position)
        this.setState({
            latitude:position.coords.latitude
        })
      },
      (e)=>{
        this.setState({
            error:e.message
        })
      }
      );
      
      if(latitude!==0&&!error){
        const activity=this.activityDecision(latitude);
        return(
            <div>
            Latitude : {latitude}
            <br />
            {activity}
          </div>
        )
      }
      else if(latitude===0&&error){
        return(
            <div>
           An ERROR occured : {error}
            
          </div>
        )
      }
    return (
      <div>
        Loading...
      </div>
      
    )
  }
}

export default ActivityDecision
