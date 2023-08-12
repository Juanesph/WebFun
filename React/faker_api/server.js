const express = require("express");
const { faker } = require("@faker-js/faker");

const app = express();
const port = 8000;


app.use(express.json());
app.use(express.urlencoded({ extended: true }));


class User {
  constructor() {
    this.firstName = faker.person.firstName();
    this.lastName = faker.person.lastName();
    this.phoneNumber = faker.phone.number();
    this.email = faker.internet.email();
    this.password = faker.internet.password();
  }
}

class Company {
  constructor() {
    this.name = faker.company.name();
    this.address = {
      street: faker.location.street(),
      city: faker.location.city(),
      state: faker.location.state(),
      zipCode: faker.location.zipCode(),
      country: faker.location.country(),
    };
  }
}


const createUser = () => {
  const newUser = {
    firstName: faker.person.firstName(),
    lastName: faker.person.lastName(),
    phoneNumber: faker.phone.number(),
    email: faker.internet.email(),
    password: faker.internet.password(),
  };
  return newUser;
};

const createCompany = () => {
  const newCompany = {
    name: faker.company.name(),
    address: {
      street: faker.location.streetAddress(),
      city: faker.location.city(),
      state: faker.location.state(),
      zipCode: faker.location.zipCode(),
      country: faker.location.country(),
    },
  };
  return newCompany;
};


app.post("/api/users/new", (req, res) => {
  let newUserCls = new User();
  let newUSerFunc = createUser();
  res.json({ userCls: newUserCls, userFunc: newUSerFunc });
});


app.post("/api/companies/new", (req, res) => {
  let newCompanyCls = new Company();
  let newCompanyFunc = createCompany();
  res.json({ companyCls: newCompanyCls, companyFunc: newCompanyFunc });
});


app.post("/api/user/company", (req, res) => {
  let newUserCls = new User();
  let newCompanyCls = new Company();
  let newUserFunc = createUser();
  let newCompanyFunc = createCompany();
  res.json({
    userCls: newUserCls,
    companyCls: newCompanyCls,
    userFunc: newUserFunc,
    companyFunc: newCompanyFunc,
  });
});

app.listen(port, () => console.log(`Listening on port: ${port}`));