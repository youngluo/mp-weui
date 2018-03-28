if (typeof Object.assign !== 'function') {
  Object.defineProperty(Object, 'assign', {
    value: function assign(...args) {
      const target = Object(args[0]);
      const len = args.length;

      if (!target) {
        throw new TypeError('Cannot convert undefined or null to object');
      }

      for (let index = 1; index < len; index++) {
        const nextSource = args[index];

        if (nextSource) {
          for (const nextKey in nextSource) {
            if (Object.prototype.hasOwnProperty.call(nextSource, nextKey)) {
              target[nextKey] = nextSource[nextKey];
            }
          }
        }
      }

      return target;
    },
    writable: true,
    configurable: true,
  });
}
