type Props = {
  content: string
}

const PostBody = ({ content }: Props) => {
  return (
    <article className="prose lg:prose-xl dark:prose-invert">
      <div
        dangerouslySetInnerHTML={{ __html: content }}
      />
    </article>
  )
}

export default PostBody