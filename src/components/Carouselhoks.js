


import React,{useState} from 'react'
import "./Carousel.css";
import { images } from "../data/CarouselData";
// you can explore more - and check as how to use materiul ui
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos'
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

function Carouselhoks() {


    const [image,change] = useState(0);
 const prev=()=>{
    const index = image === 0?images.length-1:image-1;
    change(index)
    }


const next =()=>{
    const index = image === images.length-1?0:image+1;
    change(index)
    }

        
    let data=images[image];
    // console.log(data)

        return(
           
            <div>
                <div className="click">
                <ArrowBackIosIcon className="back" onClick={prev}/>
                </div>
                <h1 className="style">{data.title}</h1>
                <img className="img" src={data.img} alt='' />
                <h1 className="style2">{data.subtitle}</h1>
                <div className="click2">
                <ArrowForwardIosIcon  className='for' onClick={next}/>
                </div>
            </div>
           
        )
      
        }

export default Carouselhoks