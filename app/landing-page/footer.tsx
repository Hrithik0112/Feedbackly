import { AppIconLogo } from "@/components/appicon-svg";

const Footer = () => {
  return (
    <footer className=" mt-4 pb-10    w-full flex items-center gap-4 justify-center">
      <p className="text-gray-400 ">&copy; 2025 Feedbaclky, Inc.</p>
      <p>
        Made with ❤️ by
        <span className="font-mono ml-2 font-semibold">
          <a href="https://www.hrithikdutta.me/" target="_blank" rel="noopener noreferrer">
            @Hrithik
          </a>
        </span>
      </p>
      
    </footer>
  );
};

export default Footer;
