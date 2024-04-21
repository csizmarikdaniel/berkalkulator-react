import React, { FC } from "react";

type SliderProps = Omit<React.InputHTMLAttributes<HTMLInputElement>, "type">;

const Slider: FC<SliderProps> = ({ ...props }) => {
  return (
    <div>
      <input {...props} type="range" className="range" />
    </div>
  );
};

export default Slider;
