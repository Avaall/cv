import { useState, useEffect, useRef } from 'react'
import PropTypes from 'prop-types'

export function LazyImage ({ src, alt, title, className }) {
  const [imageSrc, setImageSrc] = useState(null)
  const imgRef = useRef(null)
  const observer = useRef(null)

  useEffect(() => {
    const imgElement = imgRef.current

    observer.current = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setImageSrc(src)
          observer.current.unobserve(entry.target)
        }
      })
    })

    if (imgElement) {
      observer.current.observe(imgElement)
    }

    return () => {
      if (observer.current && imgElement) {
        observer.current.unobserve(imgElement)
      }
    }
  }, [src])

  return <img ref={ imgRef } src={ imageSrc } alt={ alt } title={ title } className={ className } />
}

LazyImage.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  className: PropTypes.string.isRequired
}
