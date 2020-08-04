import React from 'react'
import blogsData from '../data/blogs'

function BlogTemplate (props) {
    return (
        <a href={props.linkUrl} className='blogContent'>
            <div className='backgroundFix blogImg' 
            style={{backgroundImage : `url(${props.imageUrl})`}}>
                <div className='blogOverlay'>
                    <h4>{props.title}</h4>
                    <div className='blogDesc'>
                        <span><i className='authorName icon-profile-male'></i>{props.author}</span>
                        <span><i className='icon icon-calendar'></i> {props.date}</span>
                        <span><i className='icon icon-message'></i> {props.commentCount}</span>
                        <span><i className='icon icon-heart'></i>{props.reactionCount}</span>
                    </div>
                </div>
            </div>
        </a>
    )
}

class Blogs extends React.Component {

    // render() {

    //     return (
    //         <div className='blogsWrapper'>
    //             <header className='centered'>
    //                 <div>
    //                     <h1>My <span className='accent'>Blogs</span>
    //                         <span className='primary'>.</span>
                            
    //                     </h1>
    //                     <p className='descText'>Some commoen iuenf aoefna efoainefa oweifna woeifna owuefnawe foawien</p>
    //                 </div>
    //             </header>
    //             <div className='blogsContainer'>
    //                 <a  href='#' className='blogContent'>
    //                     <div className='backgroundFix blogImg'></div>
    //                     <h2>Some Blog Title Goes Here right ??</h2>
    //                     <p>Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic.</p>
    //                     <div className='blogDetails'>
    //                         <span><i className='authorName icon-profile-male'></i>Emmaccen</span>
    //                         <div>
    //                             <span><i className='icon icon-calendar'></i> Jul 10</span>
    //                             <span><i className='icon icon-message'></i> 101</span>
    //                             <span><i className='icon icon-heart'></i>1100</span>
    //                         </div>
    //                     </div>
    //                 </a>
    //                 <a  href='#' className='blogContent'>
    //                     <div className='backgroundFix blogImg'></div>
    //                     <h2>Some Blog Title Goes Here right ??</h2>
    //                     <p>Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic.</p>
    //                     <div className='blogDetails'>
    //                         <span><i className='authorName icon-profile-male'></i>Emmaccen</span>
    //                         <div>
    //                             <span><i className='icon icon-calendar'></i> Jul 10</span>
    //                             <span><i className='icon icon-message'></i> 101</span>
    //                             <span><i className='icon icon-heart'></i>1100</span>
    //                         </div>
    //                     </div>
    //                 </a>
    //                 <a  href='#' className='blogContent'>
    //                     <div className='backgroundFix blogImg'></div>
    //                     <h2>Some Blog Title Goes Here right ??</h2>
    //                     <p>Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic.</p>
    //                     <div className='blogDetails'>
    //                         <span><i className='authorName icon-profile-male'></i>Emmaccen</span>
    //                         <div>
    //                             <span><i className='icon icon-calendar'></i> Jul 10</span>
    //                             <span><i className='icon icon-message'></i> 101</span>
    //                             <span><i className='icon icon-heart'></i>1100</span>
    //                         </div>
    //                     </div>
    //                 </a>
    //             </div>
    //         </div>
    //     )
    // }

    constructor () {
        super()
        this.state = {}
    }

    componentWillMount () {
        // do some data fetch
        this.setState({
            blogsData
        })
    }

    render () {

        const blogs = this.state.blogsData.map(blogData => {
            return (
                <BlogTemplate
                linkUrl = {blogData.linkUrl}
                imageUrl = {blogData.imageUrl}
                title = {blogData.title}
                author = {blogData.author}
                date = {blogData.date}
                commentCount = {blogData.commentCount}
                reactionCount = {blogData.reactionCount}
                />
            )
        })

        return (
            <div id='blogs' className='blogsWrapper'>
                <header className='centered'>
                     <div>
                         <h1>My <span className='accent'>Blogs</span>
                             <span className='primary'>.</span>
                         </h1>
                         <p className='descText'>
                             Explore some of my many programming blogs on dev.to. Feel free 
                             to support me by reading, starting a discussion or leaving a reaction (like, unicorn, bookmarking, etc).
                         </p>
                     </div>
                 </header>
                <div className='blogsGrid1'>
                    {blogs[0]}
                    {blogs[1]}
                </div>
                <div className='blogsGrid2'>
                {blogs[2]}
                {blogs[3]}
                {blogs[4]}
                </div>
            </div>
        )
    }
}

export default Blogs