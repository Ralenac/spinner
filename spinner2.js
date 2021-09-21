//SPINNER II

const spinner = ["|", "/", "-", "\\", "\/", "\-", "\\", "\|"];
for (let i = 0; i < spinner.length; i++ ) { // we can use same logic like we use for Animated Sentence
  setTimeout(() => {process.stdout.write(`\r${spinner[i]}`)
}, 100 * i)
};


// // process.stdout.write('hello from spinner1.js... \rheyyy\n');


//SPINER I
// setTimeout(() => {
//   process.stdout.write('\r|   ');
// }, 100);

// setTimeout(() => {
//   process.stdout.write('\r/   ');
// }, 300);

// setTimeout(() => {
//   process.stdout.write('\r-   ');
// }, 500);

// setTimeout(() => {
//   process.stdout.write('\r\\   '); 
// }, 700);

// setTimeout(() => {
//   process.stdout.write('\r\/   '); 
// }, 900);

// setTimeout(() => {
//   process.stdout.write('\r\-   '); 
// }, 1100);

// setTimeout(() => {
//   process.stdout.write('\r\\   '); 
// }, 1300);

// setTimeout(() => {
//   process.stdout.write('\r\|   '); 
// }, 1500);



