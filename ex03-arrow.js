var x=new test();
console.log('x=', x);
setInterval(function () { 
     console.log('x=', x.name);
},1000);
// template1
// //hoist
// function test(){
//      console.log('test');
//      this.name = 'Seangtong';
//      console.log('xxxx');
//      var me = this;
//      setInterval(function () { 
//           me.name += '*';
//      }, 1000);
// }

// template2
// function test() {
//      this.name = 'Seangtong';
//      setInterval(function () { 
//           this.name += '*';
//      }.bind(this), 1000);
// }
// template3
// arrow function
// arrow ไม่มี this เป็นของตัวเอง this จะหมายถึงตัวแม่มัน
function test() {
     this.name = "Seangtong";
     setInterval(() => { this.name += "*";}, 1000);
}