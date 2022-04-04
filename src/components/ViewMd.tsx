const hljs = require('highlight.js')
const MarkdownIt = require('markdown-it')
// import 'highlight.js/styles/dark.css'
import 'github-markdown-css'
import markdownItAnchor from 'markdown-it-anchor'
import markdownItTocDoneRight from 'markdown-it-toc-done-right'
import { useEffect, useState } from 'react'
import styled from 'styled-components'

interface PropsStruct {
    /**
     * @description 文章的详情内容
     */
    content: string
}

let navHtml = ''

const md = new MarkdownIt({
    html: true,
    highlight: function (str: string, lang: any) {
        if (lang && hljs.getLanguage(lang)) {
            try {
                return '<pre class="hljs"><code>' +
                    hljs.highlight(lang, str, true).value +
                    '</code></pre>';
            } catch (__) { }
        }
        return '<pre class="hljs"><code>' + md.utils.escapeHtml(str) + '</code></pre>';
    }
}).use(markdownItAnchor, { permalink: true, permalinkBefore: true, permalinkSymbol: '#' })
    .use(markdownItTocDoneRight, {
        callback: (html: string) => {
            navHtml = html
        }
    })

const ViewMd = (props: PropsStruct) => {
    const { content } = props
    const [resultHtml, setResultHtml] = useState('')

    useEffect(() => {
        let res = md.render(content);
        setResultHtml(res)
    }, [content])

    return (
        <Box className='viewMd'>
            <div dangerouslySetInnerHTML={{ __html: resultHtml }} className='markdown-body content'></div>
            <div dangerouslySetInnerHTML={{ __html: navHtml }} className='markdown-body nav'></div>
        </Box>
    );
}

const Box = styled.div`
    display: flex;
    .content{
        flex: 1;
    }
    .nav{
        width: 250px;
    }
`

export default ViewMd;