import React from 'react';
import Block from './block';
let topic = {image:"https://wealthquint.com/wp-content/uploads/Harshad-Mehta-760x600.jpeg",heading:"Harshad Mehta: Family, Brother, Wife, Son, Allegations",subtext:"Harshad Mehta Harshad Mehta famous as the big Bull of Dalal Street: acquired a lot of possessions with very little or no investments. He was born on July 29, 1954,...",class:"harshad"}
let subtopic = [{image:"https://wealthquint.com/wp-content/uploads/How-e-RUPI-is-different-from-a-digital-currency-500x368.jpeg",heading:"How e-RUPI is different from a digital currency?",class:"mainimage",div:"subdiv"},
{image:"https://wealthquint.com/wp-content/uploads/Rakesh-Jhunjhunwala-500x368.jpeg",heading:"Rakesh Jhunjhunwala: Portfolio, Net Worth, Stocks 2021",class:"mainimage",div:"subdiv"},
{image:"https://wealthquint.com/wp-content/uploads/e-RUPI-Digital-Payment-500x368.jpeg",heading:"What is e-RUPI digital Payment & How e-RUPI works?",class:"mainimage",div:"subdiv"},
{image:"https://wealthquint.com/wp-content/uploads/How-e-RUPI-is-a-game-changer-500x368.jpeg",heading:"How is e-RUPI a game-changer?",class:"mainimage",div:"subdiv"}]
let info = [{image:"https://wealthquint.com/wp-content/uploads/Close-Indian-Bank-Account-500x350.jpeg",heading:"How to Close Indian Bank Account?",subtext:"Indian Bank is a well-known bank with several branches all...",class:"windowimg",div:"catalog"},
{image:"https://wealthquint.com/wp-content/uploads/Punjab-Sind-Bank-Timings-Working-Hours-500x350.jpeg",heading:"Punjab and Sind Bank Timings & Working Hours",subtext:"Punjab and Sind Bank is a public sector bank that...",class:"windowimg",div:"catalog"},
{image:"https://wealthquint.com/wp-content/uploads/ECS-Full-Form-500x350.jpeg",heading:"ECS Full Form",subtext:"The full form of ECS is Electronic Clearing System. The...",class:"windowimg",div:"catalog"},
{image:"https://wealthquint.com/wp-content/uploads/Close-Federal-Bank-Account-500x350.jpeg",heading:"How to Close Federal Bank Account?",subtext:"If you want to know how to close the Federal...",class:"windowimg",div:"catalog"},
{image:"https://wealthquint.com/wp-content/uploads/IDFC-First-Bank-Timings-Working-Hours-500x350.jpeg",heading:"IDFC First Bank Timings & Working Hours",subtext:"IDFC First Bank is one of the best private sector...",class:"windowimg",div:"catalog"},
{image:"https://wealthquint.com/wp-content/uploads/AEPS-Full-Form-500x350.jpeg",heading:"AEPS Full Form",subtext:"The full form of AEPS is Aadhaar Enabled Payment System...",class:"windowimg",div:"catalog"}]

const Mainpage = (props) => {
    return(
        <div className="fullarea">
            <div className="pagearea">
                <div className="leftarea"><Block element={topic} isMall={true}/></div>
                <div className="rightarea">
                    {subtopic.map((item)=>{
                        return(
                            <Block element={item} />
                        )
                    })}
                </div>
            </div>
            <div className="bottomarea">
                {info.map((item)=>{
                    return (
                        <Block element={item} />
                    )
                })}
            </div>
        </div>
    )
}
export default Mainpage