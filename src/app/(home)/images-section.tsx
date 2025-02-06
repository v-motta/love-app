import Image from 'next/image'
import meAndHer1 from '../../../public/me-n-her-1.jpg'
import meAndHer2 from '../../../public/me-n-her-2.jpg'
import meAndHer3 from '../../../public/me-n-her-3.jpg'

export function ImagesSection() {
  return (
    <div className="relative">
      <div className="grid grid-cols-1 md:grid-cols-3">
        <Image
          src={meAndHer1}
          alt=""
          quality={100}
          className="object-cover hidden md:block h-56 md:h-96 2xl:h-[37rem]"
        />
        <Image
          src={meAndHer2}
          alt=""
          quality={100}
          className="object-cover h-56 md:h-96 2xl:h-[37rem]"
        />
        <Image
          src={meAndHer3}
          alt=""
          quality={100}
          className="object-cover hidden md:block h-56 md:h-96 2xl:h-[37rem]"
        />
      </div>
      <span className="absolute text-zinc-50 -translate-x-1/2 top-1/3 left-1/2 text-3xl md:text-5xl text-nowrap lg:text-6xl xl:text-8xl font-monsieurLaDoulaise">
        Mayara & Vinicius
      </span>
    </div>
  )
}
