import { StudentModel } from '../student.model';
import { Student } from './student.interface';

//that's called buissness logic..
const createStudentIntoDB = async (student: Student) => {
  const result = await StudentModel.create(student);
  return result;
};

//that's called buissness logic..
const getAllStudentsFromDB = async () => {
  const result = await StudentModel.find();
  return result;
};

//that's called buissness logic..
const getSingleStudentsFromDB = async (id: string) => {
  const result = await StudentModel.findOne({ id });
  return result;
};

export const studentServices = {
  createStudentIntoDB,
  getAllStudentsFromDB,
  getSingleStudentsFromDB,
};
