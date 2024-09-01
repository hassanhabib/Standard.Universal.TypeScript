import {Student} from "../../model/students/student";

export interface IStorageBroker {
    insertStudent(student: Student): Student;
}