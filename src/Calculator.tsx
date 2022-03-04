import { useState, Fragment } from "react";
import { calculateExpression } from "./calculateExpression";
import "./Calculator.css";
import ExpressionHistory from "./components/ExpressionHistory";
import { useSelector, useDispatch } from "react-redux";
import { postExpression } from "./store/history/actions";
import { selectUser } from "./store/user/selectors";

const numberRows = [[7, 8, 9], [4, 5, 6], [1, 2, 3], [0]];
const calculationOperators = ["+", "-", "×", "÷"];
const otherSigns = ["(", ")", ","];
const clear = "C";
const equal = "=";
const back = "↶";

const Calculator = () => {
  const [value, setValue] = useState("");
  const dispatch = useDispatch();
  const user = useSelector(selectUser);

  const calculate = () => {
    const results = calculateExpression(value);
    setValue(results.toString());
    if (user.token) {
      dispatch(postExpression(value));
    }
  };

  const clearValue = () => setValue("");

  return (
    <div className="calculator">
      <h1>Calculator</h1>
      <input type="text" defaultValue={value} placeholder="0" disabled />
      <div className="calculator-buttons">
        <div role="grid">
          {numberRows.map((row, i) => {
            return (
              <Fragment key={row.toString()}>
                <div role="row">
                  {i === 3 && <button onClick={clearValue}>{clear}</button>}
                  {row.map((n) => (
                    <button
                      onClick={() => setValue(value.concat(n.toString()))}
                      key={n}
                    >
                      {n}
                    </button>
                  ))}
                  {i === 3 && <button onClick={calculate}>{equal}</button>}
                </div>
              </Fragment>
            );
          })}
        </div>
        <div className="calculation-operators">
          {calculationOperators.map((c) => (
            <button onClick={() => setValue(value.concat(c))} key={c}>
              {c.toString()}
            </button>
          ))}
        </div>
        <div className="other-signs">
          <button>{back}</button>
          {otherSigns.map((s) => (
            <button onClick={() => setValue(value.concat(s))} key={s}>
              {s.toString()}
            </button>
          ))}
        </div>
      </div>
      <ExpressionHistory />
    </div>
  );
};

export default Calculator;
