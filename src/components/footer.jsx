function Footer(){
    return (<footer className="w-full h-14 bg-gray-900 absolute bottom-0 text-white text-center text-xl">
        { new Date().toString() }
    </footer>)
}

export default Footer;