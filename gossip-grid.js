import { gossips } from './gossip-grid.data.js'

export function grid() {
  const body = document.body

  const ranges = document.createElement('div')
  ranges.className = 'ranges'

  const createRange = (id, min, max) => {
    const range = document.createElement('input')
    range.type = 'range'
    range.id = id
    range.min = min
    range.max = max
    range.className = 'range'
    return range
  }

  const widthRange = createRange('width', 200, 800)
  const fontSizeRange = createRange('fontSize', 20, 40)
  const backgroundRange = createRange('background', 20, 75)

  ranges.append(widthRange, fontSizeRange, backgroundRange)
  body.appendChild(ranges)

  const createGossipCard = (text, isForm = false) => {
    const card = document.createElement('div')
    card.className = 'gossip'

    if (isForm) {
      const textarea = document.createElement('textarea')
      const button = document.createElement('button')
      button.textContent = 'Share gossip!'
      button.addEventListener('click', () => {
        if (textarea.value.trim()) {
          const newGossip = textarea.value.trim()
          gossips.unshift(newGossip)
          renderGossips()
          textarea.value = ''
        }
      })
      card.append(textarea, button)
    } else {
      card.textContent = text
    }

    return card
  }

  const renderGossips = () => {

    document.querySelectorAll('.gossip').forEach(el => el.remove())

    const formCard = createGossipCard('', true)
    formCard.classList.add('gossip-form')
    body.appendChild(formCard)

    gossips.forEach(gossip => body.appendChild(createGossipCard(gossip)))

    updateStyles()
  }

  const updateStyles = () => {
    const width = widthRange.value
    const fontSize = fontSizeRange.value
    const background = backgroundRange.value
    document.querySelectorAll('.gossip').forEach(card => {
      card.style.width = `${width}px`
      card.style.fontSize = `${fontSize}px`
      card.style.background = `hsl(280, 50%, ${background}%)`
    })
  }

  widthRange.addEventListener('input', updateStyles)
  fontSizeRange.addEventListener('input', updateStyles)
  backgroundRange.addEventListener('input', updateStyles)

  renderGossips()
}