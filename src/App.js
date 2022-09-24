import React, { useEffect, useState } from "react";
import "./styles.css";
// import { useEffect, useState } from "react";
// import "./styles.css";

const RadioButton = (props) => {
  return (
    <>
      <label>
        {props.children}
        <input type="radio" name={props.name} />
      </label>
    </>
  );
};

const RadioGroup = (props) => {
  const { children } = props;
  return React.Children.map(children, (child) => {
    return React.cloneElement(child, { name: props.name });
  });
};

export default function App() {
  return (
    <>
      <RadioGroup name="group-1">
        <RadioButton>Option 1</RadioButton>
        <RadioButton>Option 2</RadioButton>
        <RadioButton>Option 3</RadioButton>
        <RadioButton>Option 4</RadioButton>
        <RadioButton>Option 5</RadioButton>
      </RadioGroup>
    </>
  );
}

//   // const arr = [1, 2, 3, 4, 5];
//   const url = "https://api.github.com/users/mysteryboyabhi/repos";
//   return (
//     <div className="App">
//       <Fetch url={url}>
//         {(data) => {
//           if (data) {
//             return (
//               <>
//                 {data.map((e, i) => {
//                   return <p key={i}>{e.name}</p>;
//                 })}
//               </>
//             );
//           }
//           return <h1>Repo Is Loading...</h1>;
//         }}
//       </Fetch>
//     </div>
//   );
// }

// const Fetch = (props) => {
//   const [data, setData] = useState(null);
//   const { url, children } = props;

//   useEffect(() => {
//     async function handler() {
//       const res = await fetch(url);
//       const data = await res.json();

//       setData(data);
//     }
//     handler();
//     // fetch(url)
//     //   .then((res) => res.json())
//     //   .then((data) => setData(data));
//   }, [url]);

//   return children(data);
// };
