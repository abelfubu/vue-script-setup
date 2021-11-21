export function prettyPrint(data: unknown): void {
  console.log(JSON.stringify(data, null, 2));
}

export function logTitleSuccess(title: string | number | undefined): void {
  console.log(`%c✔ [${title}]`, `color: green; font-size: 18px`);
}

export function logTitleError(title: string | number | undefined): void {
  console.log(`%c⚠ [${title}]`, `color: red; font-size: 18px`);
}
