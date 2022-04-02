var message = []
message [0] ="You are so creative!!";
message [1] ="Don't count the days make the days count!";
message [2] ="You are beautiful";
message [3] ="Knock Knock- Who's the kindest person I know- YOU!!";
message [4] ="Life is better with true friends- Mine is with you";
message [5] ="Twinzy's for life ( we never ended up deciding a spelling)";
message [6] ="Don't feel bad if you don't like what everyone pretends to love";
message [7] ="A year from now you will wish you had started today so do it now !!!";
message [8] ="Never forget to take a break for fun (and eat ur meals)";
message [9] ="True friends are always together in spirit. NO matterr how far apart our future takes us";
message [10]="True friends are always together in spirit. NO matterr how far apart our future takes us";
message [11]="Tick tok..I hold close the time we spent in class & the water filing place (wait the wc was ur house in school too!!)";


function Message()
{
  var randomMessage = Math.floor(Math.random()*message.length);
  document.getElementById('pmessage').innerHTML = message[randomMessage];
}

var hint = []
hint [0] = "Remember the first time you almost burnt down ur house(firecrakers)";
hint [1] = "What is the most scariest thing in the world!";
hint [2] = "We all know u love cats! but how many are there?";
hint [3] = "hmmmm... What to think about when I'm bored in class?";
hint [4] = "Butter ---Fly.. Finally!!";
hint [5] = "The rainbow and stars just looked cute";
hint [6] = "Ahh.. Let's scare hayat again. The ghost is back in business";
hint [7] = "The last minute assignments we did together";
hint [8] = "The cute food temptation devil";
hint [9] = "Your favorite emoji(diff color) is hinding among us (2 hints)";
hint [10] = "Multitasking!!";
hint [11] = "The best period of the week!";
hint [12] = "The best school party where all of us were together";
hint [13] = "Are you sure you don't live there?- Its your house";

function Hint()
{
  var randomHint = Math.floor(Math.random()*hint.length);
  document.getElementById('phint').innerHTML = hint[randomHint];
}