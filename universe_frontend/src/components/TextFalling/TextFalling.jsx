import React, { useEffect, useState } from "react";
import 'animate.css'

function TextFalling({ text }) {

    return (
            <div className=" animate__animated animate__bounceInDown">
                <span className="">{text}</span>
            </div>
    );
}

export default TextFalling;
