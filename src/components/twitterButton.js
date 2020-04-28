/** @jsx jsx */
import { jsx, Link } from "theme-ui"
import { GrTwitter } from "react-icons/gr"
import { StaticQuery, graphql } from "gatsby"

const Twitter = () => (
  <StaticQuery
    query={graphql`
      query {
        site {
          siteMetadata {
            socials {
              twitter
            }
          }
        }
      }
    `}
    render={({
      site: {
        siteMetadata: {
          socials: { twitter: twitterUrl },
        },
      },
    }) => (
      <Link
        href={twitterUrl}
        target="_blank"
        rel="noreferrer"
        title="tbnt_dima twitter profile"
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          textDecoration: "none",
          background: "#0c7abf",
          border: "1px solid #0c7abf",
          borderRadius: "3px",
          p: "6px 20px",
          color: "#fff",
        }}
      >
        <GrTwitter size="25px" sx={{ mr: 2, minWidth: "25px" }} /> @tbnt_dima
      </Link>
    )}
  />
)

export default Twitter
