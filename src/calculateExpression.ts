import { evaluate } from "mathjs";

const getLastChar = (str: string) => (str.length ? str[str.length - 1] : "");
const isNumber = (str: string) => !isNaN(Number(str));

export const calculateExpression = (expression: string) => {
  if (!expression || expression.length === 0) {
    return;
  }

  const mulRegex = /×/g;
  const divRegex = /÷/g;
  const commaRegex = /,/g;
  const divideByZero = /\/0/g;

  let toEvaluate = expression
    .replace(mulRegex, "*")
    .replace(divRegex, "/")
    .replace(commaRegex, ".");

  try {
    if (divideByZero.test(toEvaluate)) {
      throw new Error("Cannot divide by 0!");
    }

    const lastCharacterIsNumber = isNumber(getLastChar(toEvaluate));
    if (!lastCharacterIsNumber) {
      toEvaluate = toEvaluate.slice(0, -1);
    }

    const result = evaluate(toEvaluate);
    return result;
  } catch (error) {
    console.log(error);
    return undefined;
  }
};
