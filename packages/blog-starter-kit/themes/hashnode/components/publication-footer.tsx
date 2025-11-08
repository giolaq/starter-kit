// MobX Stuff
import Image from 'next/legacy/image';

import { HashnodeLogoIconV2 } from './icons/svgs';
import { resizeImage } from '../utils/image';
import Link from 'next/link';

// type PublicationFooterProps = Pick<Publication, 'title' | 'postsCount' | 'imprint' | 'isTeam'> &
//   Pick<Publication['preferences'], 'disableFooterBranding' | 'logo' | 'darkMode'> & {
//     authorName: string;
//   }; // TODO: types need to be fixed

function PublicationFooter(props: any) {
  const { isTeam, authorName, title, imprint, disableFooterBranding, logo } = props;

  return (
    <footer className="blog-footer-area relative -mt-px border-t border-slate-200/60 bg-gradient-to-b from-slate-50 to-slate-100 px-5 py-12 text-center text-slate-800 shadow-inner dark:border-slate-700/60 dark:from-slate-900 dark:to-black dark:text-slate-400 md:px-10 md:py-16 lg:py-24">
      {/* Decorative elements */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -top-20 left-1/4 h-40 w-40 rounded-full bg-brand-200/20 blur-3xl dark:bg-brand-900/10"></div>
        <div className="absolute -bottom-20 right-1/4 h-40 w-40 rounded-full bg-accent-purple/10 blur-3xl dark:bg-accent-purple/5"></div>
      </div>

      {imprint && (
        <section className="blog-impressum relative z-10 mx-auto mb-12 rounded-2xl border border-slate-200/60 bg-white/80 px-6 py-8 text-left shadow-lg backdrop-blur-sm dark:border-slate-700/60 dark:bg-slate-800/50 lg:w-3/4 xl:w-2/3">
          <p className="mb-6 text-center text-sm font-bold uppercase tracking-wider text-slate-600 dark:text-slate-400">
            Impressum
          </p>
          {/* eslint-disable-next-line react/self-closing-comp */}
          <div
            className="prose mx-auto w-full dark:prose-dark"
            // eslint-disable-next-line react/no-danger
            dangerouslySetInnerHTML={{ __html: `${imprint}` }}
          ></div>
        </section>
      )}
      <div className="blog-footer-credits relative z-10 flex flex-col items-center justify-center">
        <div className="mb-14 flex flex-col flex-wrap items-center space-y-3">
          <p className="mb-2 text-lg font-semibold text-slate-700 dark:text-slate-200">
            &copy; {new Date().getFullYear()} {title || `${authorName}'s Blog`}
          </p>
          <div className="flex flex-row items-center gap-2 text-sm text-slate-600 dark:text-slate-300">
            <a
              href="https://hashnode.com/privacy?source=blog-footer"
              className="transition-colors hover:text-brand-600 hover:underline dark:hover:text-brand-400"
            >
              Privacy policy
            </a>
            <span className="text-slate-400 dark:text-slate-600">&middot;</span>
            <a
              className="transition-colors hover:text-brand-600 hover:underline dark:hover:text-brand-400"
              href="https://hashnode.com/terms?source=blog-footer"
            >
              Terms
            </a>
          </div>
        </div>
        {disableFooterBranding ? (
          <>
            {logo && (
              <div className="flex flex-col items-center">
                <Link href="/" className="relative block h-10 w-40">
                  <Image
                    layout="fill"
                    alt={title || `${authorName}'s ${isTeam ? 'team' : ''} blog`}
                    src={resizeImage(logo, { w: 1000, h: 250, c: 'thumb' })}
                  />
                </Link>
              </div>
            )}
          </>
        ) : (
          <div className="flex flex-col items-center">
            <Link
              aria-label="Publish with Hashnode"
              className="mb-5 flex flex-row items-center gap-3 rounded-xl border border-slate-300 bg-white/90 px-5 py-3 font-heading font-bold tracking-wide text-slate-700 shadow-md backdrop-blur-sm transition-all duration-300 hover:scale-105 hover:border-brand-400 hover:bg-white hover:text-slate-900 hover:shadow-lg active:scale-95 dark:border-slate-700 dark:bg-slate-800/90 dark:text-slate-200 dark:hover:border-brand-600 dark:hover:bg-slate-700 dark:hover:text-white"
              href="https://hashnode.com/onboard?unlock-blog=true&source=blog-footer"
            >
              <span className="block text-brand-600 dark:text-brand-400">
                <HashnodeLogoIconV2 className="h-6 w-6 fill-current" />
              </span>
              <span>Publish with Hashnode</span>
            </Link>
            <p className="text-sm text-slate-600 dark:text-slate-400">
              Powered by{' '}
              <a
                aria-label="Hashnode"
                href="https://hashnode.com?source=blog-footer"
                className="font-semibold text-brand-600 underline transition-colors hover:text-brand-700 dark:text-brand-400 dark:hover:text-brand-300"
              >
                Hashnode
              </a>{' '}
              - Home for tech writers and readers
            </p>
          </div>
        )}
      </div>
    </footer>
  );
}

export default PublicationFooter;
