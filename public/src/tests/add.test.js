const add = (a,b) => a+b ;
const generateGreeting = (name) => `Hello ${name}!`;

test(`Should add two numbers`,()=>{
    const result = add(3,4);
    expect(result).toBe(7);
});

test(`Should compare Greeting`,()=>{
    const result1 = generateGreeting('Akhil');
    expect(result1).toBe('Hello Akhil!');
});