
function add(value : { a: number, b: string })  {
    return value;
}

const result = add({ a: 5, b: "10" });
console.log(result); 


interface abc{
    name: string;
    age: number;
}

function add2(value : abc): abc {
    return value;
}

const result2 = add2({ name: "Boni Amin jayed", age: 30 });
console.log(result2);


function add3<t>(value: t){
    return value;
}

const result3 = add3<string>("Hello World");
const result4 = add3<number>(123);

console.log(result3);
console.log(result4);


const customer = <T>(a: T[]) =>{
    return a;
}

const abcd = customer<string>(
    ["John", "Jane", "Doe"]
) 

console.log(abcd);


interface ApiResponse<T> {
  success: boolean;
  message: string;
  data: T;
}

interface User {
  id: number;
  name: string;
}

function createResponse<T>(data: T): ApiResponse<T> {
  return {
    success: true,
    message: "Data loaded",
    data,
  };
}

const userResponse = createResponse<User>({
  id: 1,
  name: "Rahim",
});

console.log(userResponse.data.name);