export interface Isignup {
    firstName: string,
    lastName: string,
    idnumber: string,
    email: string,
    phoneNumber: string,
    gender: string,
    entity: string,
    dateofBirth: string,
}

export interface Iemail {
    email: string,
}

export interface Isecurityquestions {

    Question1: string,
    Question2: string,
    Question3: string,
    Answer1: string,
    Answer2: string,
    Answer3: string,

}
export interface ILogin {
    email: string,
    password: string,
    entity: string,
}
export interface IPassword {
    password: string;
    confirmPassword: string;
}
export interface ISignup {
    firstName: String,
    entity: String,
    lastName: String,
    idnumber: String,
    email: String,
    phoneNumber: String,
    dateofBirth: String,
    gender: String,
    role: String,
    address1: String,
    address2: String,
    country: String,
    state: String,
    city: String,
    zipcode: String,
    password: String,
    confirmPassword: String,
    ans1: String,
    ans2: String,
    ans3: String,
    ans4: String,
    ans5: String,
    status:String,

}
