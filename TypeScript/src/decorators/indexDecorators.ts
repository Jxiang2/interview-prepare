import { performance } from "perf_hooks";
import "reflect-metadata";

const importantMetadataKey = Symbol("required");

interface ThisWithTimings {
  __timings: unknown[];
}

export function logTimings<T extends { new(...args: any[]): {}; }>(
  constructor: T
) {
  return class extends constructor {
    __timings = [];
    printTimings = () => console.log(this.__timings);
  };
}

// export function important(
//   target: Object,
//   propertyKey: string | symbol,
//   parameterIndex: number
// ) {
//   let existingImportantParameters: number[] =
//     Reflect.getOwnMetadata(importantMetadataKey, target, propertyKey) || [];

//   existingImportantParameters.push(parameterIndex);

//   Reflect.defineMetadata(
//     importantMetadataKey,
//     existingImportantParameters,
//     target,
//     propertyKey
//   );
// }

/**
 * 1. return a "decorator-modifier function" to modify the decorated method
 * 2. the "decorator-modifier function" modify descriptor.value as that is the original method
 * 
 * when the decorated method is called, modified descriptor.value() is excuted
 */
export function timing() {
  return function (target: Object, propertyKey: string, descriptor: PropertyDescriptor) {
    // retrieve and store the original method initialized in some classes
    const value = descriptor.value;

    // modify the retrieved method
    descriptor.value = async function (...args: any[]) {
      const start = performance.now();
      const out = await value.apply(this, args);
      const end = performance.now();

      // let importantParamsBuffer: unknown[] = [];
      // let importantParameters: number[] = Reflect.getOwnMetadata(
      //   importantMetadataKey,
      //   target,
      //   propertyKey
      // );
      // if (importantParameters) {
      //   for (let parameterIndex of importantParameters) {
      //     importantParamsBuffer.push(args[parameterIndex]);
      //   }
      // }

      if ((this as ThisWithTimings).__timings) {
        (this as ThisWithTimings).__timings.push({
          method: propertyKey,
          time: end - start,
          // importantParamsBuffer,
        });
      } else {
        console.log(end - start);
      }

      return out;
    };
  };
}

