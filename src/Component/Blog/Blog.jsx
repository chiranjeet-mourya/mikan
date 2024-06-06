import React from 'react'
import "./Blog.css"
import BlogImage from "../../assets/blog/blog.jpg"

export default function Blog() {
  return (
    <>
    <section id="blog">
        <div className="container">
            <div className="blog_wrapper">
                <div className="blog_col">
                    <h3>WE HELP BUSINESSES LAUNCH, GROW AND SUCCEED</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga unde illo, temporibus eos maxime incidunt ipsum, aliquam ipsam inventore praesentium natus saepe quibusdam ex repellendus nobis excepturi consectetur rem nostrum ab! Obcaecati aperiam sequi harum.</p>
                    <div className="btn_wrapper">
                        <a href="/" className="btn">Get Started</a>
                    </div>
                </div>
                <div className="blog_col">
                    <div className="blog_image">
                        <img src={BlogImage} alt="Blog_Image" />
                    </div>
                </div>
            </div>
        </div>
    </section>
    </>
  )
}
