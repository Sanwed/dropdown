import DropdownList from './DropdownList.jsx';
import {useState} from 'react';

const links = [
  {
    id: 1,
    href: '#',
    text: 'Profile Information',
  },
  {
    id: 2,
    href: '#',
    text: 'Change Password',
  },
  {
    id: 3,
    href: '#',
    text: 'Become PRO',
  },
  {
    id: 4,
    href: '#',
    text: 'Help',
  },
  {
    id: 5,
    href: '#',
    text: 'Log Out',
  },
];

function Dropdown() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeId, setActiveId] = useState(1);
  
  const onToggleMenu = () => {
    setIsOpen(!isOpen);
  };
  
  return (
    <div className="dropdown-wrapper open">
      <button className="btn" onClick={onToggleMenu}>
        <span>Account Settings</span>
        <i className="material-icons">public</i>
      </button>
      {isOpen && <DropdownList
        links={links}
        active={activeId}
        onLinkClick={(evt) => setActiveId(Number(evt.currentTarget.id.split('-')[2]))}/>}
    </div>
  );
}

export default Dropdown;
