export default function FooterComponent() {
  return (
    <footer className="fixed bottom-0 w-full h-10">
      <div className="w-full max-w-9xl xxs:px-4 px-8 mx-auto">
        <div className="flex flex-wrap items-center justify-between gap-x-6 py-c-50 text-sm font-normal not-pb-[1px] bg-[length:4px_1px] bg-repeat-x bg-gradient-to-r from-neutral-500 to-transparent bg-top">
          <nav className="flex flex-wrap gap-x-6 items-center leading-relaxed justify-start">
            <h2 className="sr-only">Social networks</h2>
            <strong>Follow me:</strong>
            <a
              href="https://www.twitter.com/130db"
              className="whitespace-nowrap hover:text-black dark:hover:text-white transition-color"
              target="_blank"
            >
              X / 130db
            </a>
            <a
              href="https://www.twitter.com/AigarsSukurs"
              className="whitespace-nowrap hover:text-black dark:hover:text-white transition-color"
              target="_blank"
            >
              X / AigarsSukurs
            </a>
          </nav>
        </div>
      </div>
    </footer>
  );
}
