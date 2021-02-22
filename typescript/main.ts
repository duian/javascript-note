const a = 1;
const b = 2;

// tuple
const t: [ string, number ] = [ '12', 10 ];

/**
 * enum
*/
enum Color {
  Red = 86,
  Yellow = 83,
  Blue = 25,
}

const c: Color = Color.Red;

interface Fish {
  swim(): string
}

interface Bird {
  fly(): string
}




function loggingIdentity<T>(arg: T[]): T[] {
  console.log(arg.length);

  return arg;
}

/**
 * 参数存在多个类型的解决方法
 **/

function getSmallPet(): Bird | Fish {
  return pet;
}

let pet = getSmallPet();
let fishPet = pet as Fish;
let birdPet = pet as Bird;

if ('swim' in pet) {
  pet.swim();
} else if ('fly' in pet) {
  pet.fly();
}

if (fishPet.swim) {
  fishPet.swim();
} else if (birdPet.fly) {
  birdPet.fly();
}



function isString(s: any): s is String {
  return typeof s === 'string';
}

const str: number = 123;
if (isString(str)) {
  // str.concat('123');
  str.split('sdf');
}

interface LabeledValue {
  label: string;

}

function printLabel(labelObj: LabeledValue) {
  return labelObj.label;
}

printLabel({
  label: 'label',
  // size: 10,
});

interface SearchFunc {
  (search: string, subString: string): boolean;
}

let mySearch: SearchFunc;

mySearch = (src, subString) => {
  return true;
}

mySearch('123', 123);

interface NumberDictionary {
  [index: string]: number;
  length: number;    // 可以，length是number类型
  // name: string       // 错误，`name`的类型与索引类型返回值的类型不匹配
}

interface ClockInterface {
  setTime(d: Date): void;
}

interface ClockConstructor {
  new (hour: number, minute: number): ClockInterface;
  currentTime: any;
}

class Clock implements ClockInterface {
  setTime(d: Date) {}
  constructor(h: number, m: number) { }
}

interface Shape {
  color: string;
}

interface SquareInterace extends Shape {
  sideLength: number;
}

// class Square
// let square = <Square>{};

// square.color = 'blue';
// square.sideLength = 10;
// square.area = 10;

class Greeter {
  greeting: string;
  constructor(message: string) {
    this.greeting = message;
  }

  greet() {
    return `Hello, ${this.greeting}`;
  }
}


class Animal {
  // private name: string;
  constructor(public name: string) {
  }
  public move(distanceInMeters: number = 0) {
    console.log(`${this.name} moved ${distanceInMeters}`);
  }
}

class Dog extends Animal {
  bark() {
    console.log('Woof! Woof!');
  }

  move(distanceInMeters: number = 10) {
    console.log(this.name);

  }
}

class Snake extends Animal {
  constructor(name: string) {
    super(name);
  }

  move(distanceInMeters = 5) {
    console.log('Slithering...');
    super.move(distanceInMeters);
  }
}

class Horse extends Animal {
  constructor(name: string) {
    super(name);
  }

  move(distanceInMeters = 45) {
    console.log('Galloping...');
    super.move(distanceInMeters);

  }
}

abstract class Human {
  abstract makeSound(): void;
  move(): void {
    console.log('...');
  }
}

class Woman extends Human {
  makeSound(): void {
    console.log('...');
  }
  move(): void {
    console.log('...woman');
  }
}


/**
 * Generics
 */

function identity<T>(arg: T): T {
  return arg;
}


/**
 * Declaration Merging
 */

interface Named {
  name: string;
}

class Person {
  constructor(public name: string) {}
}

let p: Named;

// p = new Person('duian');

let y = { name: 'duian', location: 'hangzhou' };

p = y;
// p.name;

/**
 * Object Types
 */

 // intersection types
 function extend<T, U>(first: T, second: U): T & U {
  const result = <T & U>{};

  for (let id in first) {
    // (<any>result)[id] = (<any>first)[id];
    (<any>result)[id] = (<any>first)[id];
  }

  for (let id in second) {
    if (!(<Object>result).hasOwnProperty(id)) {
      (<any>result)[id] = second[id];
    }
  }

   return result;
 }


interface Song {
  artistName: string;
};

interface Song {
  songName: string;
};

const song: Song = {
  artistName: "Freddie",
  songName: "The Chain"
};

