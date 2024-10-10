const quotes = [
  {
    text: "''Mama''",
    author: "Vincent Kuhl",
    filePath: "./images/image1.jpg",
  },
  {
    text: "''Do not pray for easy lives. Pray to be stronger men! Do not pray for tasks equal to your powers. Pray for powers equal to your tasks''",
    author: "Phillips Brooks",
    filePath: "./images/image0.jpg",
    // Goodreads. (n.d.). [Image of Phillips Brooks]. Retrieved from https://images.gr-assets.com/authors/1479960442p5/232518.jpg
  },
  {
    text: "''呃呃我不會做一個''",
    author: "Alex",
    filePath: "./images/image4.png",
    //(img:) ECTS CMP Ecosystem. (2023). [Image of ECTS CMP Ecosystem]. Retrieved from https://ecosystem.ects-cmp.com/wp-content/uploads/2023/09/IMG_1534-1024x768.jpg
  },
  {
    text: "''Plz work guys''",
    author: "Benjamin Hedderman",
    filePath: "./images/image2.jpg",
  },
  {
    text: "''The best way to predict your future is to create it.''",
    author: "Abraham Lincoln",
    filePath: "./images/image3.jpg",
    //Photo by <a href="https://unsplash.com/@libraryofcongress?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Library of Congress</a> on <a href="https://unsplash.com/photos/president-abraham-lincoln-i_9hgrmcUGw?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Unsplash</a>
  },
];

document.querySelector("#swap").addEventListener("click", () => {
  const quote = document.querySelector("#quote");
  const name = document.querySelector("#name");
  const swap = document.querySelector("#swapImg");

  const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
  quote.innerHTML = randomQuote.text;
  name.innerHTML = randomQuote.author;
  swap.src = randomQuote.filePath;
});
