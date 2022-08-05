require('dotenv').config();
const mongoose= require('mongoose');


//--------connecting to DataBase ---------
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true });
//--------creating a schema -----------
let personSchema = new mongoose.Schema({
  name:{
    type: String,
    required: true
  } ,
  age: { 
    type: Number
   },
  favoriteFoods: [
    {
      type: String
    }
  ]
});

//---------creating a model --------

const Person = mongoose.model('Person', personSchema);

const createAndSavePerson = (done) => {
//-------------adding data ------------
  let yacine = new Person({name:'Yacine',age:33,favoriteFoods:["t3am","chorba","Rechta"]});
//---------------saving a person ----------- 
  yacine.save((err,data)=>{
    if (err) return console.error(err);
    done(null,data);

  })
  

  
};

const createManyPeople = (arrayOfPeople, done) => {
  done(null /*, data*/);
};

const findPeopleByName = (personName, done) => {
  done(null /*, data*/);
};

const findOneByFood = (food, done) => {
  done(null /*, data*/);
};

const findPersonById = (personId, done) => {
  done(null /*, data*/);
};

const findEditThenSave = (personId, done) => {
  const foodToAdd = "hamburger";

  done(null /*, data*/);
};

const findAndUpdate = (personName, done) => {
  const ageToSet = 20;

  done(null /*, data*/);
};

const removeById = (personId, done) => {
  done(null /*, data*/);
};

const removeManyPeople = (done) => {
  const nameToRemove = "Mary";

  done(null /*, data*/);
};

const queryChain = (done) => {
  const foodToSearch = "burrito";

  done(null /*, data*/);
};

/** **Well Done !!**
/* You completed these challenges, let's go celebrate !
 */

//----- **DO NOT EDIT BELOW THIS LINE** ----------------------------------

exports.PersonModel = Person;
exports.createAndSavePerson = createAndSavePerson;
exports.findPeopleByName = findPeopleByName;
exports.findOneByFood = findOneByFood;
exports.findPersonById = findPersonById;
exports.findEditThenSave = findEditThenSave;
exports.findAndUpdate = findAndUpdate;
exports.createManyPeople = createManyPeople;
exports.removeById = removeById;
exports.removeManyPeople = removeManyPeople;
exports.queryChain = queryChain;
