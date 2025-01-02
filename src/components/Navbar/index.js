import React from 'react';
import {
  Nav,
  NavLink,
  NavbarContainer,
  Span,
  NavLogo,
  NavItems,
  GitHubButton,
  ButtonContainer,
  MobileIcon,
  MobileMenu,
  MobileLink,
} from './NavbarStyledComponent';
import { DiCssdeck } from 'react-icons/di';
import { FaBars } from 'react-icons/fa';
import { Bio } from '../../data/constants';
import { useTheme } from 'styled-components';
import { BsMoonFill, BsSunFill } from "react-icons/bs"; // Import icons


const Navbar = ({ darkMode, setDarkMode }) => {
  const [isOpen, setIsOpen] = React.useState(false);
  const theme = useTheme();

  return (
    <Nav>
      <NavbarContainer>
        <NavLogo>
          <a
            style={{
              display: "flex",
              alignItems: "center",
              color: "white",
              marginBottom: '20px',
              cursor: 'pointer',
            }}
            href="#home" // Add a valid href for accessibility
          >
            <DiCssdeck size="3rem" /> <Span>Jatin Hasiwal</Span>
          </a>
        </NavLogo>
        <MobileIcon>
          <FaBars onClick={() => setIsOpen(!isOpen)} />
        </MobileIcon>
        <NavItems>
          <NavLink href="#about">About</NavLink>
          <NavLink href="#skills">Skills</NavLink>
          <NavLink href="#projects">Projects</NavLink>
          <NavLink href="#education">Education</NavLink>
        </NavItems>
        <ButtonContainer>
          <GitHubButton href={Bio.github} target="_blank" rel="noopener noreferrer">Github Profile</GitHubButton>
          <button
            style={{
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              color: 'inherit',
              marginLeft: '20px',
            }}
            onClick={() => setDarkMode((prevMode) => !prevMode)}
            aria-label="Toggle dark mode"
          >
            {darkMode ? <BsSunFill size={20} style={{ color: 'white' }} /> : <BsMoonFill size={20} />}
          </button>
        </ButtonContainer>
        {isOpen && (
          <MobileMenu isOpen={isOpen} >
            <MobileLink href="#about" onClick={() => setIsOpen(!isOpen)}>About</MobileLink>
            <MobileLink href="#skills" onClick={() => setIsOpen(!isOpen)}>Skills</MobileLink>
            <MobileLink href="#projects" onClick={() => setIsOpen(!isOpen)}>Projects</MobileLink>
            <MobileLink href="#education" onClick={() => setIsOpen(!isOpen)}>Education</MobileLink>
            <GitHubButton
              style={{
                padding: '10px 16px',
                background: `${theme.primary}`,
                color: 'white',
                width: 'max-content',
              }}
              href={Bio.github}
              target="_blank"
              rel="noopener noreferrer"
            >
              Github Profile
            </GitHubButton>
          </MobileMenu>
        )}
      </NavbarContainer>
    </Nav>
  );
};

export default Navbar;
