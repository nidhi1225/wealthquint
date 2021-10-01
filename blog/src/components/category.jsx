import React from "react";
import './style.css';
var name = [{name:"Business",class:"item"},{name:"Cryptocurrency",class:"item"},{name:"Stock Market",class:"item1"},{name:"Money",class:"item"},{name:"Credit Cards",class:"item1"}]
    
const Category = (props) =>{
    function show(){
        console.log(document.getElementsByClassName("item2")[0])
        document.getElementsByClassName("dropdown")[0].style.display = "block";
         document.getElementsByClassName("dropdown")[0].style.display = "block"
    };
    function unshow(event){
        let element = document.getElementsByClassName("item2")[0];
        if(element.contains(event.target)){
        }else{
        document.getElementsByClassName("dropdown")[0].style.display = "none"
        }
    }
    function unshow1(event){
        document.getElementsByClassName("dropdown")[0].style.display = "none"
    }
    if(props.from){
        return(
            <div className="left">
                {
                    name.map((element)=>{
                        return ( <div className={element.class}><a href="#">{element.name}</a></div>)
                    })
                }
                <div className="item2" onMouseOver={show} onMouseOut={unshow}>More
                    <div className="dropdown">
                        <div className="more" onMouseOut={unshow1} >Personal Finance</div>
                        <div className="more" onMouseOut={unshow1} >Banking</div>
                    </div>
                </div>
            </div>
        )
    }else{
        return(
            <div>
                {
                    name.map((element)=>{
                        return ( <div className="sidecontent"><a href="#">{element.name}</a></div>)
                    })
                }
                <div className="sidecontent1">Personal Finance</div>
                <div className="sidecontent1">Banking</div>
            </div>
        )
    }
}

export default Category