let cards = [
  //  Add your card in this section
  {
    artName: 'welcome robot',
    pageLink: './Art/joy/robot.html',
    imageLink: './Art/joy/robot.png',
    author: 'joy',
    githubLink: 'https://github.com/royranger',
  },
  {
    artName: 'This is Arttttttt',
    pageLink: './Art/christine-aqui/caqui.html',
    imageLink: '/Art/christine-aqui/caqui.png',
    author: 'christine-aqui',
    githubLink: 'https://github.com/christine-aqui',
  },
  {
    artName: '3 bouncing balls',
    pageLink: './Art/shamika-kumar/index.html',
    imageLink: '/Art/shamika-kumar/shamika-art.gif',
    author: 'shamika-kumar',
    githubLink: 'https://github.com/shamikakumar',
    artName: 'Flower',
    pageLink: './Art/Neha/index.html',
    imageLink: '/Art/Neha/flower.png',
    author: 'Neha',
    githubLink: 'https://github.com/Neha045',
  },
];

// +--------------------------------------------------------------------------------+
// +                                                                                +
// +                  YOU DO NOT NEED TO CHANGE ANYTHING BELOW THIS                 +
// +                                                                                +
// +--------------------------------------------------------------------------------+

// Creates cards from the array above
// You don't need to modify this
let contents = [];
Shuffle(cards).forEach((c) => {
  contents.push([
    `<li class="card">` +
      `<a href='${c.pageLink}'>` +
      `<img class="art-image" src='${c.imageLink}' alt='${c.artName}' />` +
      `</a>` +
      `<div class="flex-content">` +
      `<a href='${c.pageLink}'><h3 class="art-title">${c.artName}</h3></a>` +
      `<p class='author'><a href="${c.githubLink}" target="_blank"><i class="fab fa-github"></i> ${c.author}</a> </p>` +
      `</div>` +
      `</li>`,
  ]);
});

document.getElementById('cards').innerHTML = contents.join('');

function Shuffle(o) {
  for (
    var j, x, i = o.length;
    i;
    j = parseInt(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x
  );
  return o;
}
