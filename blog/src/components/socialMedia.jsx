import React from 'react';
import './style.css';

const SocialMedia = (props) => {
    if(props.header){
    return(          
            <div>
                <a href="https://www.facebook.com/WealthQuint/" class="fa fa-facebook"></a>
                <a href="https://t.me/wealthquint" class="fa fa-telegram"></a>
                <a href="https://www.youtube.com/channel/UC5Z3YIHLGjPwI1V3Je60-VQ" class="fa fa-youtube"></a>
                <a href="https://www.instagram.com/challenge/?next=/WealthQuint/" class="fa fa-instagram"></a>
                <a href="https://www.linkedin.com/company/wealthquint/" class="fa fa-linkedin"></a>
                <a href="https://in.pinterest.com/WealthQuint/" class="fa fa-pinterest"></a>
                <a href="https://twitter.com/WealthQuint" class="fa fa-twitter"></a>
            </div>
    )
    }else{
        return (
            <div>
            <a href="https://www.facebook.com/WealthQuint/" class="fa fa-facebook fb"></a>
            <a href="https://t.me/wealthquint" class="fa fa-telegram tg"></a>
            <a href="https://www.youtube.com/channel/UC5Z3YIHLGjPwI1V3Je60-VQ" class="fa fa-youtube ut"></a>
            <a href="https://www.instagram.com/challenge/?next=/WealthQuint/" class="fa fa-instagram in"></a>
            <a href="https://www.linkedin.com/company/wealthquint/" class="fa fa-linkedin lk"></a>
            <a href="https://in.pinterest.com/WealthQuint/" class="fa fa-pinterest pt"></a>
            <a href="https://twitter.com/WealthQuint" class="fa fa-twitter wr"></a>
        </div>
        )
    }
}

export default SocialMedia