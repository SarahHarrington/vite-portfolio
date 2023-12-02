const body: HTMLElement | null = document.querySelector('.body')
const home: HTMLElement | null = document.querySelector('.home')
const about: HTMLElement | null = document.querySelector('.about')
const portfolio: HTMLElement | null = document.querySelector('.portfolio')
const portSlides: Element[] = [...document.querySelectorAll('.portfolio-item')]
const header: HTMLElement | null = document.querySelector('.header')
const homeButton: HTMLElement | null = document.querySelector('.home-button')
const myWorkButton: HTMLElement | null = document.querySelector('.my-work-button')
const aboutMeButton: HTMLElement | null = document.querySelector('.about-me-button')
const navLinks: NodeListOf<HTMLElement> = document.querySelectorAll('.nav-link')
const descriptText: HTMLElement | null = document.querySelector('.descript-text')
const contactLinks = document.querySelectorAll('.contact-links')

let myHomeTop: number | undefined = header?.offsetHeight
let homeAndWorkBorder: number | undefined = home?.offsetHeight
let workAndAboutBorder: number | undefined = (home?.offsetHeight ?? 0) + (portfolio?.offsetHeight ?? 0)
let aboutAndContactBorder: number | undefined =
  (header?.offsetHeight ?? 0) +
  (home?.offsetHeight ?? 0) +
  (portfolio?.offsetHeight ?? 0) +
  (about?.offsetHeight ?? 0)

  if (portSlides) {
    portSlides.forEach((slide) => {
      const slideButton = slide.querySelector('.slide-button')
      slideButton?.addEventListener('click', showPop)
      slide.addEventListener('mouseenter', showPortSlide)
      slide.addEventListener('mouseleave', showPortSlide)
    })
  }

function showPortSlide(e: Event): void {
  if (e.target instanceof Element) e.target.children[0].classList.toggle('port-item-slide')
}

contactLinks.forEach((link: Element) => {
  link.addEventListener('mouseenter', updateDescriptText)
  link.addEventListener('mouseleave', defaultText)
})

function updateDescriptText(e: Event): void {
  if (e.target instanceof Element && descriptText) { 
    switch (e.target.id) {
      case 'email':
        descriptText.innerHTML = 'Email Me!'
        break
      case 'github':
        descriptText.innerHTML = 'Check out my repos!'
        break
      case 'twitter':
        descriptText.innerHTML = 'See my Tweets!'
        break
      case 'linkedin':
        descriptText.innerHTML = 'Professional Networking!'
        break
      case 'resume':
        descriptText.innerHTML = 'My resume!'
        break
      case 'blog':
        descriptText.innerHTML = 'Check out my blog posts!'
        break
      default:
        descriptText.innerHTML = 'Software Engineer'
        break
    }
  }
}

function defaultText(): void {
  if (descriptText) descriptText.innerHTML = 'Software Engineer'
}

let lastPosition = window.scrollY

function scrollToHome(): void {
  const homeArea =   document.getElementById('home-area')
  if (homeArea) homeArea.scrollIntoView({ behavior: 'smooth', block: 'start', inline: 'nearest' })
}

function scrollToMyWork(): void {
  const portfolio = document.getElementById('portfolio')
  if (portfolio) portfolio.scrollIntoView({ behavior: 'smooth', block: 'start', inline: 'nearest' })
}

function scrollToAboutMe(): void {
  const aboutMe = document.getElementById('about-me')
  if (aboutMe) aboutMe.scrollIntoView({ behavior: 'smooth', block: 'start', inline: 'nearest' })
}

function scrollDirection(): void {
  lastPosition = window.scrollY
  if (lastPosition && workAndAboutBorder && homeAndWorkBorder && aboutAndContactBorder && header && myHomeTop) {
    if (lastPosition < workAndAboutBorder && lastPosition > homeAndWorkBorder) {
      header.style.background = '#F8FBF7'
      navLinks.forEach((link) => {
        link.style.background = '#F8FBF7'
        link.style.color = '#19091C'
      })
    }
    if (lastPosition > myHomeTop && lastPosition < homeAndWorkBorder) {
      header.style.background = '#19091C'
      navLinks.forEach((link) => {
        link.style.background = '#19091C'
        link.style.color = '#F8FBF7'
      })
    }
    if (
      lastPosition > workAndAboutBorder &&
      lastPosition < aboutAndContactBorder
    ) {
      header.style.background = '#19091C'
      navLinks.forEach((link) => {
        link.style.background = '#19091C'
        link.style.color = '#F8FBF7'
      })
    }
    if (lastPosition > aboutAndContactBorder) {
      header.style.background = '#F8FBF7'
      navLinks.forEach((link) => {
        link.style.background = '#F8FBF7'
        link.style.color = '#19091C'
      })
    }
  }
}

let activePop: HTMLElement | null
let popOpen: boolean = false
function showPop(e: Event) {
  if (e.target instanceof Element) {
    popOpen = true
    activePop = document.querySelector(`.${e.target.id}`)
    if (activePop) activePop.style.display = 'grid'
    const popClose = activePop?.querySelector('.close-pop')
    popClose?.addEventListener('click', closePop)
    body?.classList.add('no-scroll')
  }
}

function closePop() {
  popOpen = false
  if (activePop) activePop.style.display = 'none'
  body?.classList.remove('no-scroll')
}

function checkPop(e: Event) {
  if (e.target instanceof Element) {
    if (popOpen === true) {
      if (e.target.classList.contains('pop')) {
        return
      } else {
        closePop()
      }
    }
    if (popOpen === false) {
      if (e.target.classList.contains('slide-button')) {
        showPop(e)
      }
    }
  }
}

window.addEventListener('scroll', scrollDirection)
homeButton?.addEventListener('click', scrollToHome)
myWorkButton?.addEventListener('click', scrollToMyWork)
aboutMeButton?.addEventListener('click', scrollToAboutMe)
window.addEventListener('click', checkPop)
