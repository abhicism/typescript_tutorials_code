//generic storage class
class storage<T> {
    //private array to srore items of type T
    //initially array is empty
    private items: T[] = [];
   //method to add a new item into the array which contains items .
   add(item: T) {
    this.items.push(item);
   }
 //method to return all stored items
 getAll() {
    return this.items;
 }
}

//create object for the class storage  that stores numbers only
const numstorage = new storage<number>();

// now add numbers to the storage
numstorage.add(10);
numstorage.add(20);

//print all stored numbers
console.log(numstorage.getAll()); // Output: [10, 20]

//create an object that will store strings
const stringstorage = new storage<string>();
//add strings to the storage
stringstorage.add("hello");
stringstorage.add("world");
//print all stored strings
console.log(stringstorage.getAll()); // Output: ["hello", "world"]
