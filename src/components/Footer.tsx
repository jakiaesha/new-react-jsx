const Footer = () => {
  return (
    <footer className="border-t border-gray-100 bg-gray-50">
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-10 px-6 py-12 sm:grid-cols-2 lg:grid-cols-4">
        {/* Brand block */}
        <div className="flex flex-col gap-4 lg:col-span-1">
          <div className="flex items-center gap-2">
            <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-linear-to-br from-purple-500 to-pink-500 text-sm font-bold text-white">
              DS
            </span>
            <span className="text-lg font-bold text-gray-900">
              Dev<span className="text-red-500">Stack</span>
            </span>
          </div>
          <p className="text-sm text-gray-500">
            Curated tools, technologies, and resources for developers building
            modern software.
          </p>
          <div className="flex gap-4 text-sm font-medium text-gray-700">
            <a href="#" className="hover:text-gray-900">GitHub</a>
            <a href="#" className="hover:text-gray-900">Twitter</a>
            <a href="#" className="hover:text-gray-900">LinkedIn</a>
          </div>
        </div>

        {/* Product */}
        <div className="flex flex-col gap-3">
          <h4 className="text-xs font-semibold uppercase tracking-wide text-gray-900">
            Product
          </h4>
          <a href="#" className="text-sm text-gray-500 hover:text-gray-900">Home</a>
          <a href="#" className="text-sm text-gray-500 hover:text-gray-900">Technologies</a>
          <a href="#" className="text-sm text-gray-500 hover:text-gray-900">Projects</a>
        </div>

        {/* Company */}
        <div className="flex flex-col gap-3">
          <h4 className="text-xs font-semibold uppercase tracking-wide text-gray-900">
            Company
          </h4>
          <a href="#" className="text-sm text-gray-500 hover:text-gray-900">About</a>
          <a href="#" className="text-sm text-gray-500 hover:text-gray-900">Contact</a>
          <a href="#" className="text-sm text-gray-500 hover:text-gray-900">Careers</a>
        </div>

        {/* Legal */}
        <div className="flex flex-col gap-3">
          <h4 className="text-xs font-semibold uppercase tracking-wide text-gray-900">
            Legal
          </h4>
          <a href="#" className="text-sm text-gray-500 hover:text-gray-900">Privacy Policy</a>
          <a href="#" className="text-sm text-gray-500 hover:text-gray-900">Terms of Service</a>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-gray-100 px-6 py-4">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-2 sm:flex-row">
          <p className="text-sm text-gray-400">© 2026 Dev Stack. All rights reserved.</p>
          <div className="flex gap-4 text-sm text-gray-400">
            <a href="#" className="hover:text-gray-700">Privacy</a>
            <a href="#" className="hover:text-gray-700">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;