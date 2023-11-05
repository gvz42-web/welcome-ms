export type IEvent = {
    event_id: number
    type: string
    title: string
    description: string
    date_time: Date | string
    duration: number
    only_students: boolean
    only_russian: boolean
    post_link?: string | null
    people_limit: number
    is_registration_open: boolean
    is_report_sent: boolean
}