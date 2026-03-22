import React,{forwardRef} from 'react';
import "./PageTitle.css";

export interface PageTitleProps {
    title?: string;
    clickable?: boolean;
    classes?:string;
    tabIndex?: number;
    text?: string;
}
const PageTitle = forwardRef<HTMLDivElement,PageTitleProps>((props , ref) => {
    const {
        title,
        clickable,
        classes,
        tabIndex,
        text
    } = props;



    return(
        <div 
        ref={ref}
        tabIndex={tabIndex}
        className= {`${classes ?? ''} sticker-shop-page-title`}>
            {clickable ? (
                <a href="/blank" target='/blank' className='sticker-shop-title-click'> {title}</a>
            ) : (
            <span className='sticker-shop-title-simple'> {title}</span>
            )}
            <span className= 'sticker-shop-title-text'>{text}</span>
        </div>
    );

});

export default PageTitle;