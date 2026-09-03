import { useRef, forwardRef, useState } from "react";
// Child Component that requires forwardRef
const MyInputCtrl = forwardRef((props, ref) => {
         return <input {...props} ref={ref} />;
});
// Parent Component that creates and passes the ref
const UseRefHook = () => {
          const [inputVal, setInputVal] = useState();
          const ref = useRef(null);
          const handleClick = () => {
                  ref.current.focus();
                 setInputVal(ref.current.value);
         }
         return (
          <div>
              <MyInputCtrl ref={ref} onChange={(e) => console.log(e.target.value)} />
               <button type="button" onClick={handleClick}>
                         useRef in Action
                </button>
               <br />Input control's current value using useRef : {inputVal}
         </div>
       );
}
export default UseRefHook;