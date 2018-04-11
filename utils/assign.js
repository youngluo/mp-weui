export default function assign(...args) {
  const target = Object(args[0]);
  const len = args.length;

  for (let index = 1; index < len; index++) {
    const nextSource = args[index] || {};

    for (const nextKey in nextSource) {
      if (nextSource.hasOwnProperty(nextKey)) {
        const value = nextSource[nextKey];

        if (value !== undefined) {
          target[nextKey] = value;
        }
      }
    }
  }

  return target;
}
