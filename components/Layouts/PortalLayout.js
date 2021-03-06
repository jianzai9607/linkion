import Navbar from '../Navbars/Navbar.js'
import Footer from '../Footers/Footer.js'
import Sidebar from '../Sidebars/Sidebar.js'

const PortalLayout = props => {
  return (
    <div style={{ display: "flex",position: "relative" }}>
      <Sidebar />
      <div style={{ width: "100%" }}>
        <div style={{ minHeight: "100vh" }}>
        <Navbar />
        {props.children}
        </div>
        <Footer />
      </div>
    </div>
  )
}

export default PortalLayout;