import {IStudent} from "./student";
import {IEvent} from "./event";

export interface IEventApply extends IEvent {
    registration_date: Date | string,
    is_approved: Boolean
    is_visited: Boolean,
    review: String
}

export interface IStudentWEvents extends IStudent {
    events: IEventApply[]
}