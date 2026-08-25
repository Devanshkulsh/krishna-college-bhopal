import React, { useEffect, useState } from 'react'
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa'

const slides = [
  {
    eyebrow: 'BAMS Admission 2026 Open',
    title: 'Build Your Future in Ayurveda',
    description:
      'Study in a bright, practice-focused campus built for Ayurvedic learning, clinical exposure, and professional growth.',
    image: '/hero/campus.png',
    cta: 'Apply Now',
    href: '/admission',
  },
  {
    eyebrow: 'Ayurvedic Hospital Care',
    title: 'Learning Connected With Patient Care',
    description:
      'Experience education supported by hospital exposure, compassionate care, and modern Ayurvedic clinical facilities.',
    image: '/hero/hospital.png',
    cta: 'Explore Hospital',
    href: '/hospital',
  },
  {
    eyebrow: 'Modern Ayurveda Education',
    title: 'Herbal Science, Labs and Research',
    description:
      'Discover a learning environment where traditional Ayurvedic knowledge meets disciplined practical training.',
    image: '/hero/learning.png',
    cta: 'View Courses',
    href: '/courses',
  },
]

const HeroSlider = () => {
  const [activeSlide, setActiveSlide] = useState(0)

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActiveSlide((current) => (current + 1) % slides.length)
    }, 5200)

    return () => window.clearInterval(timer)
  }, [])

  const goToPrevious = () => {
    setActiveSlide((current) => (current === 0 ? slides.length - 1 : current - 1))
  }

  const goToNext = () => {
    setActiveSlide((current) => (current + 1) % slides.length)
  }

  return (
    <section className="hero-slider" aria-label="College highlights">
      {slides.map((slide, index) => (
        <article
          className={index === activeSlide ? 'hero-slide hero-slide--active' : 'hero-slide'}
          key={slide.title}
          aria-hidden={index !== activeSlide}
        >
          <img src={slide.image} alt="" />
          <div className="hero-slide__overlay" />

          <div className="hero-slide__content">
            <span>{slide.eyebrow}</span>
            <h1>{slide.title}</h1>
            <p>{slide.description}</p>
            <a href={slide.href}>{slide.cta}</a>
          </div>
        </article>
      ))}

      <button className="hero-slider__arrow hero-slider__arrow--prev" type="button" onClick={goToPrevious} aria-label="Previous slide">
        <FaArrowLeft aria-hidden="true" />
      </button>
      <button className="hero-slider__arrow hero-slider__arrow--next" type="button" onClick={goToNext} aria-label="Next slide">
        <FaArrowRight aria-hidden="true" />
      </button>

      <div className="hero-slider__dots" aria-label="Choose slide">
        {slides.map((slide, index) => (
          <button
            className={index === activeSlide ? 'hero-slider__dot hero-slider__dot--active' : 'hero-slider__dot'}
            type="button"
            key={slide.title}
            aria-label={`Show slide ${index + 1}`}
            aria-current={index === activeSlide}
            onClick={() => setActiveSlide(index)}
          />
        ))}
      </div>
    </section>
  )
}

export default HeroSlider
