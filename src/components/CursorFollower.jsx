import { useEffect, useRef } from 'react'
import gsap from 'gsap'

export default function CursorFollower() {
  const cursorRef = useRef(null)

  useEffect(() => {
    const cursor = cursorRef.current
    const pointerQuery = window.matchMedia(
      '(hover: hover) and (pointer: fine) and (min-width: 641px)',
    )

    if (!pointerQuery.matches || !cursor) return undefined

    const moveX = gsap.quickTo(cursor, 'x', { duration: 0.18, ease: 'power3.out' })
    const moveY = gsap.quickTo(cursor, 'y', { duration: 0.18, ease: 'power3.out' })

    function handleMove(event) {
      moveX(event.clientX)
      moveY(event.clientY)
      cursor.classList.add('cursor-follower--visible')
      cursor.classList.toggle(
        'cursor-follower--interactive',
        event.target instanceof Element && Boolean(event.target.closest('a, button')),
      )
    }

    function handleLeave() {
      cursor.classList.remove('cursor-follower--visible', 'cursor-follower--interactive')
    }

    document.addEventListener('pointermove', handleMove)
    document.addEventListener('pointerleave', handleLeave)

    return () => {
      document.removeEventListener('pointermove', handleMove)
      document.removeEventListener('pointerleave', handleLeave)
      gsap.killTweensOf(cursor)
    }
  }, [])

  return <span className="cursor-follower" ref={cursorRef} aria-hidden="true" />
}
