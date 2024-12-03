import DropdownItem from './DropdownItem.jsx';

function DropdownList({links, active, onLinkClick}) {
  return (
    <ul className="dropdown">
      {links.map((link) => (
        <DropdownItem
          key={`dropdown-item-${link.id}`}
          active={active}
          onLinkClick={onLinkClick}
          link={link}
        />
      ))}
    </ul>
  );
}

export default DropdownList;
