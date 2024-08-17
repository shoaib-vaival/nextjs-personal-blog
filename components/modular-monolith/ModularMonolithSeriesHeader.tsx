import Link from 'next/link'

const ModularMonolithSeriesHeader = () => {
  return (
    <>
      <h2>Series</h2>
        <p>This post is part of a Modular Monolith series, in which we'll dive into the many facets associated with the architecture.</p>
      <ul>
        <li>
          <Link href="/blog/modular-monolith/introduction">
            Part 1: Introduction to Automating Azure Resource Creation
          </Link>
        </li>
        <li>
          Part 2: Coming Soon
        </li>
      </ul>
    </>
  )
}

export default ModularMonolithSeriesHeader
