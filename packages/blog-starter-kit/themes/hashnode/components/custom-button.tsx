import { forwardRef } from 'react';

type Props = {
	label: string;
	type?: string;
	icon?: React.ReactNode;
	className?: string;
	secondaryIcon?: React.ReactNode;
	href?: string;
	onClick?: () => void;
	as?: string;
	rel?: string;
	target?: string;
};

export const Button = forwardRef<HTMLButtonElement, Props>(
	({ label, type, icon, className, secondaryIcon, href, rel, as, target, onClick }, ref) => {
		let buttonClassName: string;

		switch (type) {
			case 'outline':
				buttonClassName =
					'text-slate-800 bg-white/80 backdrop-blur-sm border-slate-300 shadow-sm hover:bg-slate-50 hover:border-slate-400 hover:shadow-md dark:border-slate-600 dark:bg-slate-800/80 dark:hover:bg-slate-700 dark:text-white dark:hover:border-slate-500';
				break;

			case 'primary':
				buttonClassName =
					'text-white bg-gradient-to-r from-brand-600 to-brand-500 border-transparent shadow-md hover:shadow-lg hover:from-brand-700 hover:to-brand-600 dark:from-brand-500 dark:to-brand-600 dark:hover:from-brand-600 dark:hover:to-brand-700';
				break;

			case 'outline-dark':
				buttonClassName =
					'text-white bg-slate-800/50 backdrop-blur-sm border-slate-600 hover:bg-white hover:text-slate-900 hover:border-slate-300 dark:bg-slate-700/50 dark:border-slate-500 dark:hover:bg-slate-600 dark:text-white';
				break;

			default:
				buttonClassName =
					'text-white bg-gradient-to-r from-brand-600 to-brand-500 border-transparent shadow-md hover:shadow-lg hover:from-brand-700 hover:to-brand-600 dark:from-brand-500 dark:to-brand-600 dark:hover:from-brand-600 dark:hover:to-brand-700';
		}

		if (as === 'a') {
			return (
				<a
					href={href}
					rel={rel}
					target={target}
					className={`flex flex-row items-center justify-start gap-2 rounded-full border px-3 py-2.5 text-sm font-semibold transition-all duration-300 hover:scale-105 active:scale-95 md:px-6 md:py-3 md:text-base ${buttonClassName} ${
						secondaryIcon ? `md:justify-between` : `md:justify-center`
					}  ${className}`}
				>
					<div className="flex flex-row items-center gap-2">
						{icon && <div className="shrink-0">{icon}</div>}
						{label || null}
					</div>
					{secondaryIcon && <div className="shrink-0">{secondaryIcon}</div>}
				</a>
			);
		}

		return (
			<button
				ref={ref}
				onClick={onClick}
				className={`flex flex-row items-center justify-start gap-2 rounded-full border px-3 py-2.5 text-sm font-semibold transition-all duration-300 hover:scale-105 active:scale-95 md:px-6 md:py-3 md:text-base ${buttonClassName} ${
					secondaryIcon ? `md:justify-between` : `md:justify-center`
				}  ${className}`}
			>
				<div className="flex flex-row items-center gap-2">
					{icon && <div className="shrink-0">{icon}</div>}
					{label || null}
				</div>
				{secondaryIcon && <div className="shrink-0">{secondaryIcon}</div>}
			</button>
		);
	},
);

Button.displayName = 'Button';
