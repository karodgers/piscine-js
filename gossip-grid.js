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
          gossips.unshift(textarea.value.trim())
          renderGossips()
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

    body.appendChild(createGossipCard('', true))

    gossips.forEach(gossip => body.appendChild(createGossipCard(gossip)))
  }

  renderGossips()

  widthRange.addEventListener('input', (e) => {
    document.querySelectorAll('.gossip').forEach(card => {
      card.style.width = `${e.target.value}px`
    })
  })

  fontSizeRange.addEventListener('input', (e) => {
    document.querySelectorAll('.gossip').forEach(card => {
      card.style.fontSize = `${e.target.value}px`
    })
  })

  backgroundRange.addEventListener('input', (e) => {
    document.querySelectorAll('.gossip').forEach(card => {
      card.style.background = `hsl(280, 50%, ${e.target.value}%)`
    })
  })
}