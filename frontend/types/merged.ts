import {IStudent} from "./student";
import {IEvent} from "./event";

export interface IApply {
    registration_date: Date | string,
    is_approved: Boolean
    is_visited: Boolean,
    review: String
}
export interface IEventApply extends IEvent, IApply {
}

export interface IStudentApply extends IStudent, IApply {
}

export interface IStudentWEvents extends IStudent {
    events: IEventApply[]
}

export interface IEventsWStudents extends IEvent {
    students: IStudentApply[]
}