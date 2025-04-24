import React from 'react'



const Footer = () => {
    return (
        <footer class="bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-10">
        <div class="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
            
            <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        
                <div>
                    <h3 class="text-xl font-semibold mb-4">Quick Links</h3>
                    <ul class="space-y-3">
                        <li><a href="/about-us" class="text-gray-200 hover:text-white">About Us</a></li>
                        <li><a href="/contact-us" class="text-gray-200 hover:text-white">Contact Us</a></li>
                        <li><a href="/privacy-policy" class="text-gray-200 hover:text-white">Privacy Policy</a></li>
                        <li><a href="/terms-of-service" class="text-gray-200 hover:text-white">Terms of Service</a></li>
                        <li><a href="/faq" class="text-gray-200 hover:text-white">FAQ</a></li>
                    </ul>
                </div>
    
                
                <div>
                    <h3 class="text-xl font-semibold mb-4">Follow Us</h3>
                    <div class="flex space-x-6">
                        <a href="https://facebook.com" target="_blank" class="text-gray-200 hover:text-white">
                            <i class="fab fa-facebook-f w-6 h-6"></i>
                        </a>
                        <a href="https://linkedin.com" target="_blank" class="text-gray-200 hover:text-white">
                            <i class="fab fa-linkedin-in w-6 h-6"></i>
                        </a>
                        <a href="https://twitter.com" target="_blank" class="text-gray-200 hover:text-white">
                            <i class="fab fa-twitter w-6 h-6"></i>
                        </a>
                        <a href="https://instagram.com" target="_blank" class="text-gray-200 hover:text-white">
                            <i class="fab fa-instagram w-6 h-6"></i>
                        </a>
                    </div>
                </div>
    
               
                <div>
                    <h3 class="text-xl font-semibold mb-4">Contact</h3>
                    <p class="text-gray-200">Job Portal © 2025 | All Rights Reserved</p>
                    <p class="text-gray-200 mt-2">Need help? <a href="mailto:support@jobportal.com" class="text-blue-300 hover:text-white">support@jobportal.com</a></p>
                </div>
            </div>
    
           
            <div class="text-center mt-8">
                <p class="text-sm text-gray-200">Job Portal | Empowering Your Career Journey</p>
            </div>
        </div>
    </footer>
    


    )

       
}

export default Footer;