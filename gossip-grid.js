import { gossips } from './gossip-grid.data.js';

export function grid() {
  const body = document.body;

  const ranges = document.createElement('div');
  ranges.className = 'ranges';

  const createRange = (id, min, max) => {
    const range = document.createElement('input');
    range.type = 'range';
    range.id = id;
    range.min = min;
    range.max = max;
    range.className = 'range';
    range.value = ''; 
    return range;
  };

  const widthRange = createRange('width', 200, 800);
  const fontSizeRange = createRange('fontSize', 20, 40);
  const backgroundRange = createRange('background', 20, 75);

  ranges.append(widthRange, fontSizeRange, backgroundRange);
  body.appendChild(ranges);

  widthRange.addEventListener('input', function () {
    document.querySelectorAll('.gossip').forEach(card => {
      card.style.width = `${widthRange.value}px`;
    });
  });

  fontSizeRange.addEventListener('input', function () {
    document.querySelectorAll('.gossip').forEach(card => {
      card.style.fontSize = `${fontSizeRange.value}px`;
    });
  });

  backgroundRange.addEventListener('input', function () {
    document.querySelectorAll('.gossip').forEach(card => {
      card.style.background = `hsl(280, 50%, ${backgroundRange.value}%)`;
    });
  });

  const createGossipCard = (text, isForm = false) => {
    const card = document.createElement('div');
    card.className = 'gossip';

    if (isForm) {
      const textarea = document.createElement('textarea');
      textarea.setAttribute('placeholder', 'Got a gossip to share?');
      const button = document.createElement('button');
      button.textContent = 'Share gossip!';

      button.addEventListener('click', function (event) {
        event.preventDefault(); 
        if (textarea.value.trim()) {
          const newGossip = textarea.value.trim();
          appendNewGossip(newGossip); 
          textarea.value = ''; 
        }
      });

      card.append(textarea, button);
    } else {
      card.textContent = text;
    }

    return card;
  };

  const appendNewGossip = (gossipText) => {
    const newCard = createGossipCard(gossipText);
    const formCard = document.querySelector('.gossip-form');
    document.body.insertBefore(newCard, formCard.nextSibling); 
  };

  const renderGossips = () => {

    document.querySelectorAll('.gossip').forEach(el => el.remove());

    const formCard = createGossipCard('', true);
    formCard.classList.add('gossip-form');
    body.appendChild(formCard);

    gossips.forEach(gossip => {
      const gossipCard = createGossipCard(gossip);
      body.appendChild(gossipCard);
    });
  };

  renderGossips(); 
}
