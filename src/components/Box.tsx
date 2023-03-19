import React, { forwardRef} from "react";
import '../App.css';

type BoxProps = {
    boxBackground: string;
    titleColor: string;
    width: number;
    children?: React.ReactNode; 
}
type Ref = HTMLDivElement;

const Box = forwardRef<Ref, BoxProps>(({ boxBackground, titleColor, width, children }, ref) => {

    return (
    <div ref={ref} style={{background: boxBackground}} className="box" >
        <h1 className="title" style={{color: titleColor}}>
            {children}
        </h1>
        <p className="width">
            {width}px
        </p>
    </div>
    );
});

export default Box;