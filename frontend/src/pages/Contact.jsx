export default function Contact(){
    return (
        <>
        <div>
        <h1 className="text-lg mt-2">Contact</h1>
        
     <div className="text-lg space-y-2 mt-2 mb-4">
              <p>
                Email:{" "}
                <a href="mailto:info@navoraads.com" className="hover:text-white transition">
                  info@navoraads.com
                </a>
              </p>
              <p>WhatsApp: +91 99529 57187</p>
              <p>Vandalur,Chennai, Tamil Nadu, India</p>
            </div>
        </div>
        </>
    );
}