fruits = [
    {
        "fruitId": 1,
        "fruitName": 'Apel',
        "fruitType": 'IMPORT',
        "stock": 10
    },
    {
        "fruitId": 2,
        "fruitName": 'Kurma',
        "fruitType": 'IMPORT',
        "stock": 20
    },
    {
        "fruitId": 3,
        "fruitName": 'apel',
        "fruitType": 'IMPORT',
        "stock": 50
    },
    {
        "fruitId": 4,
        "fruitName": 'Manggis',
        "fruitType": 'LOCAL',
        "stock": 100
    },
    {
        "fruitId": 5,
        "fruitName": 'Jeruk Bali',
        "fruitType": 'LOCAL',
        "stock": 10
    },
    {
        "fruitId": 5,
        "fruitName": 'KURMA',
        "fruitType": 'IMPORT',
        "stock": 20
    },
    {
        "fruitId": 5,
        "fruitName": 'Salak',
        "fruitType": 'LOCAL',
        "stock": 150
    },
    {
        "fruitId": 5,
        "fruitName": 'Stroberi',
        "fruitType": 'International',
        "stock": 150
    },
]

def mengambilNamaBuah(data_buah):
    nama_buah = [buah['fruitName'].lower() for buah in data_buah]
    nama_buah_unik = set(nama_buah)
    buah_andi = [nama.capitalize() for nama in sorted(list(nama_buah_unik))]
    return buah_andi

def mengambilNamaBuahCapitalManual(data_buah):
    nama_buah = [buah['fruitName'].lower() for buah in data_buah]
    nama_buah_unik = set(nama_buah)
    buah_andi_capital = [nama.title() for nama in sorted(list(nama_buah_unik))]
    return buah_andi_capital

def mengelompokkanBuah(data_buah):
    wadah_buah_awal = {}

    for buah in data_buah:
        tipe_buah = buah['fruitType']
        nama_buah = buah['fruitName']

        if tipe_buah in wadah_buah_awal:
            wadah_buah_awal[tipe_buah].append(nama_buah)
        else:
            wadah_buah_awal[tipe_buah] = [nama_buah]

    wadah_buah_akhir = {} 
    for tipe_buah, daftar_nama in wadah_buah_awal.items():
        nama = [nama_buah.lower() for nama_buah in daftar_nama]
        nama_unik = set(nama)
        nama_rapi = sorted([nama.capitalize() for nama in nama_unik])

        wadah_buah_akhir[tipe_buah] = nama_rapi
    return wadah_buah_akhir

def filter_buah_berdasarkan_id(data_buah):
    types_for_id_5 = set()
    for buah in data_buah:
        if buah['fruitId'] == 5:
            types_for_id_5.add(buah['fruitType'])

    konflik_ditemukan = 'LOCAL' in types_for_id_5 and 'IMPORT' in types_for_id_5

    if konflik_ditemukan:
        print("INFO: Ditemukan fruitId 5 untuk tipe LOCAL dan IMPORT. Semua data dengan fruitId 5 akan disembunyikan.")
        data_buah_baru = [buah for buah in data_buah if buah['fruitId'] != 5]
        return data_buah_baru
    else:
        print("INFO: Tidak ditemukan konflik fruitId 5. Data ditampilkan semua.")
        return data_buah


def menghitungStokBuah(data_buah):
    total_stok = {}

    for buah in data_buah:
        tipe_buah = buah['fruitType']
        stok_buah = buah['stock']

        if tipe_buah in total_stok:
            total_stok[tipe_buah] = total_stok[tipe_buah] + stok_buah
        else:
            total_stok[tipe_buah] = stok_buah
            
    return total_stok

buah_yang_dimiliki_andi = mengambilNamaBuah(fruits)
buah_yang_dimiliki_andi_c = mengambilNamaBuahCapitalManual(fruits)
pengelempokkan_tipe_buah = mengelompokkanBuah(fruits)
hitung_stok_buah = menghitungStokBuah(fruits)

print("Soal 1: Buah apa saja yang dimiliki oleh Andi?")
print("Jawaban:", buah_yang_dimiliki_andi)
print("Jawaban:", buah_yang_dimiliki_andi_c)
print("-" * 80)
print("Soal 2: Berapa jumlah wadah yang dibutuhkan? Dan ada buah apa saja di masing-masing wadah?")
jumlah_wadah = len(pengelempokkan_tipe_buah)
print(f"Jumlah wadah yang dibutuhkan: {jumlah_wadah}")
print()
print("Isi dari setiap wadah:")
for tipe_wadah, isi_wadah in pengelempokkan_tipe_buah.items():
    print(f"Buah {tipe_wadah}: {isi_wadah}")
print("-" * 80)
print("Soal 3: Berapa total stock buah yang ada di masing-masing wadah?")
print("Jawaban:", hitung_stok_buah)
print("-" * 80)

# Soal 4 Komentar Mengenai Case 1
# 1. Terdapat data buah yang duplikat, contoh adanya 3 data buah yang memiliki id 5
# 2. Nama Buah tidak memiliki standar ada nama buah yang huruf nya kapital, dan ada yang tidak.