

type ListNavPropsType = {
  menu: string;

};

const ListNav = ({ menu }: ListNavPropsType) => {
  return (
    <li className="relative group w-full lg:w-auto">
      <button className="flex items-center hover:text-[var(--color-accent)] w-full transition-all">
        {menu}
      </button>

    </li>
  );
};

export default ListNav;
