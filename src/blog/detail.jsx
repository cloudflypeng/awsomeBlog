import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import Markdown from 'react-markdown'
import remarkGfm from 'remark-gfm'

import { BLOG_MENU } from './blogmune'

const Article = () => {

  const { mdTitle } = useParams()
  const [message, setMessage] = useState({})
  const [article, setArticle] = useState('')

  useEffect(() => {

    let target = BLOG_MENU.find(i => i.title == mdTitle)
    setMessage(target)

    fetch(`/${mdTitle}.md`).then(stream => {
      return stream.text()
    }).then((str) => {
      setArticle(str)
    })
  }, [mdTitle])

  return (
    <div className="article mx-auto text-base">
      <h2>
        {mdTitle}
        <span className="opacity-50 text-xs mx-5">{message.author}--{message.time}</span>
      </h2>

      <Markdown remarkPlugins={[remarkGfm]}>
        {article}
      </Markdown>
    </div>
  )
}

export default Article