import React, { useCallback, useEffect, useMemo, useState } from "react";
import "./otp.css";
import Input from "./Input";

function OtpVerification() {
  const [otp, setOtp] = useState(Array(4).fill(""));
  const [msg, setMsg] = useState("");
  const [timer, setTimer] = useState(15);
  const [stopTimer, setStopTimer] = useState(false);
  const originalOtp = useMemo(() => 1234, []);

  const isDigit = (value) => /^\d$/.test(value);

  const handleInput = useCallback(
    (e, index) => {
      setMsg("");
      const tempOtp = [...otp];
      if (isDigit(e.target.value)) {
        tempOtp[index] = e.target.value;
      } else {
        tempOtp[index] = "";
      }
      setOtp(tempOtp);
    },
    [otp]
  );

  const handleKeyUp = useCallback(
    (e, index) => {
      const key = e.code;
      if (key === "Enter") {
        handleSubmit();
      } else if (key === "Backspace" && !otp[index] && index > 0) {
        console.log(otp);
        e.target.previousElementSibling?.focus();
      } else if (isDigit(e.target.value) && index < otp.length - 1) {
        e.target.nextElementSibling?.focus();
      } else if (key === "ArrowRight" && index < otp.length - 1) {
        e.target.nextElementSibling?.focus();
      }

      // Handle Left Arrow key (Move focus to previous input)
      else if (key === "ArrowLeft" && index > 0) {
        e.target.previousElementSibling?.focus();
      }
    },
    [otp]
  );

  const handleSubmit = () => {
    setStopTimer(true);
    if (Number.parseInt(otp.join("")) === originalOtp) {
      setMsg("OTP Verified Successfully!");
    } else {
      setMsg("Verification Failed!");
    }
  };

  const handleResend = () => {
    setTimer(15);
    setStopTimer(false);
    setMsg("");
    setOtp((prevOtp) => prevOtp.map(() => ""));
  };

  useEffect(() => {
    if (!stopTimer && timer > 0) {
      const clock = setInterval(() => {
        setTimer((prev) => prev - 1);
      }, 1000);
      return () => clearInterval(clock);
    }
  }, [timer, stopTimer]);

  return (
    <div className="otp-container w-[100vw] h-[100vh] bg-black text-white flex flex-col justify-center items-center gap-4">
      <div className="text-2xl text-pink-500">{timer}</div>
      <h1>OTP Verification</h1>
      {timer > 0 && (
        <>
          <div>
            {otp.map((value, index) => (
              <Input
                key={index}
                handleKeyUp={handleKeyUp}
                handleInput={handleInput}
                value={value}
                index={index}
              />
            ))}
          </div>
          <button
            className="button"
            onClick={handleSubmit}
            disabled={otp.some((digit) => !digit)}
          >
            Check OTP
          </button>
        </>
      )}
      <p className="text-xl text-yellow-500" onClick={handleResend}>
        Resend Code
      </p>
      {msg && <p className="text-blue-700">{msg}</p>}
    </div>
  );
}

export default OtpVerification;
