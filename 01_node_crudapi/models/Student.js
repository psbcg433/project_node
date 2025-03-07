import mongoose from "mongoose";

// Define the schema
const studentSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true,
    },
    age: {
        type: Number,
        required: true,
        min: 18,
    },
    fees: {
        type: mongoose.Schema.Types.Decimal128,
        required: true,
        validate: {
            validator: (value) => value >= 5000.55,
            message: "Fees must be at least 5000.55",
        },
    },
});

// Static method to create a new student
studentSchema.statics.createStudent = async function (studentData) {
    if (!studentData.name || !studentData.age || !studentData.fees) {
        throw new Error("All fields are required");
    }
    const student = new this(studentData);
    return await student.save();
};

// Static method to get all students
studentSchema.statics.getAllStudents = async function () {
    return await this.find();
};

// Static method to get a student by ID
studentSchema.statics.getStudentById = async function (id) {
    const student = await this.findById(id);
    if (!student) {
        throw new Error("Student not found");
    }
    return student;
};

// Static method to update a student by ID
studentSchema.statics.updateStudentById = async function(id, updateData) {
    const student = await this.findById(id);
    if (!student) {
        throw new Error("Student not found");
    }
    // Using spread operator for updating fields
    student.set({ ...updateData });
    return await student.save();
};

// Static method to delete a student by ID
studentSchema.statics.deleteStudentById = async function (id) {
    const student = await this.findById(id);
    if (!student) {
        throw new Error("Student not found");
    }
    await student.deleteOne();
    return { message: "Student deleted successfully" };
};

// Create the model
const StudentModel = mongoose.model("Student", studentSchema);

export default StudentModel;