/*

Intro:

    We have asynchronous functions now, advanced technology.
    This makes us a tech startup officially now.
    But one of the consultants spoiled our dreams about
    inevitable future IT leadership.
    He said that callback-based asynchronicity is not
    popular anymore and everyone should use Promises.
    He promised that if we switch to Promises, this would
    bring promising results.

Exercise:

    We don't want to reimplement all the data-requesting
    functions. Let's decorate the old callback-based
    functions with the new Promise-compatible result.
    The final function should return a Promise which
    would resolve with the final data directly
    (i.e. users or admins) or would reject with an error
    (or type Error).

    The function should be named promisify.

Higher difficulty bonus exercise:

    Create a function promisifyAll which accepts an object
    with functions and returns a new object where each of
    the function is promisified.

    Rewrite api creation accordingly:

        const api = promisifyAll(oldApi);

*/

interface User {
  type: 'user';
  name: string;
  age: number;
  occupation: string;
}

interface Admin {
  type: 'admin';
  name: string;
  age: number;
  role: string;
}

type Person = User | Admin;

const admins: Admin[] = [
  { type: 'admin', name: 'Jane Doe', age: 32, role: 'Administrator' },
  { type: 'admin', name: 'Bruce Willis', age: 64, role: 'World saver' }
];

const users: User[] = [
  { type: 'user', name: 'Max Mustermann', age: 25, occupation: 'Chimney sweep' },
  { type: 'user', name: 'Kate Müller', age: 23, occupation: 'Astronaut' }
];

export type ApiResponse<T> = (
  {
      status: 'success';
      data: T;
  } |
  {
      status: 'error';
      error: string;
  }
);

type CallbackBasedAsyncFunction<T> = (callback: (response: ApiResponse<T>) => void) => void;
type PromiseBasedAsyncFunction<T> = () => Promise<T>;

export function promisify<T>(fn: CallbackBasedAsyncFunction<T>): PromiseBasedAsyncFunction<T> {
  return () => new Promise<T>((resolve, reject) => {
      fn((response) => {
          if (response.status === 'success') {
              resolve(response.data);
          } else {
              reject(new Error(response.error));
          }
      });
  });
}

type SourceObject<T> = {[K in keyof T]: CallbackBasedAsyncFunction<T[K]>};
type PromisifiedObject<T> = {[K in keyof T]: PromiseBasedAsyncFunction<T[K]>};

export function promisifyAll<T extends {[key: string]: any}>(obj: SourceObject<T>): PromisifiedObject<T> {
  const result: Partial<PromisifiedObject<T>> = {};
  for (const key of Object.keys(obj) as (keyof T)[]) {
      result[key] = promisify(obj[key]);
  }
  return result as PromisifiedObject<T>;
}

const oldApi = {
  requestAdmins(callback: (response: ApiResponse<Admin[]>) => void) {
      callback({
          status: 'success',
          data: admins
      });
  },
  requestUsers(callback: (response: ApiResponse<User[]>) => void) {
      callback({
          status: 'success',
          data: users
      });
  },
  requestCurrentServerTime(callback: (response: ApiResponse<number>) => void) {
      callback({
          status: 'success',
          data: Date.now()
      });
  },
  requestCoffeeMachineQueueLength(callback: (response: ApiResponse<number>) => void) {
      callback({
          status: 'error',
          error: 'Numeric value has exceeded Number.MAX_SAFE_INTEGER.'
      });
  }
};

export const api = promisifyAll(oldApi);

function logPerson(person: Person) {
  console.log(
      ` - ${person.name}, ${person.age}, ${person.type === 'admin' ? person.role : person.occupation}`
  );
}

async function startTheApp() {
  console.log('Admins:');
  (await api.requestAdmins()).forEach(logPerson);
  console.log();

  console.log('Users:');
  (await api.requestUsers()).forEach(logPerson);
  console.log();

  console.log('Server time:');
  console.log(`   ${new Date(await api.requestCurrentServerTime()).toLocaleString()}`);
  console.log();

  console.log('Coffee machine queue length:');
  console.log(`   ${await api.requestCoffeeMachineQueueLength()}`);
}

startTheApp().then(
  () => {
      console.log('Success!');
  },
  (e: Error) => {
      console.log(`Error: "${e.message}", but it's fine, sometimes errors are inevitable.`);
  }
);

// In case if you are stuck:
// https://www.typescriptlang.org/docs/handbook/generics.html


let zv: unknown;

zv = 'hello';
zv.concat('sdfasf');
