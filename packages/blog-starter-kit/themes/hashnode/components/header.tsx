import { twJoin } from 'tailwind-merge';
import { lightOrDark } from '../utils/commonUtils';
import { useAppContext } from './contexts/appContext';
import { Button } from './custom-button';
import HeaderBlogSearch from './header-blog-search';
import HeaderLeftSidebar from './header-left-sidebar';
import PublicationLogo from './publication-logo';
import PublicationNavLinks from './publication-nav-links';
import PublicationSocialLinks from './publication-social-links';

type Props = {
	currentMenuId?: string | null;
	isHome: boolean;
};

export const Header = (props: Props) => {
	const { currentMenuId, isHome } = props;
	const { publication } = useAppContext();

	return (
		<header
			className="blog-header sticky top-0 z-50 w-full border-b border-slate-200/60 bg-white/80 shadow-sm backdrop-blur-xl transition-all duration-300 dark:border-slate-700/60 dark:bg-slate-900/80"
		>
			<div className="container mx-auto px-4 md:px-6 2xl:px-12">
				<div className="relative z-40 flex flex-row items-center justify-between py-4 md:py-5">
					<div className="flex flex-row items-center gap-4">
						{/* Navigation for mobile view */}
						<div
							className={twJoin(
								'md:hidden','dark:text-white',
							)}
						>
							<HeaderLeftSidebar publication={publication} />
						</div>
						<div className="hidden md:block">
							<PublicationLogo publication={publication} size="lg" withProfileImage />
						</div>
					</div>

					<div
						className={twJoin(
							'flex flex-row items-center gap-3','dark:text-white',
						)}
					>
						<HeaderBlogSearch publication={publication} />
						<Button
							as="a"
							href="#"
							type="primary"
							label="Sign up"
						/>
					</div>
				</div>

				{/* Logo for mobile view */}
				<div className="mx-auto mb-6 mt-2 flex w-2/3 flex-row items-center justify-center md:hidden">
					<PublicationLogo publication={publication} size="xl" />
				</div>

				<div className="blog-sub-header animate-fade-in" data-testid="blog-sub-header">
					{/* Desktop */}
					<div className="mx-0 mb-3 hidden w-full flex-row items-center justify-center md:flex">
						<PublicationSocialLinks
							links={publication.links}
						/>
					</div>
					{/* Mobile view */}
					<div className="mb-4 flex w-full flex-col items-center md:hidden">
						<PublicationSocialLinks
							links={publication.links}
						/>
					</div>
				</div>

				<div
					className="relative mb-2 hidden flex-row items-center justify-center overflow-hidden text-base md:flex"
				>
					<PublicationNavLinks
						isHome={isHome}
						currentActiveMenuItemId={currentMenuId}
						enabledPages={publication.preferences?.enabledPages}
						navbarItems={publication.preferences?.navbarItems || []}
					/>
				</div>
			</div>
		</header>
	);
};
