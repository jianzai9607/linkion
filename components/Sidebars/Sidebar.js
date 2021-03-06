import Link from "next/link";
import { useRouter } from "next/router";
import PropTypes from "prop-types";
import { bubble as Menu } from "react-burger-menu"; // slide
import React, { Children } from "react";

export default function Sidebar({ children, activeClassName, ...props }) {
  const { route } = useRouter();
  const paths = [
    {
      id: 1,
      path: "/",
      name: "Home",
    },
    {
      id: 2,
      path: "/account/login",
      name: "Login",
    },
    {
      id: 3,
      path: "/account/login?ads=asd",
      name: "Loginasd",
    },
  ];

  const pathLinks = paths.map((path) => {
    return (
      <Link key={path.id} href={path.path}>
        <a className={`bm-item ${route == path.path ? "active" : ""}`} onClick={ () => props.sidebarToggle(false) }>
          {path.name}
        </a>
      </Link>
    );
  });

  return (
    <Menu
      isOpen={props.isOpen}
      onClose={() => props.sidebarToggle(false)}
      disableAutoFocus
      customBurgerIcon={false}
    >
      {pathLinks}
    </Menu>
  );
}
