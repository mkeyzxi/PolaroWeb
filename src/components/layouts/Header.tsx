import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";

type NavPropsType = {
	children?: React.ReactNode;
};

const Header = ({ children }: NavPropsType) => {
	const [open, setOpen] = useState(false);
	const [scrolled, setScrolled] = useState(false);

	// Handle scroll effect
	useEffect(() => {
		const handleScroll = () => {
			setScrolled(window.scrollY > 20);
		};
		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	// Close menu when clicking outside
	useEffect(() => {
		const handleClickOutside = (event: MouseEvent) => {
			const target = event.target as HTMLElement;
			if (open && !target.closest(".mobile-menu-container")) {
				setOpen(false);
			}
		};
		document.addEventListener("click", handleClickOutside);
		return () => document.removeEventListener("click", handleClickOutside);
	}, [open]);

	// Close menu on route change or resize
	useEffect(() => {
		const handleResize = () => {
			if (window.innerWidth >= 768) {
				setOpen(false);
			}
		};
		window.addEventListener("resize", handleResize);
		return () => window.removeEventListener("resize", handleResize);
	}, []);

	return (
		<header
			className={`fixed top-0 left-0 right-0 z-50  transition-all duration-300 ${scrolled
				? "bg-[var(--color-primary)]/95 backdrop-blur-md shadow-lg"
				: "bg-transparent "
				}`}
		>
			<div className="max-w-7xl mx-auto px-4 sm:px-2">
				<div className="flex items-center justify-between h-16 md:h-20">
					{/* Logo for Mobile */}
					<Link
						to="/"
						className="md:hidden text-[var(--color-light)] font-bold text-xl tracking-wide hover:text-[var(--color-accent)] transition-colors"
					>
						POLAROWEB
					</Link>

					{/* Desktop Navigation */}
					<div className="hidden md:flex md:flex-1 md:justify-center">
						<div
							className={`bg-[var(--color-primary)]/90 backdrop-blur-md border border-white/10 shadow-xl px-3 py-2 rounded-full transition-all duration-300 ${scrolled ? "scale-95" : "scale-100"
								}`}
						>
							{children}
						</div>
					</div>

					{/* Mobile Menu Button */}
					<div className="mobile-menu-container md:hidden">
						<button
							className={`relative w-12 h-12 flex items-center justify-center rounded-xl transition-all duration-300 ${open
								? "bg-[var(--color-accent)] text-[var(--color-primary)]"
								: "bg-[var(--color-primary)]/98 backdrop-blur-sm text-[var(--color-light)] border border-white/10"
								}`}
							onClick={(e) => {
								e.stopPropagation();
								setOpen(!open);
							}}
							aria-label="Toggle menu"
						>
							<div className="relative w-6 h-6">
								<Menu
									className={`absolute inset-0 transition-all duration-300 ${open ? "opacity-0 rotate-90 scale-0" : "opacity-100 rotate-0 scale-100"
										}`}
									size={24}
								/>
								<X
									className={`absolute inset-0 transition-all duration-300 ${open ? "opacity-100 rotate-0 scale-100" : "opacity-0 -rotate-90 scale-0"
										}`}
									size={24}
								/>
							</div>
						</button>
					</div>
				</div>
			</div>

			{/* Mobile Navigation Overlay */}
			<div
				className={`md:hidden fixed inset-0 bg-black/60 backdrop-blur-sm transition-opacity duration-300 ${open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
					}`}
				style={{ top: "64px" }}
				onClick={() => setOpen(false)}
			/>

			{/* Mobile Navigation Menu */}
			<div
				className={`mobile-menu-container md:hidden absolute top-full left-0 right-0 bg-[var(--color-primary)] border-t border-white/10 shadow-2xl transition-all duration-300 ease-out overflow-hidden ${open ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
					}`}
			>
				<div className="px-4 py-6">
					{children}
				</div>

				{/* Mobile Menu Footer */}
				<div className="px-4 py-4 border-t border-white/10 bg-white/5">
					<p className="text-center text-[var(--color-light)]/50 text-sm">
						© 2025 PolaroWeb
					</p>
				</div>
			</div>
		</header>
	);
};

export default Header;
