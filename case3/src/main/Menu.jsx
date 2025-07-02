import { useState } from 'react'

export default function Menu() {
    const [activeCategory, setActiveCategory] = useState('makanan-utama')

    const menuCategories = [
        { id: 'makanan-utama', name: 'Makanan Utama' },
        { id: 'nasi-box', name: 'Nasi Box' },
        { id: 'snack', name: 'Snack & Cemilan' },
        { id: 'minuman', name: 'Minuman' }
    ]

    const menuItems = {
        'makanan-utama': [
            {
                name: 'Gudeg Jogja Komplit',
                description: 'Gudeg tradisional dengan ayam, telur, dan krecek',
                price: 'Rp 25.000',
                image: '🥘'
            },
            {
                name: 'Rendang Daging Sapi',
                description: 'Rendang autentik Padang dengan daging empuk',
                price: 'Rp 35.000',
                image: '🍛'
            },
            {
                name: 'Soto Ayam Lamongan',
                description: 'Soto ayam khas dengan kuah bening segar',
                price: 'Rp 20.000',
                image: '🍲'
            },
            {
                name: 'Ikan Bakar Jimbaran',
                description: 'Ikan bakar bumbu kecap dengan sambal matah',
                price: 'Rp 30.000',
                image: '🐟'
            }
        ],
        'nasi-box': [
            {
                name: 'Nasi Box Ayam Teriyaki',
                description: 'Nasi putih, ayam teriyaki, sayur, kerupuk',
                price: 'Rp 18.000',
                image: '🍱'
            },
            {
                name: 'Nasi Box Rendang',
                description: 'Nasi putih, rendang daging, sayur, kerupuk',
                price: 'Rp 22.000',
                image: '🍱'
            },
            {
                name: 'Nasi Box Ayam Kremes',
                description: 'Nasi putih, ayam kremes, lalapan, sambal',
                price: 'Rp 16.000',
                image: '🍱'
            },
            {
                name: 'Nasi Box Ikan Bakar',
                description: 'Nasi putih, ikan bakar, sayur, sambal',
                price: 'Rp 19.000',
                image: '🍱'
            }
        ],
        'snack': [
            {
                name: 'Risoles Mayo',
                description: 'Risoles isi ragout ayam dengan mayonaise',
                price: 'Rp 8.000',
                image: '🥟'
            },
            {
                name: 'Lemper Ayam',
                description: 'Ketan dengan isian ayam bumbu kuning',
                price: 'Rp 6.000',
                image: '🍘'
            },
            {
                name: 'Kue Sus Vanilla',
                description: 'Sus isi vla vanilla dengan taburan gula halus',
                price: 'Rp 10.000',
                image: '🧁'
            },
            {
                name: 'Klepon',
                description: 'Kue tradisional isi gula merah kelapa parut',
                price: 'Rp 5.000',
                image: '🍡'
            }
        ],
        'minuman': [
            {
                name: 'Es Teh Manis',
                description: 'Teh manis dingin segar',
                price: 'Rp 5.000',
                image: '🧊'
            },
            {
                name: 'Es Jeruk',
                description: 'Jeruk peras segar dengan es batu',
                price: 'Rp 8.000',
                image: '🍊'
            },
            {
                name: 'Jus Buah Segar',
                description: 'Pilihan jus mangga, alpukat, atau jambu',
                price: 'Rp 12.000',
                image: '🥤'
            },
            {
                name: 'Air Mineral',
                description: 'Air mineral kemasan 600ml',
                price: 'Rp 3.000',
                image: '💧'
            }
        ]
    }

    return (
        <section id="menu" className="py-16 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                        Menu Pilihan Kami
                    </h2>
                    <div className="w-24 h-1 bg-orange-600 mx-auto mb-6"></div>
                    <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                        Nikmati berbagai pilihan menu lezat dengan cita rasa nusantara yang autentik
                    </p>
                </div>

                <div className="flex flex-wrap justify-center mb-12 bg-gray-100 rounded-lg p-2">
                    {menuCategories.map((category) => (
                        <button
                            key={category.id}
                            onClick={() => setActiveCategory(category.id)}
                            className={`px-6 py-3 rounded-md text-sm font-medium transition duration-300 m-1 ${
                                activeCategory === category.id
                                    ? 'bg-orange-600 text-white'
                                    : 'text-gray-600 hover:text-orange-600 hover:bg-white'
                            }`}
                        >
                            {category.name}
                        </button>
                    ))}
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {menuItems[activeCategory].map((item, index) => (
                        <div key={index} className="bg-white rounded-lg shadow-md hover:shadow-lg transition duration-300 overflow-hidden border border-gray-100">
                            <div className="p-6">
                                <div className="text-4xl mb-4 text-center">{item.image}</div>
                                <h3 className="text-lg font-bold text-gray-900 mb-2">{item.name}</h3>
                                <p className="text-gray-600 text-sm mb-4 leading-relaxed">{item.description}</p>
                                <div className="flex justify-between items-center">
                                    <span className="text-xl font-bold text-orange-600">{item.price}</span>
                                    <button className="bg-orange-600 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-orange-700 transition duration-300">
                                        Pesan
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="text-center mt-12">
                    <div className="bg-orange-50 rounded-lg p-8">
                        <h3 className="text-2xl font-bold text-gray-900 mb-4">
                            Butuh Menu Khusus?
                        </h3>
                        <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
                            Kami juga melayani pesanan menu khusus sesuai permintaan Anda. 
                            Hubungi kami untuk konsultasi menu yang sesuai dengan acara Anda.
                        </p>
                        <button className="bg-orange-600 text-white px-8 py-3 rounded-md font-medium hover:bg-orange-700 transition duration-300">
                            Konsultasi Menu
                        </button>
                    </div>
                </div>
            </div>
        </section>
    )
}
