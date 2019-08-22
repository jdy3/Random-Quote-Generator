const funny = {
  1: {
    quote: "Any girl can be glamorous. All you have to do is stand still and look stupid.",
    author: "Hedy Lamarr"
  },
  2: {
    quote: "I can excuse everything but boredom. Boring people don't have to stay that way.",
    author: "Hedy Lamarr"
  },
  3: {
    quote: "I have always had a talent for irritating women, since I was fourteen.",
    author: "Marilyn Monroe"},
  }

function randomFunny() {
  var num = Math.floor((Math.random() * (3 - 1 + 1)) + 1);
  var result = `"${funny[num].quote}" 
                                                 ${funny[num].author}`;
  return result;
}

randomFunny();

const insightful = {
  1: {
    quote: "Analysis gave me great freedom of emotions and fantastic confidence. I felt I had served my time as a pupet.",
    author: "Hedy Lamarr"
  },
  2: {
    quote: "I'm selfish, impatient, and a little insecure. I make mistakes, I'm out of control, and at times hard to handle. But if you can't handle me at my worst, then you sure as hell don't deserve me at my best.",
    author: "Marilyn Monroe"
  },
  3: {
    quote: "Strong minds discuss ideas, average minds discuss events, weak minds discuss people.",
    author: "Socrates"
  }
  }

function randomInsightful() {
  var num = Math.floor((Math.random() * (3 - 1 + 1)) + 1);
  var result = `"${insightful[num].quote}" 
                                                 ${insightful[num].author}`;
  return result;
}

randomInsightful();

const wise = {
  1: {
    quote: "A woman knows by intuition, or instinct, what is best for herself.",
    author: "Marilyn Monroe"    
  },
  2: {
    quote: "Friends accept you the way you are.",
    author: "Marilyn Monroe"
  },
  3: {
    quote: "We should all start to live before we get old.",
    author: "Marilyn Monroe"
  },
  4: {
    quote: "I am thankful to all those who said NO. Because of them, I did it myself.",
    author: "Einstein"
  },
  5: {
    quote: "Be careful with how much you tolerate. You are teaching them how to treat you.",
    author: "Unknown" 
  },
  6: {
    quote: "Happiness is not about getting all you want, it is about enjoying all you have.",
    author: "Unknown"
  },
  7: {
    quote: "Don't wait for things to get better. Life will always be complicated. Learn to be happy right now, otherwise you'll run out of time.",
    author: "BRIGHTSIDE.ME"
  },
  8: {
    quote: "People are illogical, unreasonable, and self-centered. Love them anyway.",
    author: "Kent M. Keith"
  },
  9: {
    quote: "If you do good, people will accuse you of selfish ulteriror motives. Do good anyway.",
    author: "Kent M. Keith"
  },
  10: {
    quote: "If you are successful, you will win false friends and true enemies. Succeed anyway.",
    author: "Kent M. Keith"
  },
  11: {
    quote: "The good you do today will be forgotten tomorrow. Do good anyway.",
    author: "Kent M. Keith"
  },
  12: {
    quote: "Honesty and frankness make you vulnerable. Be honest and frank anyway.",
    author: "Kent M. Keith"
  },
  13: {
    quote: "The biggest men and women with the biggest ideas can be shot down by the smallest men and women with the smallest minds. Think big anyway.",
    author: "Kent M. Keith"
  },
  14: {
    quote: "People favour under-dogs but follow only top-dogs. Fight for a few under-dogs anyway.",
    author: "Kent M. Keith"
  },
  15: {
    quote: "What you spend years building may be destroyed overnight. Build anyway.",
    author: "Kent M. Keith"
  },
  16: {
    quote: "People really need help but may attack you if do help them. Help them anyway.",
    author: "Kent M. Keith"
  },
  17: {
    quote: "Give the world the best you have and you'll get kicked in the teeth. Give the world the best you have anyway.",
    author: "Kent M. Keith"
  }
}

function randomWise() {
  var num = Math.floor((Math.random() * (17 - 1 + 1)) + 1);
  var result = `"${wise[num].quote}" 
                                                 ${wise[num].author}`;
  return result;
}

randomWise();


const sad = {
  1: {
    quote: "Success makes so many people hate you. I wish it wasn't that way. It would be wonderful to enjoy success without seeing envy in the eyes of those around you.",
    author: "Marilyn Monroe"
  },
  2: {
    quote: "Sometimes I've been to a party where no-one spoke to me for a whole evening. The men, frightened by their wives or sweeties, would give me a wide berth. And the ladies would gang-up in a corner to discuss my dangerous character.",
    author: "Marilyn Monroe"
  },
  3: {
    quote: "Sometimes people pretend you're a bad person so they don't feel guilty about the things they did to you.",
    author: "Motivational"
  }
  }

function randomSad() {
  var num = Math.floor((Math.random() * (3 - 1 + 1)) + 1);
  var result = `"${sad[num].quote}" 
                                                 ${sad[num].author}`;
  return result;
}

var banner = document.getElementById('banner');

var funnyButton = document.getElementById('funnyButton');

function changeTextFunny(event) {
  banner.innerText = randomFunny();
}

funnyButton.addEventListener('click', changeTextFunny);

var insightfulButton = document.getElementById('insightfulButton');

function changeTextInsightful(event) {
  banner.innerText = randomInsightful();
}

insightfulButton.addEventListener('click', changeTextInsightful);

var wiseButton = document.getElementById('wiseButton');

function changeTextWise(event) {
  banner.innerText = randomWise();
}

wiseButton.addEventListener('click', changeTextWise);

var sadButton = document.getElementById('sadButton');

function changeTextSad(event) {
  banner.innerText = randomSad();
}

sadButton.addEventListener('click', changeTextSad);








