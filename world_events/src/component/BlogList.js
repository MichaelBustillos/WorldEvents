import React, {useState, useEffect} from 'react';
import Flippy, { FrontSide, BackSide } from 'react-flippy';
import Options from './Options';
import '../style/BlogList.scss';

export default function BlogList({ blogList=[] }) {
  return (
    <>
    { blogList.map(blog => {
				if (blog) {
				return (
						<div id="blog-card" key={blog.postid}>
								<Options
										postid={blog.postid}
										/>
								<Flippy
										flipOnHover={false} // default false
										flipOnClick={true} // default false
										flipDirection="horizontal" // horizontal or vertical
										// ref={(r) => this.flippy = r} // to use toggle method like this.flippy.toggle()
										// if you pass isFlipped prop component will be controlled component.
										// and other props, which will go to div

										>
										<FrontSide>
												<div id="blog-pic">
												</div>
												<div id="blog-preview">
														<h4>{blog.title}</h4>
														<p>{blog.username}</p>
												</div>
												<div id="bot-border">
													<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
														<path d="M18.63 11.1C16.78 9.49 14.38 8.5 11.73 8.5C7.08 8.5 3.15 11.53 1.77 15.72L4.13 16.5C5.18 13.31 8.18 11 11.73 11C13.68 11 15.46 11.72 16.85 12.88L13.23 16.5H22.23V7.5L18.63 11.1Z" fill="black" fill-opacity="0.54"/>
													</svg>
												</div>
										</FrontSide>
										<BackSide>
												<div id="blog-description">
															<h3>Preview</h3>
															<p>{blog.body}</p>
															<b>Click the button in the top left for more information!</b>
												</div>
												<div id="bot-border">
															<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
																<path d="M12.265 8.5C9.615 8.5 7.215 9.49 5.365 11.1L1.765 7.5V16.5H10.765L7.145 12.88C8.535 11.72 10.305 11 12.265 11C15.805 11 18.815 13.31 19.865 16.5L22.235 15.72C20.845 11.53 16.915 8.5 12.265 8.5Z" fill="black" fill-opacity="0.54"/>
															</svg>
												</div>
										</BackSide>
								</Flippy>
						</div>
				)
				}
				return null
			}) }
      </>
  );
}
