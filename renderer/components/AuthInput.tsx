import React, { forwardRef, HTMLInputTypeAttribute } from "react";

interface MyProps {
  type?: HTMLInputTypeAttribute;
  id?: string;
  name: string;
  onBlur: any;
  onChange: any;
}

// const Input = forwardRef<React.InputHTMLAttributes<HTMLInputElement>>(({ ...rest }, ref) => {
const Input = forwardRef<HTMLInputElement, MyProps>(({ ...rest }, ref) => {
  return (
    <>
      <input {...rest} ref={ref} />
      <style jsx>{`
        input {
          height: 35px;
        }
      `}</style>
    </>
  );
});

export default Input;
