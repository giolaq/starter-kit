import { Analytics } from './analytics';
import { Integrations } from './integrations';
import { Meta } from './meta';
import { Scripts } from './scripts';

type Props = {
	children: React.ReactNode;
};

export const Layout = ({ children }: Props) => {
	return (
		<>
			<Meta />
			<Scripts />
			<div className="relative min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-100 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950">
				{/* Decorative background elements */}
				<div className="pointer-events-none fixed inset-0 overflow-hidden">
					<div className="absolute -top-40 -right-40 h-80 w-80 rounded-full bg-brand-100/30 blur-3xl dark:bg-brand-900/10"></div>
					<div className="absolute -bottom-40 -left-40 h-80 w-80 rounded-full bg-accent-purple/10 blur-3xl dark:bg-accent-purple/5"></div>
				</div>
				<main className="relative z-10">{children}</main>
			</div>
			<Analytics />
			<Integrations />
		</>
	);
};
