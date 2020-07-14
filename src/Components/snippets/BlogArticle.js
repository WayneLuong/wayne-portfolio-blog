import React, { useEffect, useState, useRef } from 'react'
import { useParams, Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { getPost } from '../../actions/postActions'
import { useEffectOnce } from '../includes/Hooks'
import Moment from 'react-moment';
import 'moment-timezone';

export default function BlogArticle({ homeLink }) {
    let { id } = useParams()
    const dispatch = useDispatch()
    const titleRef = useRef(null)
    const contentRef = useRef(null)
    const channel = useRef(null)
    const post = useSelector(state => state.singlePost)
    const [content, setContent] = useState(post.content ? post.content.rendered : 'Loading...')
    const [title, setTitle] = useState(post.title ? post.title.rendered : 'Loading...')

    useEffectOnce(() => {
        dispatch(getPost(id))
        if (window.innerWidth > 500) {
            channel.current.classList.add('glitch')
            setTimeout(() => {
                channel.current.classList.remove('glitch')
            }, 2000)
        } else {
            /* channel.current.classList.add('show')
            setTimeout(() => {
                channel.current.classList.remove('show')
            }, 2000) */
        }
    })

    useEffect(() => {
        setContent(post.content ? post.content.rendered : 'Loading...')
        setTitle(post.title ? post.title.rendered : 'Loading...')

        contentRef.current.innerHTML = content
        titleRef.current.innerHTML = title
    })

    return (
        <div id='blogArticle' className='flex f-center f-vertical-center f-dir-column'>
            <Link to={homeLink + 'blogs'}>
                <div className='close'>X</div>
            </Link>

            <div className='blog-container flex f-center'>
                <div className='channel-container'>
                    <div className='channel' data-text={id} ref={channel}>{id}</div>
                </div>
                <div className='blog-content'>
                    <div className='wrapper'>
                        <div style={{ marginBottom: '20px' }}>
                            <h1 className='articleTitle' ref={titleRef}></h1>
                            <Moment format="dddd, DD MMMM YYYY">{post.date}</Moment>
                        </div>
                        <br />
                        <div className="content" ref={contentRef}></div>
                    </div>
                </div>
            </div>
        </div>
    )
}
