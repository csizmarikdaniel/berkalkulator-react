import React, { FC } from "react";

const NumberIncrementInput: FC<{
  eltartotak: number;
  kedvezmenyezett: number;
  updateCsaladiKedvezmeny: (
    eltartotak: number,
    kedvezmenyezett: number
  ) => void;
}> = ({ eltartotak, kedvezmenyezett, updateCsaladiKedvezmeny }) => {
  const buttonStyle =
    "rounded-full border w-7 h-7 text-center cursor-pointer hover:bg-gray-200 transition duration-200 ease-in-out";

  return (
    <div className="flex flex-row gap-2">
      <div className="flex flex-row gap-2">
        <div
          className={buttonStyle}
          onClick={() =>
            updateCsaladiKedvezmeny(eltartotak - 1, kedvezmenyezett)
          }
        >
          -
        </div>
        {eltartotak}
        <div
          className={buttonStyle}
          onClick={() =>
            updateCsaladiKedvezmeny(eltartotak + 1, kedvezmenyezett)
          }
        >
          +
        </div>
      </div>
      Eltartott, ebből kedvezményezett:
      <div className="flex flex-row gap-2">
        <div
          className={buttonStyle}
          onClick={() =>
            updateCsaladiKedvezmeny(eltartotak, kedvezmenyezett - 1)
          }
        >
          -
        </div>
        {kedvezmenyezett}
        <div
          className={buttonStyle}
          onClick={() =>
            updateCsaladiKedvezmeny(eltartotak, kedvezmenyezett + 1)
          }
        >
          +
        </div>
      </div>
    </div>
  );
};

export default NumberIncrementInput;
