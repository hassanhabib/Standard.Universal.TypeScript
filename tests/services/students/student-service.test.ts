import {IStorageBroker} from "../../../src/brokers/storages/storage-broker";
import Mocked = jest.Mocked;
import {StudentService} from "../../../src/services/students/student-service";
import {Student} from "../../../src/model/students/student";

describe('Student Service Tests', function() {
    let storageBrokerMock: Mocked<IStorageBroker>;
    let studentService: StudentService;

    beforeEach(async function() {
        storageBrokerMock = {
            insertStudent: jest.fn()
        }

        studentService =
            new StudentService(storageBrokerMock);
    });

    describe('Add Student', () => {
        it('Should add student', () => {
            // given
            const randomStudent: Student = {
                id: 1,
                name: "John"
            };

            const inputStudent: Student = randomStudent;
            const insertedStudent: Student = inputStudent;
            const expectedStudent: Student = insertedStudent;

            storageBrokerMock.insertStudent.mockImplementationOnce(() =>
                insertedStudent);

            // when
            const actualStudent =
                studentService.addStudent(inputStudent);

            // then
            expect(actualStudent).toBe(expectedStudent);

            expect(storageBrokerMock.insertStudent).toHaveBeenNthCalledWith(
                1,
                inputStudent
            );
        })
    })
})