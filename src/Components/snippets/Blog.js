import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import Slide from 'react-reveal/Slide';
import { Link } from 'react-router-dom'
import Moment from 'react-moment';
import 'moment-timezone';
import { getCat } from '../../actions/postActions'


export default function Blog(props) {
    const { blog, int, homeLink } = props
    const dispatch = useDispatch()

    //console.log(blog)

    //Get categories- TODO
    useEffect(() => {
        dispatch(getCat(blog.categories))
    }, [])

    return (
        <Slide left={int % 2 == 0 ? true : false} right={int % 2 == 0 ? false : true}>
            <li className="timeline__entry" >
                <Moment format="DD MMMM YYYY">{blog.date}</Moment>
                <Link to={`${homeLink}blogs/${blog.id}`}>
                    <h3 className="timeline__headline noSelect" unselectable='on'>
                        {blog.title.rendered}
                    </h3>
                </Link>

                <ul className="timeline__list">
                    {blog.excerpt.rendered.replace(/(<([^>]+)>)/ig, "")}
                    {/* <div>
                        {blog.categories.map((category, i) => (
                            <div key={i}>{category}</div>
                        ))}
                    </div> */}
                </ul>
            </li >

        </Slide>
    )
}
