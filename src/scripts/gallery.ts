export function initializeGalleries() {
  // Three copies form a continuous ring. Once scrolling settles, recenter the
  // equivalent original without animation; the surrounding images stay identical.
  document.querySelectorAll<HTMLElement>('.interest-gallery').forEach((rail) => {
    if (rail.dataset.initialized) return
    rail.dataset.initialized = 'true'
    const navigation = document.querySelector<HTMLElement>(`[data-for="${rail.id}"]`)!
    const buttons = Array.from(
      document.querySelectorAll<HTMLButtonElement>(`button[aria-controls="${rail.id}"][data-step]`)
    )
    const counter = navigation.querySelector<HTMLElement>('.gallery-position')!
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)')
    const originals = Array.from(rail.children) as HTMLElement[]
    let visible: HTMLElement[] = []
    let slides: HTMLElement[] = []
    let current = 0
    let frame = 0
    let settleTimer: ReturnType<typeof setTimeout>
    const centerOn = (slide: HTMLElement, smooth = false) => {
      const left = slide.offsetLeft + slide.offsetWidth / 2 - rail.clientWidth / 2
      // Ignore subpixel rounding so settling cannot start another scroll loop.
      if (Math.abs(rail.scrollLeft - left) < 1) return
      rail.scrollTo({
        left,
        behavior: smooth && !reducedMotion.matches ? 'smooth' : 'instant'
      })
    }
    const update = () => {
      frame = 0
      const center = rail.scrollLeft + rail.clientWidth / 2
      const radius = Math.max(650, rail.clientWidth)
      rail.style.setProperty('--camera-distance', `${Math.max(1000, rail.clientWidth * 1.5)}px`)
      let nearest = Infinity
      slides.forEach((slide, index) => {
        const offset = slide.offsetLeft + slide.offsetWidth / 2 - center
        const distance = Math.abs(offset)
        if (distance < nearest) {
          nearest = distance
          current = index
        }
        // Arc length determines the angle; position and orientation share one
        // circle on the X/Z ground plane: x² + (z + radius)² = radius².
        const angle = offset / radius
        const theta = Math.max(-1.35, Math.min(angle, 1.35))
        slide.style.visibility = Math.abs(angle) <= 1.35 ? 'visible' : 'hidden'
        slide.style.zIndex = String(Math.round((1 - Math.abs(theta) / 1.35) * 1000))
        slide.style.setProperty('--gallery-offset', `${offset}px`)
        slide.style.setProperty('--circle-x', `${radius * Math.sin(theta)}px`)
        slide.style.setProperty('--circle-z', `${radius * (Math.cos(theta) - 1)}px`)
        slide.style.setProperty('--circle-angle', `${theta}rad`)
        slide.style.setProperty(
          '--gallery-opacity',
          String(1 - Math.min(Math.abs(theta) / 1.35, 1) * 0.38)
        )
      })
      const logicalIndex = visible.length ? current % visible.length : 0
      counter.textContent = visible.length ? `${logicalIndex + 1} / ${visible.length}` : ''
    }
    const schedule = () => {
      if (!frame) frame = requestAnimationFrame(update)
    }
    const reflect = (slide: HTMLElement) => {
      slide.querySelectorAll<HTMLImageElement>('.gallery-image > img').forEach((photo) => {
        const sync = () =>
          photo.parentElement!.style.setProperty(
            '--reflection-image',
            `url("${photo.currentSrc || photo.src}")`
          )
        photo.addEventListener('load', sync)
        if (photo.complete) sync()
      })
    }
    const clone = (original: HTMLElement) => {
      const copy = original.cloneNode(true) as HTMLElement
      copy.dataset.clone = 'true'
      copy.setAttribute('aria-hidden', 'true')
      copy.removeAttribute('id')
      copy.querySelectorAll('[id]').forEach((element) => element.removeAttribute('id'))
      copy.querySelectorAll<HTMLAnchorElement>('a').forEach((link, index) => {
        link.tabIndex = -1
        link.addEventListener('click', (event) => {
          if (event.ctrlKey || event.metaKey || event.shiftKey || event.altKey) return
          event.preventDefault()
          original.querySelectorAll<HTMLAnchorElement>('a')[index].click()
        })
      })
      reflect(copy)
      return copy
    }
    const rebuild = () => {
      clearTimeout(settleTimer)
      rail.querySelectorAll('[data-clone]').forEach((copy) => copy.remove())
      visible = originals.filter((slide) => !slide.hidden)
      if (visible.length > 1) {
        rail.prepend(...visible.map(clone))
        rail.append(...visible.map(clone))
      }
      slides = Array.from(rail.children).filter(
        (slide) => !(slide as HTMLElement).hidden
      ) as HTMLElement[]
      navigation.hidden = !visible.length
      buttons.forEach((button) => {
        button.hidden = !visible.length
        button.disabled = visible.length < 2
      })
      rail.hidden = !visible.length
      if (visible.length) centerOn(visible[0])
      update()
    }
    const settle = () => {
      clearTimeout(settleTimer)
      update()
      const slide = slides[current]
      if (!slide) return
      // Use layout centers, not transformed bounds: native scroll snapping
      // otherwise keeps chasing the moving cards as the circle is projected.
      centerOn(slide.dataset.clone ? visible[current % visible.length] : slide)
      update()
    }
    const step = (direction: number) => {
      if (visible.length < 2) return
      settle()
      centerOn(slides[current + direction], true)
    }
    buttons.forEach((button) =>
      button.addEventListener('click', () => step(Number(button.dataset.step)))
    )
    rail.addEventListener('keydown', (event) => {
      if (event.key === 'ArrowLeft' || event.key === 'ArrowRight') {
        event.preventDefault()
        step(event.key === 'ArrowLeft' ? -1 : 1)
      }
    })
    rail.addEventListener(
      'scroll',
      () => {
        schedule()
        clearTimeout(settleTimer)
        settleTimer = setTimeout(settle, 160)
      },
      { passive: true }
    )
    rail.addEventListener('gallery-filter', rebuild)
    originals.forEach(reflect)
    let previousWidth = rail.clientWidth
    new ResizeObserver(() => {
      if (rail.clientWidth === previousWidth) return
      previousWidth = rail.clientWidth
      if (visible.length) centerOn(visible[current % visible.length])
      schedule()
    }).observe(rail)
    rebuild()
  })
}
