export default function TentangKami() {
    return (
        <section id="tentang" className="py-16 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                        Tentang Catering Nusantara
                    </h2>
                    <div className="w-24 h-1 bg-orange-600 mx-auto mb-6"></div>
                    <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                        Melayani dengan cinta rasa, menciptakan pengalaman kuliner yang tak terlupakan
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-12 items-center">
                    <div>
                        <h3 className="text-2xl font-bold text-gray-900 mb-6">
                            Perjalanan Cita Rasa Nusantara
                        </h3>
                        <p className="text-gray-600 mb-6 leading-relaxed">
                            Catering Nusantara didirikan dengan misi untuk menghadirkan cita rasa autentik Indonesia 
                            dalam setiap hidangan. Dengan pengalaman lebih dari 10 tahun, kami telah melayani ribuan 
                            acara mulai dari pernikahan, acara perusahaan, hingga perayaan keluarga.
                        </p>
                        <p className="text-gray-600 mb-6 leading-relaxed">
                            Tim chef berpengalaman kami menggunakan bahan-bahan segar berkualitas tinggi dan 
                            resep tradisional yang telah diwariskan turun temurun, menghadirkan kelezatan yang 
                            memanjakan lidah setiap tamu.
                        </p>

                        <div className="grid grid-cols-2 gap-6 mt-8">
                            <div className="text-center">
                                <div className="text-3xl font-bold text-orange-600 mb-2">10+</div>
                                <div className="text-gray-600">Tahun Pengalaman</div>
                            </div>
                            <div className="text-center">
                                <div className="text-3xl font-bold text-orange-600 mb-2">1000+</div>
                                <div className="text-gray-600">Acara Dilayani</div>
                            </div>
                            <div className="text-center">
                                <div className="text-3xl font-bold text-orange-600 mb-2">50+</div>
                                <div className="text-gray-600">Menu Pilihan</div>
                            </div>
                            <div className="text-center">
                                <div className="text-3xl font-bold text-orange-600 mb-2">100%</div>
                                <div className="text-gray-600">Kepuasan Pelanggan</div>
                            </div>
                        </div>
                    </div>

                    <div className="relative">
                        <div className="bg-orange-600 rounded-lg p-8 text-white">
                            <div className="aspect-square bg-white/10 rounded-lg flex items-center justify-center mb-6">
                                <svg className="w-24 h-24 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7" />
                                </svg>
                            </div>
                            <h4 className="text-xl font-bold mb-4">Komitmen Kualitas</h4>
                            <ul className="space-y-3 text-sm">
                                <li className="flex items-center">
                                    <svg className="w-4 h-4 mr-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                    </svg>
                                    Bahan segar dan berkualitas
                                </li>
                                <li className="flex items-center">
                                    <svg className="w-4 h-4 mr-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                    </svg>
                                    Resep tradisional autentik
                                </li>
                                <li className="flex items-center">
                                    <svg className="w-4 h-4 mr-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                    </svg>
                                    Layanan professional
                                </li>
                                <li className="flex items-center">
                                    <svg className="w-4 h-4 mr-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                    </svg>
                                    Harga yang kompetitif
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
