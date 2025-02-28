const Footer = () => {
  return (
    <footer className="bg-white border-1">
      <div className="mx-auto py-12 px-4 overflow-hidden sm:px-6 lg:px-8">
        <p className="text-center text-sm text-black">
          &copy; {new Date().getFullYear()} Store, Inc. All rights reserved.
        </p>
      </div>
    </footer>
  )
}

export default Footer
