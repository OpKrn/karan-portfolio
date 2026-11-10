import { useLayoutEffect } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export default function usePortfolioMotion(containerRef) {
  useLayoutEffect(() => {
    const media = gsap.matchMedia()

    media.add('(prefers-reduced-motion: no-preference)', () => {
      const context = gsap.context(() => {
        const intro = gsap.timeline({ defaults: { ease: 'power3.out' } })
        intro
          .from('.hero__role, .hero__topline .availability', {
            y: 12,
            autoAlpha: 0,
            duration: 0.6,
            stagger: 0.08,
          })
          .from('.hero__name', { yPercent: 18, autoAlpha: 0, duration: 0.95 }, '-=0.28')
          .from('.hero__visual', { scale: 0.96, autoAlpha: 0, duration: 0.9 }, '-=0.55')
          .from('.hero__statement > *', {
            y: 18,
            autoAlpha: 0,
            duration: 0.7,
            stagger: 0.08,
          }, '-=0.55')
          .from('.hero__footer > *', {
            y: 10,
            autoAlpha: 0,
            duration: 0.5,
            stagger: 0.08,
          }, '-=0.3')

        gsap.utils.toArray('.reveal').forEach((element) => {
          const siblings = Array.from(element.parentElement?.children ?? [])
          gsap.fromTo(
            element,
            { y: 24, autoAlpha: 0 },
            {
              y: 0,
              autoAlpha: 1,
              duration: 0.72,
              delay: Math.min(Math.max(siblings.indexOf(element), 0) * 0.065, 0.26),
              ease: 'power2.out',
              scrollTrigger: {
                trigger: element,
                start: 'top 88%',
                once: true,
              },
            },
          )
        })

        gsap.utils.toArray('.project-art').forEach((artwork) => {
          gsap.to(artwork, {
            yPercent: -3,
            ease: 'none',
            scrollTrigger: {
              trigger: artwork,
              start: 'top bottom',
              end: 'bottom top',
              scrub: 0.8,
            },
          })
        })

        gsap.to('.hero-graphic__orbit--two', {
          yPercent: -8,
          ease: 'none',
          scrollTrigger: {
            trigger: '.hero',
            start: 'top top',
            end: 'bottom top',
            scrub: 0.7,
          },
        })

        gsap.to('.contact-orbit__ring--outer', {
          rotation: 360,
          duration: 48,
          repeat: -1,
          ease: 'none',
          transformOrigin: '50% 50%',
        })

        gsap.to('.contact-orbit__ring--middle', {
          rotation: -360,
          duration: 34,
          repeat: -1,
          ease: 'none',
          transformOrigin: '50% 50%',
        })

        gsap.to('.contact-orbit__ring--inner', {
          rotation: 360,
          duration: 24,
          repeat: -1,
          ease: 'none',
          transformOrigin: '50% 50%',
        })
      }, containerRef)

      return () => context.revert()
    })

    return () => media.revert()
  }, [containerRef])
}
