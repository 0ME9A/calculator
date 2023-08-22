"use client";
import React, { useEffect, useState } from "react";

function Calculator() {
    const [calN, setCalN] = useState<string>("0");
  const [currentVal, setCurrentVal] = useState<string>("0");

  const handleButtonClick = (value: string) => {
    if (calN === "0" && value !== ".") {
      if (/^[+\*/]$/.test(value) && calN === "0") return;

      setCalN(value);
      setCurrentVal(value);
    } else {
      const lastChar = calN.slice(-1);
      if (/^[+\-*/]$/.test(lastChar) && /^[+\-*/]$/.test(value)) {
        // If both are mathematical symbols, do not add the new value
        return;
      }

      if (/^[+\-*/]$/.test(lastChar) && value === "-") {
        // Allow minus after an operator for negative numbers
        setCalN((prev) => prev + value);
        setCurrentVal(value);
        return;
      }
      setCalN((prev) => prev + value);
      setCurrentVal(value);
    }
  };

  const handleClear = () => {
    setCalN("0");
    setCurrentVal("0");
  };

  const handleEquals = () => {
    if (/^[-+*/]$/.test(calN.slice(-1))) return; // Disallow ending with operators
    if (/-[^0-9]/.test(calN)) return;

    // Replace 'x' with '*' for proper evaluation
    const expression = calN.replace(/x/g, "*");

    try {
      const result = eval(expression);
      setCurrentVal(result.toString());
    } catch (error) {
      setCalN("Error");
    }
  };

  const handleKeyboardInput = (event: KeyboardEvent) => {
    const key = event.key;
    if (key === "Delete") handleClear();
    if (key === "Enter") handleEquals();

    if (/^[0-9+\-*/.=]$/.test(key)) {
      if (key === "=") {
        event.preventDefault();
        handleEquals();
      } else {
        handleButtonClick(key);
      }
    }
  };

  useEffect(() => {
    window.addEventListener("keydown", handleKeyboardInput);
    return () => {
      window.removeEventListener("keydown", handleKeyboardInput);
    };
  }, [calN]);

  return (
    <main className="w-full min-h-screen flex justify-center items-center p-4">
      <section className="w-full md:max-w-[600px] bg-violet-900 p-2 rounded-2xl shadow-xl shadow-violet-900/50 border-2 border-violet-500 space-y-1">
        <section
          id="screen-section"
          className="w-full p-2 shadow-sm rounded-t-2xl"
        >
          <p className="text-4xl pb-2 text-right overflow-auto">
            <span className={`opacity-0`}>0</span>
            {calN}
          </p>
          <p className="text-lg text-right font-bold">
            <span className={`opacity-0`}>0</span>
            {currentVal}
          </p>
        </section>
        <section
          id="buttons-section"
          className={`grid grid-cols-4 gap-1 rounded-b-2xl`}
        >
          <button
            className="rounded-lg bg-red-700 py-3 hover:ring-1 ring-red-300 p-2 text-lg col-span-2"
            onClick={handleClear}
          >
            AC
          </button>
          <button
            className="rounded-lg bg-violet-950 py-3 hover:ring-1 ring-violet-700 p-2 text-lg"
            onClick={() => handleButtonClick("/")}
          >
            /
          </button>
          <button
            className="rounded-lg bg-violet-950 py-3 hover:ring-1 ring-violet-700 p-2 text-lg"
            onClick={() => handleButtonClick("*")}
          >
            x
          </button>
          <button
            className="rounded-lg bg-violet-950 py-3 hover:ring-1 ring-violet-700 p-2 text-lg"
            onClick={() => handleButtonClick("7")}
          >
            7
          </button>
          <button
            className="rounded-lg bg-violet-950 py-3 hover:ring-1 ring-violet-700 p-2 text-lg"
            onClick={() => handleButtonClick("8")}
          >
            8
          </button>
          <button
            className="rounded-lg bg-violet-950 py-3 hover:ring-1 ring-violet-700 p-2 text-lg"
            onClick={() => handleButtonClick("9")}
          >
            9
          </button>
          <button
            className="rounded-lg bg-violet-950 py-3 hover:ring-1 ring-violet-700 p-2 text-lg"
            onClick={() => handleButtonClick("-")}
          >
            -
          </button>
          <button
            className="rounded-lg bg-violet-950 py-3 hover:ring-1 ring-violet-700 p-2 text-lg"
            onClick={() => handleButtonClick("4")}
          >
            4
          </button>
          <button
            className="rounded-lg bg-violet-950 py-3 hover:ring-1 ring-violet-700 p-2 text-lg"
            onClick={() => handleButtonClick("5")}
          >
            5
          </button>
          <button
            className="rounded-lg bg-violet-950 py-3 hover:ring-1 ring-violet-700 p-2 text-lg"
            onClick={() => handleButtonClick("6")}
          >
            6
          </button>
          <button
            className="rounded-lg bg-violet-950 py-3 hover:ring-1 ring-violet-700 p-2 text-lg"
            onClick={() => handleButtonClick("+")}
          >
            +
          </button>
          <button
            className="rounded-lg bg-violet-950 py-3 hover:ring-1 ring-violet-700 p-2 text-lg"
            onClick={() => handleButtonClick("1")}
          >
            1
          </button>
          <button
            className="rounded-lg bg-violet-950 py-3 hover:ring-1 ring-violet-700 p-2 text-lg"
            onClick={() => handleButtonClick("2")}
          >
            2
          </button>
          <button
            className="rounded-lg bg-violet-950 py-3 hover:ring-1 ring-violet-700 p-2 text-lg"
            onClick={() => handleButtonClick("3")}
          >
            3
          </button>
          <button
            className="rounded-lg bg-black/80 py-3 hover:ring-1 ring-violet-700 p-2 row-span-2 text-4xl"
            onClick={handleEquals}
          >
            =
          </button>
          <button
            className="rounded-lg bg-violet-950 py-3 hover:ring-1 ring-violet-700 p-2 text-lg col-span-2"
            onClick={() => handleButtonClick("0")}
          >
            0
          </button>
          <button
            className="rounded-lg bg-violet-950 py-3 hover:ring-1 ring-violet-700 p-2 text-lg"
            onClick={() => handleButtonClick(".")}
          >
            .
          </button>
        </section>
      </section>
    </main>
  );
}

export default Calculator;
