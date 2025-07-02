export default function KontakKami() {
    return (
        <section id="kontak" className="py-16 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                        Hubungi Kami
                    </h2>
                    <div className="w-24 h-1 bg-orange-600 mx-auto mb-6"></div>
                    <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                        Siap melayani acara istimewa Anda. Hubungi kami untuk konsultasi dan pemesanan
                    </p>
                </div>

                <div className="max-w-2xl mx-auto">
                    <div>
                        <h3 className="text-2xl font-bold text-gray-900 mb-8">
                            Informasi Kontak
                        </h3>
                        
                        <div className="space-y-6">
                            <div className="flex items-start">
                                <div className="flex-shrink-0 bg-orange-600 rounded-lg p-3">
                                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                    </svg>
                                </div>
                                <div className="ml-4">
                                    <h4 className="text-lg font-semibold text-gray-900">Alamat</h4>
                                    <p className="text-gray-600 mt-1">
                                        Jl. Kuliner Nusantara No. 25, Surabaya, Indonesia
                                    </p>
                                </div>
                            </div>

                            <div className="flex items-start">
                                <div className="flex-shrink-0 bg-orange-600 rounded-lg p-3">
                                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                    </svg>
                                </div>
                                <div className="ml-4">
                                    <h4 className="text-lg font-semibold text-gray-900">Telepon</h4>
                                    <p className="text-gray-600 mt-1">
                                        <a href="tel:+6281234567890" className="hover:text-orange-600 transition duration-300">
                                            +62 812-3456-7890
                                        </a>
                                    </p>
                                </div>
                            </div>

                            <div className="flex items-start">
                                <div className="flex-shrink-0 bg-orange-600 rounded-lg p-3">
                                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                    </svg>
                                </div>
                                <div className="ml-4">
                                    <h4 className="text-lg font-semibold text-gray-900">Email</h4>
                                    <p className="text-gray-600 mt-1">
                                        <a href="mailto:info@cateringnusantara.com" className="hover:text-orange-600 transition duration-300">
                                            info@cateringnusantara.com
                                        </a>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
