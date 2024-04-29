type UserProps = {
    id:number;
    firstname:string;
    lastname:string;
    email:string;
    gender: "male" | "female" | "others";
}


const Users:UserProps[] = [
    { id: 1, firstname: "John", lastname: "Doe", email: "john.doe@example.com", gender: "male" },
    { id: 2, firstname: "Jane", lastname: "Doe", email: "jane.doe@example.com", gender: "female" },
    { id: 3, firstname: "Alice", lastname: "Smith", email: "alice.smith@example.com", gender: "female" },
    { id: 4, firstname: "Bob", lastname: "Johnson", email: "bob.johnson@example.com", gender: "male" },
    { id: 5, firstname: "Emily", lastname: "Brown", email: "emily.brown@example.com", gender: "female" },
    { id: 6, firstname: "Michael", lastname: "Wilson", email: "michael.wilson@example.com", gender: "male" },
    { id: 7, firstname: "Emma", lastname: "Taylor", email: "emma.taylor@example.com", gender: "female" },
    { id: 8, firstname: "David", lastname: "Martinez", email: "david.martinez@example.com", gender: "male" },
    { id: 9, firstname: "Olivia", lastname: "Anderson", email: "olivia.anderson@example.com", gender: "female" },
    { id: 10, firstname: "James", lastname: "Jackson", email: "james.jackson@example.com", gender: "male" },
    { id: 11, firstname: "Sophia", lastname: "Thomas", email: "sophia.thomas@example.com", gender: "female" },
    { id: 12, firstname: "William", lastname: "White", email: "william.white@example.com", gender: "male" },
    { id: 13, firstname: "Ava", lastname: "Harris", email: "ava.harris@example.com", gender: "female" },
    { id: 14, firstname: "Alexander", lastname: "Clark", email: "alexander.clark@example.com", gender: "male" },
    { id: 15, firstname: "Mia", lastname: "Lewis", email: "mia.lewis@example.com", gender: "female" },
    { id: 16, firstname: "Daniel", lastname: "Walker", email: "daniel.walker@example.com", gender: "male" },
    { id: 17, firstname: "Isabella", lastname: "Hall", email: "isabella.hall@example.com", gender: "female" },
    { id: 18, firstname: "Liam", lastname: "Allen", email: "liam.allen@example.com", gender: "male" },
    { id: 19, firstname: "Charlotte", lastname: "Young", email: "charlotte.young@example.com", gender: "female" },
    { id: 20, firstname: "Benjamin", lastname: "Wright", email: "benjamin.wright@example.com", gender: "male" }
]