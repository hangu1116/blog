import React from "react"
import Style from './index.css'

// const images =[{
//     url:'https://tva1.sinaimg.cn/large/007S8ZIlgy1gjsfsm8j12j31hc0u0x6r.jpg',
//     title:'海上日出',
//     desc:'Sunrise at sea',
// },{
//     url:'https://tva1.sinaimg.cn/large/007S8ZIlgy1gjsg4utv1oj31hc0u01l1.jpg',
//     title:'渔船 ',
//     desc:'Fishing boat ',
// }];

// <!-- 山东, 威海, 荣成成山头   -->
// <!-- 2020/10/09 -->
export default (props) => {
    const {images} = props;

    const renderCard = (image, index) => {
        return (
            <div className={'photoCard-domain'}>
                <img src={image.url} className={'photoCard-image'}/>
                <div className={'photoCard-title'}>
                    <span className={'photoCard-name'}>{image.title}</span>
                    <span>{`${index+1}/${images?.length}`}</span>
                </div>
                <span>{image.desc}</span>
                <style dangerouslySetInnerHTML={{ __html: Style }} />
            </div>
        )
    }

    const renderTOC = (image, index) => {
        return (
            <div className={'photoCard-tocitem'}>
                <span>{image.title}</span>
            </div>
        )
    }
    return (
        <div className={'photoCard-container'}>
            <div className={'photoCard-tocbody'}>
                {
                    images && images.map((image,index)=>renderTOC(image,index))
                }
            </div>
            <div className={'photoCard-imgbody'}>
                {
                    images && images.map((image,index)=>renderCard(image,index))
                }
            </div>
        </div>
    )
}