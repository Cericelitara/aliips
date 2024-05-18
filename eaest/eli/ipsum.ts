function getTypeOfInput(input: any): string {
  if (typeof input === "number") {
    return "Number";
  } else {
    return "Not a number";
  }
}
