import {IStorageBroker} from "../../brokers/storages/storage-broker";
import {Student} from "../../model/students/student";

export class StudentService {
    storageBroker: IStorageBroker;

    constructor(storageBroker: IStorageBroker) {
        this.storageBroker = storageBroker;
    }

    addStudent(student: Student): Student {
        throw new Error("Method not implemented.");
    }
}