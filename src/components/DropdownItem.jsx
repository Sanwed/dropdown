function DropdownItem({link, active, onLinkClick}) {
  return (
    <li
      className={link.id === active ? 'active' : ''}
    >
      <a
        onClick={onLinkClick}
        id={`dropdown-link-${link.id}`}
        href={link.href}
      >
        {link.text}
      </a>
    </li>
  );
}

export default DropdownItem;
