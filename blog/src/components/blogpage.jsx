import React from 'react';
import Block from './block';
import Harshad from './harshad';
import Posts from './posts';
import SocialMedia from './socialMedia';

// let blog = [{head:"Harshad Mehta: Family, Brother, Wife, Son, Allegations",
// start:"Harshad Mehta’s story is one of the most popular among Indian stock market enthusiasts because he pulled off one of the biggest scams so far. This article talks about his journey, his personal life, and more!",
// author:"By Ashok Lathwal",imgsource:"https://wealthquint.com/wp-content/uploads/Harshad-Mehta-1000x650.jpeg",
// topic:"Harshad Mehta",content:"Harshad Mehta famous as the big Bull of Dalal Street"},
// {head:"How e-RUPI is different from a digital currency?",start:"e-RUPI, a leakproof digital voucher system",
// author:"By Ashok Lathwal",imgsource:"https://wealthquint.com/wp-content/uploads/How-e-RUPI-is-different-from-a-digital-currency-1000x650.jpeg",
// content:"e-RUPI is the first step towards the development of a digital currency in India"}]
const Blogpage = (props) =>{
    return(
        <div className="totalarea">
            <div>
                <Harshad />
                <SocialMedia />
                {/* <Block /> */}
            </div>
            <div>
                <Posts />
            </div>
        </div>
    )
}

export default Blogpage