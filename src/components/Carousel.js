import React, { Component } from "react";
import "./Carousel.css";
import { images } from "../data/CarouselData";
// you can explore more - and check as how to use materiul ui
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos'
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

// implement the class below
class Carousel extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         value:0,
      }
    }

    random(){
        let set=this.state.value
        if(set>1){
            set=0;
        }
        else{
            set+=1;
        }
        this.setState({
           
            value:set,
        })
    }

    back(){
        let set=this.state.value
        if(set<=0){
            set=2;
        }
        else{
            set-=1;
        }
        this.setState({
           
            value:set,
        })
    }

  render (){
    let data=images[this.state.value]
    return(
        <div>
            <div className="click">
            <ArrowBackIosIcon className="back" onClick={()=>{this.back()}}/>
            </div>
            <h1 className="style">{data.title}</h1>
            <img className="img" src={data.img} alt='' />
            <h1 className="style2">{data.subtitle}</h1>
            <div className="click2">
            <ArrowForwardIosIcon onClick={()=>this.random()} className='for' />
            </div>
        </div>
       
    )
  }
}

export default Carousel;