import type { LucideIcon } from "lucide-react";

type ListNavPropsType = {
  menu: string;
  icon?: LucideIcon;
  isActive?: boolean;
};

const ListNav = ({ menu, icon: Icon, isActive = false }: ListNavPropsType) => {
  return (
    <li className="relative group w-full lg:w-auto">
      <button
        className={`flex items-center gap-3 w-full px-4 py-3 lg:px-3 lg:py-2 rounded-xl lg:rounded-full transition-all duration-300 ${isActive
          ? "bg-[var(--color-accent)] text-[var(--color-primary)] font-medium"
          : "hover:bg-white/10 hover:text-[var(--color-accent)]"
          }`}
      >
        {Icon && (
          <div
            className={`w-8 h-8 rounded-lg flex items-center justify-center lg:hidden ${isActive ? "bg-[var(--color-primary)]/20" : "bg-[var(--color-accent)]/20"
              }`}
          >
            <Icon size={18} className={isActive ? "text-[var(--color-primary)]" : "text-[var(--color-accent)]"} />
          </div>
        )}
        <span className="text-sm lg:text-xs font-medium">{menu}</span>
      </button>
    </li>
  );
};

export default ListNav;
