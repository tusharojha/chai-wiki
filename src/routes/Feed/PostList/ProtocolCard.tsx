import Link from "next/link"
import Image from "next/image"
import styled from "@emotion/styled"
const ProtocolCard: React.FC = () => {

  return (
    <StyledWrapper style={{ display: 'flex', flexDirection: 'column' }} href={`/about`}>
      <article>
        <div className="image">
          <Image alt="Chai Network Logo" width={100} height={100} className="image-i" src="/chai.png" />
        </div>
        <div className="content bg-red-200">
          <header className="top">
            <h1>Chai Network's Wiki</h1>
          </header>
          <div className="summary">
            <p>Building On-Chain Reputation Protocol for the Internet</p>
          </div>
        </div>
      </article>

    </StyledWrapper>
  )
}

export default ProtocolCard

const StyledWrapper = styled(Link)`
  article {
    margin-top: 1rem;
    overflow: hidden;
    position: relative;
    margin-bottom: 1.5rem;
    border-radius: 1rem;
    background-color: ${({ theme }) =>
    theme.scheme === "light" ? "white" : theme.colors.gray4};
    transition-property: box-shadow;
    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
    transition-duration: 300ms;
    display: flex;
    flex-direction: row;

    @media (min-width: 768px) {
      margin-bottom: 2rem;
    }

    @media (max-width: 768px) {
      flex-direction: column;
    }

    :hover {
      box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1),
        0 4px 6px -2px rgba(0, 0, 0, 0.05);
    }
    > .image {
      padding: 2rem;
      display: flex;
      justify-content: center;
      align-items: start;

    }
    > .category {
      position: absolute;
      top: 1rem;
      left: 1rem;
      z-index: 10;
    }

    > .thumbnail {
      background-color: ${({ theme }) => theme.colors.gray2};
      height: 20vh;
      width: 100vw;
      position: relative;
    }
    > .content {
      display: flex;

      flex-direction: column;
      justify-content: center;

      padding: 1rem;
      > .top {
        display: flex;
        flex-direction: column;
        justify-content: space-between;

        @media (min-width: 768px) {
          flex-direction: row;
          align-items: baseline;
        }
        h1 {
          margin-bottom: 0.5rem;
          font-size: 1.2rem;
          line-height: 1.75rem;
          font-weight: bold;

          cursor: pointer;

          @media (min-width: 768px) {
            font-size: 2.5rem;
            line-height: 1.75rem;
          }
        }
      }
      > .summary {
        p {
          font-size: 0.8rem;
          line-height: 1.5rem;
          color: ${({ theme }) => theme.colors.gray11};

          @media (min-width: 768px) {
            display: block;
            font-size: 1.2rem;
            line-height: 2rem;
            margin: 0;
            margin-top: 0.4rem;
          }
        }
      }
      > .tags {
        display: flex;
        gap: 0.5rem;
      }
    }
  }
`
