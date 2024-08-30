import React, { useEffect } from "react";

import TextFalling from "../../TextFalling/TextFalling";

const Component2 = ({
  textFalling = "no text",
  btnName = "no name",
  btnColor = "purple",
  onChangeComponent,
}) => {
  return (
    <div className="custom-title text-white d-flex flex-column align-items-center">
      <TextFalling text="Ba Bye fren" />
      <a
        onClick={() => onChangeComponent(1)}
        className={`mt-5 btn custom-btn-green animate__animated animate__fadeIn`}
      >
        Terminar
      </a>
    </div>
  );
};

export default Component2;