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
        const summer={
            text:'You can go to swimming pool',
            icon:'sun'
        }
        const winter={
            text:'You can go to ski',
            icon:'snow'
        }
        if(latitude<0){
            if(currentMonth>9 && currentMonth<3){
                
                return summer;
            }
            else{
                return winter;
            }
        }
        else{
            if(currentMonth>9 && currentMonth<3){
                return winter;
            }
            else{
                return summer;
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
            <h2 className="ui header">
  <i className={`${activity.icon} outline icon`}></i>
  <div className="content">
    {activity.text}
  </div>
</h2>
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
