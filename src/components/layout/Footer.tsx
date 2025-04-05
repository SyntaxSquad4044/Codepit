import { Link } from "react-router-dom";

export function Footer() {
  return (
    <footer className="box-border border-t-[color:var(--accent-color)] bg-[color:var(--bg-black)] m-0 px-0 py-[60px] border-t border-solid">
      <div className="box-border max-w-[1200px] grid grid-cols-[repeat(3,1fr)] gap-10 mx-auto my-0 px-5 py-0 max-sm:grid-cols-[1fr] max-sm:text-center">
        <img
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/f89f912f83efe54028bf341df4a9700e86e159fe"
          alt="CodePit Logo"
          className="box-border w-[292px] h-[292px] object-contain m-0 p-0"
        />
        <nav className="box-border flex flex-col gap-2.5 m-0 p-0">
          <Link
            to="/"
            className="box-border text-[color:var(--text-white)] no-underline text-xl m-0 p-0 hover:text-[color:var(--accent-color)]"
          >
            Home
          </Link>
          <Link
            to="/challenges"
            className="box-border text-[color:var(--text-white)] no-underline text-xl m-0 p-0 hover:text-[color:var(--accent-color)]"
          >
            Challenges
          </Link>
          <Link
            to="/projects"
            className="box-border text-[color:var(--text-white)] no-underline text-xl m-0 p-0 hover:text-[color:var(--accent-color)]"
          >
            Projects
          </Link>
          <Link
            to="/login"
            className="box-border text-[color:var(--text-white)] no-underline text-xl m-0 p-0 hover:text-[color:var(--accent-color)]"
          >
            Login
          </Link>
          <Link
            to="/get-started"
            className="box-border text-[color:var(--text-white)] no-underline text-xl m-0 p-0 hover:text-[color:var(--accent-color)]"
          >
            Get Started
          </Link>
        </nav>
        <div className="box-border m-0 p-0">
          <h3 className="box-border text-[#FCEFF9] text-2xl font-bold mb-5 m-0 p-0">
            Get In Touch
          </h3>
          <div className="box-border flex gap-5 m-0 p-0 max-sm:justify-center">
            <a
              href="#"
              className="hover:opacity-80 transition-opacity"
              aria-label="Instagram"
            >
              <div
                dangerouslySetInnerHTML={{
                  __html: `<svg id="12:95" layer-name="instagram logo" width="157" height="60" viewBox="0 0 157 60" fill="none" xmlns="http://www.w3.org/2000/svg" class="instagram-icon" style="margin: 0; padding: 0; box-sizing: border-box; width: 60px; height: 60px"> <circle cx="30" cy="30" r="30" fill="#FCEFF9"></circle> <g clip-path="url(#clip0_12_95)"> <path d="M52.2266 21.5C52.1562 19.25 51.7344 17.6328 51.2422 16.1563C50.75 14.6797 49.9766 13.4844 48.7812 12.2891C47.5859 11.0938 46.3906 10.3906 44.9844 9.82812C43.5781 9.26562 42.0312 8.91406 39.6406 8.84375C37.1797 8.70313 36.4766 8.70312 30.5 8.70312C24.5234 8.70312 23.8906 8.70313 21.5 8.77344C19.1094 8.84375 17.6328 9.26562 16.1563 9.75781C14.6797 10.25 13.4844 11.0938 12.2891 12.2891C11.0938 13.4844 10.3203 14.6797 9.82812 16.1563C9.26562 17.5625 8.91406 19.1094 8.84375 21.5C8.77344 23.8906 8.70312 24.5234 8.70312 30.5C8.70312 36.4766 8.70313 37.1094 8.77344 39.5C8.84375 41.8906 9.26562 43.3672 9.75781 44.8438C10.25 46.3203 11.0234 47.5156 12.2188 48.7109C13.4141 49.9062 14.6797 50.6797 16.0859 51.1719C17.4922 51.6641 19.0391 52.0859 21.4297 52.1562C23.8203 52.2969 24.4531 52.2969 30.4297 52.2969C36.4062 52.2969 37.0391 52.2969 39.4297 52.2266C41.8203 52.1562 43.2969 51.7344 44.7734 51.2422C46.25 50.75 47.4453 49.9766 48.6406 48.7812C49.8359 47.5859 50.6094 46.3203 51.1016 44.9141C51.5938 43.5078 52.0156 41.9609 52.0859 39.5703C52.1562 37.3203 52.1562 36.6172 52.1562 30.6406C52.1562 24.6641 52.2969 