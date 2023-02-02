export default function Footer() {
  return (
    <p className='mx-auto mt-16 mb-10 text-center text-quaternary'>
      Crafted with Passion by
      <a
        className='ml-1 text-secondary hover:text-primary group'
        href='https://dunyan.vercel.app'
        target='_blank'
        rel='noopener noreferrer'
      >
        Ong Dun Yan
        <span className='ml-1 transition-opacity duration-200 ease-in-out opacity-0 group-hover:opacity-100'>
          ↗
        </span>
      </a>
    </p>
  )
}
