function delay(ms: number) {
  return new Promise((resolve) => globalThis.setTimeout(resolve, ms));
}

export default async function Example() {
  await delay(1000);

  return (
    <main style={{ height: 5000, backgroundColor: 'blue' }} />
  )
}
