import { performance } from "perf_hooks";

export function logTimings<T extends { new(...agrs: any[]): {}; }>(constructor: T) {
  return class extends constructor {
    __timings = [];
  };
}

interface ThisWithTimings {
  __timings: unknown[];
}

export function timing() {
  return function (target: any, propertyKey: string, descriptor: PropertyDescriptor) {
    const value = descriptor.value;

    descriptor.value = async function (...args: any[]) {
      const start = performance.now();
      const out = await value.apply(this, args);
      const end = performance.now();

      if ((this as ThisWithTimings).__timings) {
        (this as ThisWithTimings).__timings.push({
          method: propertyKey,
          time: end - start
        });
      } else {
        console.log(end - start);
      }
      return out;
    };
  };
}

