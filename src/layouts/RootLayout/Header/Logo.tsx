import Link from "next/link"
import Image from "next/image"
import { CONFIG } from "site.config"
import styled from "@emotion/styled"

const Logo = () => {
  return (
    <StyledWrapper style={{ display: 'flex', justifyContent: 'center' }} href="/" aria-label={CONFIG.blog.title}>
      <Image alt="Chai Network Logo" width={20} height={20} src="/chai.png" /> <span style={{ marginTop: 2, marginLeft: 2 }}>{CONFIG.blog.title}</span>
    </StyledWrapper>
  )
}

export default Logo

const StyledWrapper = styled(Link)``
