comments = [
    {
        "commentId": 1,
        "commentContent": 'Hai',
        "replies": [
            {
                "commentId": 11,
                "commentContent": 'Hai juga',
                "replies": [
                    {
                        "commentId": 111,
                        "commentContent": 'Haai juga hai jugaa'
                    },
                    {
                        "commentId": 112,
                        "commentContent": 'Haai juga hai jugaa'
                    }
                ]
            },
            {
                "commentId": 12,
                "commentContent": 'Hai juga',
                "replies": [
                    {
                        "commentId": 121,
                        "commentContent": 'Haai juga hai jugaa'
                    }
                ]
            }
        ]
    },
    {
        "commentId": 2,
        "commentContent": 'Halooo'
    }
]

def HitungTotalKomentar(list_komentar):
    total_sementara = 0

    for komentar in list_komentar:
        total_sementara = total_sementara + 1

        if "replies" in komentar:
            total_balasan = HitungTotalKomentar(komentar["replies"])
            total_sementara = total_sementara + total_balasan

    return total_sementara

jawaban = HitungTotalKomentar(comments)
print(jawaban)