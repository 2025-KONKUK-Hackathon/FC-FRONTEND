import { container, navItem } from "./Footer.css"

const Footer = () => {
  return (
    <div className={container}>
        <p className={navItem}>
            <span>게시판</span>
        </p>
        <p className={navItem}>
            <span>모임</span>
        </p>
    </div>
  )
}

export default Footer
