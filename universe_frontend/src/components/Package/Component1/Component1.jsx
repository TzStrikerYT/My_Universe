import React, { useEffect } from "react";

import TextFalling from "../../TextFalling/TextFalling";

const Component1 = ({
  textFalling = "no text",
  btnName = "no name",
  btnColor = "purple",
  onChangeComponent,
}) => {
  return (
    <div className="custom-title text-white d-flex flex-column align-items-center">
      <TextFalling text="Hellow mai fren" />
      <a
        onClick={() => onChangeComponent(2)}
        className={`mt-5 btn custom-btn-purple animate__animated animate__fadeIn`}
      >
        Iniciar
      </a>
    </div>
  );
};

export default Component1;
