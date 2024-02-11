import { useState, useEffect, useRef } from 'react'
import PropTypes from 'prop-types'

export function LazyImage({ src, alt, title, className }) {
  const [isLoading, setIsLoading] = useState(true)
  const [imageSrc, setImageSrc] = useState(null)
  const imgRef = useRef(null)
  const observer = useRef(null)

  useEffect(() => {
    observer.current = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting && !imageSrc) {
          setIsLoading(true)
          setImageSrc(src)
          observer.current.unobserve(entry.target)
        }
      })
    })

    const imgElement = imgRef.current

    if (imgElement && observer.current) {
      observer.current.observe(imgElement)
    }

    return () => {
      if (imgElement && observer.current) {
        observer.current.unobserve(imgElement)
      }
    }
  }, [src, imageSrc])

  if (imageSrc) {
    const img = new Image()
    img.src = imageSrc
    img.onload = () => setIsLoading(false)
    img.onerror = () => setIsLoading(false)
  }

  return (
    <>
      {isLoading && <div className='CargandoImage'></div>}
      <img ref={imgRef} src={imageSrc} alt={alt} title={title} className={className} />
    </>
  )
}

LazyImage.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  className: PropTypes.string.isRequired
}
