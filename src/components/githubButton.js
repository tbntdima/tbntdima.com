/** @jsx jsx */
import { jsx, Link } from "theme-ui"
import { GrGithub } from "react-icons/gr"
import { StaticQuery, graphql } from "gatsby"

const GithubButton = () => (
  <StaticQuery
    query={graphql`
      query {
        site {
          siteMetadata {
            socials {
              github
            }
          }
        }
      }
    `}
    render={({
      site: {
        siteMetadata: {
          socials: { github: githubUrl },
        },
      },
    }) => (
      <Link
        href={githubUrl}
        target="_blank"
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          textDecoration: "none",
          background: "#EFF3F6",
          border: "1px solid rgba(27, 31, 35, 0.2)",
          borderRadius: "3px",
          p: "6px 20px",
          color: "#000",
        }}
      >
        <GrGithub size="25px" sx={{ mr: 2, minWidth: "25px" }} /> tbntdima
      </Link>
    )}
  />
)

export default GithubButton
