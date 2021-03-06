/** @jsx jsx */
import { jsx, Styled } from "theme-ui"
import { Layout, SEO } from "gatsby-theme-catalyst-core"
import { Link } from "gatsby"
import Img from "gatsby-image"
import { FaRegClock } from "react-icons/fa"
import { useCatalystBlogConfig } from "gatsby-theme-catalyst-blog"
import { useLithiumConfig } from "gatsby-theme-catalyst-lithium"
import Hero from "./hero"

const PostsList = ({ posts }) => {
  const { postListTitle, displayPostListTitle } = useCatalystBlogConfig()
  const { useHero } = useLithiumConfig()
  return (
    <Layout>
      <SEO title={postListTitle} />
      {useHero && <Hero />}
      <div
        sx={{
          width: "100vw",
          position: "relative",
          left: "calc(-50vw + 50%)",
          mb: 5,
        }}
      >
        <div
          sx={{
            mx: "auto",
            width: "100%",
            maxWidth: "maxPageWidth",
          }}
        >
          <div
            sx={{
              mx: [3, 4, null, 5, null],
              display: "grid",
              gridTemplateColumns: [
                "1fr",
                null,
                "1fr 1fr",
                "1fr 1fr 1fr",
                "1fr 1fr 1fr 1fr",
              ],
              gridTemplateRows: "auto",
              gridGap: 4,
              justifyContent: "center",
              variant: "variants.postListContainer",
            }}
          >
            {displayPostListTitle ? (
              <Styled.h1
                sx={{
                  variant: "variants.postListPageTitle",
                }}
              >
                {postListTitle}
              </Styled.h1>
            ) : null}
            {posts.map((post) => {
              const title = post.title || post.slug
              return (
                <article
                  sx={{
                    backgroundColor: "accent",
                    textDecoration: "none",
                    color: "text",
                    boxShadow: "0 2px 5px rgba(0,0,0,0.1)",
                    display: "flex",
                    flexDirection: "column",
                    minHeight: "100%",
                    position: "relative",
                    top: "0",
                    transition: "all .1s ease-in",
                    a: {
                      color: "text",
                      textDecoration: "none",
                    },
                    ":hover": {
                      top: "-4px",
                      boxShadow: "0 4px 5px rgba(0,0,0,0.2)",
                    },
                    ":nth-of-type(1)": {
                      gridColumn: ["1 / -1", null, "1 / span 2", null, null],
                      h2: {
                        fontSize: [3, null, 5, null, null],
                      },
                      ".featuredImage": {
                        height: ["250px", null, "350px", null, null],
                      },
                    },
                    variant: "variants.postListWrapper",
                  }}
                  key={post.slug}
                >
                  <Link to={post.slug}>
                    <Img
                      className="featuredImage"
                      sx={{
                        height: "250px",
                        mb: 3,
                        variant: "variants.postListImage",
                      }}
                      fluid={post.featuredImage.childImageSharp.fluid}
                      alt={post.title}
                    />
                    <div
                      sx={{
                        p: 3,
                      }}
                    >
                      <Styled.ul
                        sx={{
                          display: "flex",
                          listStyle: "none",
                          m: 0,
                          p: 0,
                        }}
                      >
                        {post.categories.map((category) => (
                          <Styled.li
                            sx={{
                              textTransform: "uppercase",
                              letterSpacing: "wide",
                              color: "primary",
                              fontSize: 1,
                              fontWeight: "bold",
                              "::after": {
                                content: `"\\2022"`,
                                px: 2,
                              },
                              ":last-of-type": {
                                "::after": {
                                  content: "none",
                                },
                              },
                              variant: "variants.postListCategory",
                            }}
                          >
                            {category}
                          </Styled.li>
                        ))}
                      </Styled.ul>
                      <Styled.h2
                        sx={{
                          mt: 1,
                          fontSize: 3,
                          variant: "variants.postListTitle",
                        }}
                      >
                        {title}
                      </Styled.h2>
                      <Styled.p
                        sx={{
                          color: "textGray",
                          fontSize: 1,
                          textTransform: "uppercase",
                          letterSpacing: "wider",
                          m: 0,
                          a: {
                            color: "textGray",
                            textDecoration: "none",
                            ":hover": {
                              textDecoration: "underline",
                            },
                          },
                          variant: "variants.postListMeta",
                        }}
                      >
                        {post.date} &bull;{" "}
                        <FaRegClock
                          sx={{
                            position: "relative",
                            top: "0.125em",
                          }}
                        />{" "}
                        {post.timeToRead} Min
                      </Styled.p>
                      <Styled.p
                        sx={{
                          variant: "variants.postListExcerpt",
                        }}
                      >
                        {post.excerpt}
                      </Styled.p>
                    </div>
                  </Link>
                </article>
              )
            })}
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default PostsList
