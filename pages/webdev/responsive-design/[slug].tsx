import Sidebar from '../../../components/Sidebar'
import { getPostBySlug } from '../../../lib/getPostBySlug'
import manifest from '../manifest'

const exercises = manifest.courses.responsiveDesign.exercises.map(
  (exercise) => ({
    ...exercise,
    url: `/webdev/responsive-design/${exercise.slug}`,
  })
)

const Page = ({ params, data, content, html }) => {
  console.log({ params, data, content, html })
  return (
    <div>
      <Sidebar items={exercises} />
      <h1>{manifest.title}</h1>
      <div dangerouslySetInnerHTML={{ __html: html }} />
    </div>
  )
}
export async function getStaticProps({ params }) {
  console.log({ params })
  const slug = params.slug
  const folder = 'responsive-design'
  const pageData = manifest.courses.responsiveDesign.exercises.find(
    (exercise) => exercise.slug === slug
  )
  const { data, content, html } = await getPostBySlug({ slug, folder })

  return { props: { ...params, pageData, data, content, html, exercises } }
}

export async function getStaticPaths() {
  return {
    paths: exercises.map(({ slug }) => ({
      params: { slug },
    })),

    fallback: false,
  }
}

export default Page
