import { Equal, Expect } from '../helpers/type-utils';

export function makeEventHandlers<TEvent extends string>(obj: {
  [T in TEvent]: (name: T) => any;
}) {
  return obj;
}

// export function makeEventHandlers<TObj>(obj: {
//   [T in keyof TObj]: (name: T) => any;
// }) {
//   return obj;
// }

const obj = makeEventHandlers({
  click: (name) => {
    console.log(name);

    type test = Expect<Equal<typeof name, 'click'>>;
  },
  focus: (name) => {
    console.log(name);

    type test = Expect<Equal<typeof name, 'focus'>>;
  },
});
