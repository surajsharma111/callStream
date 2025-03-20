


const navigation = {
    solutions: [
        { name: 'Home', href: '/home' },
        { name: 'About Us', href: '/about' },
        { name: 'Client Testimonials', href: '/client-testimonials' },
        { name: 'Our People', href: '/our-people' },
       
    ],
    
    contact: [
      { name: 'Get in touch', href: '/contacts' },
      { name: 'patner with Us', href: '/' },
      { name: 'Facebook', href: '/' },
      { name: 'Linkdin', href: '/' },
      { name: 'Instagram', href: '/' },
      { name: 'Tiktok', href: '/' }
    ],
   
  }
  
  export default function Footer() {
    return (
      <footer className="bg-black " aria-labelledby="footer-heading">
        <div className="  mx-auto max-w-7xl px-6 pb-8 pt-16 sm:pt-16 lg:px-8 lg:pt-16">
          <div className="xl:grid xl:grid-cols-3 xl:gap-8">
            <div className="space-y-8">

              <p className="text-sm leading-6 text-white">
              Level 2, Suite 5B & 6A 1/17 Elsie St, Burwood NSW 2134 <br />
ABN: 767677888 <br />
info@callstream.com.au <br />
0450713247 / 0450713247 <br />
              </p>
            
            </div>
            <div className="mt-16 grid grid-cols-1 gap-8 xl:col-span-2 xl:mt-0">
              <div className="md:grid md:grid-cols-3 md:gap-8">
                <div>
                  <h3 className="text-sm font-semibold leading-6 text-white ">ABOUT CallStream</h3>
                  <ul role="list" className="mt-6 space-y-4">
                    {navigation.solutions.map((item) => (
                      <li key={item.name}>
                        <a href={item.href} className="text-sm leading-6 text-white hover:text-white">
                          {item.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
            
                <div className="mt-10 md:mt-0">
                  <h3 className="text-sm font-semibold leading-6 text-white">EXPERTISE</h3>
                  <ul role="list" className="mt-6 space-y-4">
                    {navigation.contact.map((item) => (
                      <li key={item.name}>
                        <a href={item.href} className="text-sm leading-6 text-white hover:text-white">
                          {item.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              
            </div>
          </div>
          <div className="mt-16 border-t border-white/10 pt-8 sm:mt-20 lg:mt-24">
            <p className="text-xs leading-5 text-white">&copy; {(new Date()).getFullYear()} CallStream Pty Ltd, All rights reserved.</p>
          </div>
        </div>
      </footer>
    )
  }
  