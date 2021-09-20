//Color codes used from the document given to create the cards with given background color.
const color = [
    '#6F98A8',
    '#2B8EAD',
    '#2F454E',
    '#2B8EAD',
    '#2F454E',
    '#BFBFBF',
    '#BFBFBF',
    '#6F98A8',
    '#2F454E',
  ];
  const cardSize = 9;
  const cardView = document.querySelector('.card');
  const node = document.getElementsByClassName('list-item');
  
  window.onload = () => sortCards();
  window.addEventListener('resize', () => initRender());


  //Initial Render function which checks the screen size and based on it provides the responsive design
  const initRender = () => {
    if (window.innerWidth <= 767) {
      for (let i = 0; i < node.length; i++) {
        node[i].style.backgroundColor = '#EFEFEF';
        node[i].style.borderLeft = `10px solid ${color[i]}`;
      }
    } else {
      for (let i = 0; i < node.length; i++) {
        node[i].style.backgroundColor = color[i];
      }
    }
  };


  //Function to shuffle the cards. Creates a random rumber between 1 to 9 and appends to the parent div
  const shuffleCards = () => {
    for (let i = cardView.children.length; i >= 0; i--) {
        cardView.appendChild(cardView.children[(Math.random() * i) | 0]);
    }
  };
 
  //Function for sorting the cards. Deletes all the child nodes and iterates from 1 to 9 and appends to the parent div
  const sortCards = () => {
    cardView.innerHTML = '';
    for (let i = 0; i < cardSize; i++) {
        cardView.appendChild(createNode(i + 1));
    }
    initRender();
  };
  
  //Creates a parent div element and attaches properties to it
  const createNode = (val) => {
    let div = document.createElement('div');
    div.className = 'list-item';
    div.textContent = val;
    return div;
  };