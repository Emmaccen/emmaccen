import React, { useEffect } from "react";
import blogsData from "../data/blogs";
import Fade from "react-reveal/Fade";

function BlogTemplate({ data }) {
  const {
    canonical_url,
    cover_image,
    title,
    published_at,
    public_reactions_count,
    comments_count,
    user,
  } = data;
  return (
    <Fade bottom>
      <a
        href={canonical_url}
        rel="noopener noreferrer"
        target="_blank"
        className="blogContent"
      >
        <div
          className="backgroundFix blogImg"
          style={{
            backgroundImage: `url(${cover_image ?? "/images/homeBg.jpg"})`,
          }}
        >
          <div className="blogOverlay">
            <h4>{title}</h4>
            <div className="blogDesc">
              <span>
                <i className="authorName icon-profile-male"></i>
                {user.github_username}
              </span>
              <span>
                <i className="icon icon-calendar"></i>{" "}
                {new Date(published_at).toLocaleDateString()}
              </span>
              <span>
                <i className="icon icon-message"></i>
                {comments_count}
              </span>
              <span>
                <i className="icon icon-heart"></i>
                {public_reactions_count}
              </span>
            </div>
          </div>
        </div>
      </a>
    </Fade>
  );
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

  constructor() {
    super();
    this.state = {
      data: [],
    };
  }

  componentWillMount() {
    // do some data fetch
    fetch("https://dev.to/api/articles?username=emmaccen")
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        this.setState({
          data,
        });
      });
  }

  render() {
    const blogs = this.state.data.map((blogData) => {
      return <BlogTemplate data={blogData} />;
    });

    return (
      <div id="blogs" className="blogsWrapper">
        <header className="centered">
          <div>
            <h1>
              My <span className="accent">Blogs</span>
              <span className="primary">.</span>
            </h1>
            <Fade bottom>
              <p className="descText">
                Explore some of my many programming blogs on dev.to. Feel free
                to support me by reading, starting a discussion or leaving a
                reaction (like, unicorn, bookmarking, etc).
              </p>
            </Fade>
          </div>
        </header>
        <div className="blogsGrid1">
          {blogs[0]}
          {blogs[1]}
        </div>
        <div className="blogsGrid2">
          {blogs[2]}
          {blogs[3]}
          {blogs[4]}
        </div>
      </div>
    );
  }
}

export default Blogs;
