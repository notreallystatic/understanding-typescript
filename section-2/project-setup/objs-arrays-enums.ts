// const person: {
//   name: string,
//   age: number
// } = {
//   name: 'Phineas',
//   age: 10,
// };


/* TUPLE */
const person: {
  name: string,
  age: number,
  hobbies: string[],
  role: [number, string]  // tuple (note: we can push more elements at the end.)
}= {
  name: 'Ferb',
  age: 12,
  hobbies: ['music', 'e-sports'],
  role: [0, 'admin']
}

person.role = [1, 'user'];

let favoriteActivites: string[];
favoriteActivites = ['Sports', 'Netflix'];

console.log(person.role);
for(const activity of favoriteActivites) {
  console.log(activity.toUpperCase());
}

/* ENUM */

enum Role {ADMIN = 'Admin', TEACHER = 420, STUDENT};

const person2 =  {
  name: 'Ferb',
  age: 12,
  hobbies: ['music', 'e-sports'],
  role: Role.TEACHER
}

console.log('Role:', person2.role);


/* ANY */

let random: any[];
random = ['hola', 10];
console.log(random);
