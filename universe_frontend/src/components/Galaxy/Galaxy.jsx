import React, { useEffect, useState } from "react";
import "./Galaxy.css";
import "../../assets/animation-library-css/slide.css";
import Component1 from "../Package/Component1/Component1";
import Component2 from "../Package/Component2/Component2";

const Galaxy = () => {
  useEffect(() => {
    const numStars = 100; // Número de estrellas
    const background = document.querySelector(".background");

    for (let i = 0; i < numStars; i++) {
      const star = document.createElement("div");
      star.classList.add("star");
      const size = Math.random() * 3 + 1; // Tamaño entre 1 y 4
      star.style.width = `${size}px`;
      star.style.height = `${size}px`;
      star.style.top = `${Math.random() * 100}vh`;
      star.style.left = `${Math.random() * 100}vw`;
      star.style.animationDuration = `${Math.random() * 2 + 1}s`; // Duración aleatoria entre 1s y 3s
      star.style.animationName = "blink, move";
      star.style.animationTimingFunction = "ease-in-out, linear";
      star.style.animationIterationCount = "infinite, infinite";
      star.style.animationDuration += `, ${Math.random() * 5 + 5}s`; // Movimiento más lento
      background.appendChild(star);
    }

    const animate = () => {
      background.style.transform = `translateZ(0)`;
      requestAnimationFrame(animate);
    };

    animate();
  }, []);


  const components = {
    component1: Component1,
    component2: Component2
  }

  const [currentComponent, setCurrentComponent] = useState('component1'); // Estado para el componente actual

  const handleChangeComponent = (number) => {
      const componentName = `component${number}`; // Construir el nombre del componente
      setCurrentComponent(componentName); // Cambiar el estado al componente correspondiente
  };

  const CurrentComponent = components[currentComponent]; // Obtener el componente actual

  return (
    <div>
      <div className="background d-flex justify-content-center align-items-center">
        <CurrentComponent onChangeComponent={handleChangeComponent}/>
      </div>
    </div>
  );
};

export default Galaxy;
