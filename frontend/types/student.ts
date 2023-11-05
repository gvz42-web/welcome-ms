enum education_levels {
    SPO = 'SPO',
    Spec = 'Spec',
    Bach = 'Bach',
    Mag = 'Mag',
    Asp = 'Asp'
}

export type IStudent = {
    student_id: number
    first_name: string
    last_name: string
    middle_name?: string | null
    birth_date: Date | string
    is_bfu_student: boolean
    education_level?: education_levels
    group_name?: string | null
    year?: number | null
    is_foreign: boolean
    phone_number: string
    peer_id: number
    created_at: Date | string
}
