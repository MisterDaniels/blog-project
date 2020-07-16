import React from 'react';
import { Helmet } from 'react-helmet';
import { graphql } from 'gatsby';
import { navigate } from '@reach/router';
import { MDXProvider } from '@mdx-js/react';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import { Container } from '@material-ui/core';
import { Disqus, CommentCount } from 'gatsby-plugin-disqus';
import Gist from 'react-gist';
import { MdModeComment } from 'react-icons/md';
import { FaFacebookSquare, FaTwitterSquare, FaLinkedin, FaClock } from 'react-icons/fa';
import readingTime from 'reading-time';

import Header from '../components/Header';

import '../styles/blog-post.css';

export default function Template({data}) {
    const { mdx: post } = data;
    
    const shortcodes = { Gist };

    const disqusConfig = {
        url: `http://misterdaniels.github.io${post.frontmatter.path}`,
        identifier: post.frontmatter.id,
        title: post.frontmatter.title
    };

    var time = readingTime(post.body);

    return(
        <div>
            <Container maxWidth="lg">
                <Header hasLogo={ true }
                        hasMenu={ false } />
                <div className="content">
                    <Helmet title={`DEV MisterDaniels - ${post.frontmatter.title}`} />
                    <div className="blog-post">
                        <div className="head">
                            <h1 className="title">{ post.frontmatter.title }</h1>
                            <div className="sub-title">
                                <h2 className="border-separate">{ post.frontmatter.category }</h2>
                                <h2>{ new Date(post.frontmatter.date).toLocaleDateString([], { 
                                    year: 'numeric', 
                                    month: 'long', 
                                    day: 'numeric' 
                                    }) } por 
                                    <a 
                                        href={ post.frontmatter.authorUrl } 
                                        target="_blank" 
                                        rel="noopener noreferrer">
                                        { post.frontmatter.author }
                                    </a>
                                </h2>
                                <span onClick={ e => {
                                    e.preventDefault();

                                    navigate('#comments');
                                } }>
                                    <MdModeComment size={14} color={'#000000'} />
                                    <CommentCount config={ disqusConfig } placeholder={'...'} />
                                </span>
                            </div>
                            <div className="tools">
                                <p>Compartilhe:</p>
                                <a
                                    href={ `https://facebook.com/sharer/sharer.php?u=http://misterdaniels.github.io/blog${post.frontmatter.path}` } 
                                    target="_blank" 
                                    rel="noopener noreferrer">
                                    <FaFacebookSquare size={26} color={'#000000'} />
                                </a>
                                <a
                                    href={ `https://twitter.com/home?status=http://misterdaniels.github.io/blog${post.frontmatter.path}` } 
                                    target="_blank" 
                                    rel="noopener noreferrer">
                                    <FaTwitterSquare size={26} color={'#000000'} />
                                </a>
                                <a
                                    href={ `https://linkedin.com/shareArticle?mini=true&url=http://misterdaniels.github.io/blog${post.frontmatter.path}` } 
                                    target="_blank" 
                                    rel="noopener noreferrer">
                                    <FaLinkedin size={26} color={'#000000'} />
                                </a>
                                <span className="time">
                                    <FaClock size={16} color={'#ffffff'} />
                                    <p>{ time.minutes } min</p>
                                </span>
                            </div>
                        </div>
                        <div className="body">
                            <MDXProvider
                                components={ shortcodes }>
                                <MDXRenderer className="body">{ post.body }</MDXRenderer>
                            </MDXProvider>
                        </div>
                    </div>
                </div>
                <div id="comments">
                    <Disqus config={ disqusConfig } />
                </div>
            </Container>
        </div>
    );
}

export const blogQuery = graphql`
    query BlogPostByPath($path: String!) {
        mdx(frontmatter: { path: { eq: $path } }) {
            body
            frontmatter {
                id
                date
                path
                title
                category
                author
                authorUrl
            }
        }
    }
`