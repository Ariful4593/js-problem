// for(var i=1;i<=6;i++)
// {
//     var randomNum = Math.random()*6;
//     var output = Math.round(randomNum);
//     console.log(output);
// }


// var marks = [10,35,95,29,45];
// var max = marks[0];
// for(i=0;i<marks.length;i++)
// {
//     if( max > marks[i])
//     {
//         max = marks[i];
//     }
// }
// console.log(max);


// var marks = [10,20,30,40,50];
// var sum = 0;
// for(i=0;i<marks.length;i++)
// {
//     sum = sum + marks[i];
// }
// console.log(sum);


// var marks = [10,20,30,20,40,10,50];
// var uname = [];
// for(i=0;i<marks.length;i++)
// {
//     element = marks[i];
//     index = uname.indexOf(element);
//     if(index == -1)
//     {
//         uname.push(element);
//     }
// }
// console.log(uname);

var arif = "Hi My name is Ariful Islam";
var count = 0;
for(i=0;i<arif.length;i++)
{
    var char = arif[i];
    // console.log(char);
    if(char == " ")
    {
        count++;
    }
}
chara = arif.length;
space = count;
totalchar = chara - space;
console.log(totalchar);