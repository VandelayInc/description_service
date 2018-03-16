const faker = require('faker');
const fs = require('fs');
const file = fs.createWriteStream('./giantdata.json')
let start = process.hrtime();

let getRandomInt = function(max){
  return Math.floor(Math.random() * Math.floor(max));
}
let randomEntry = (id) => {
  let entry = {
    "city": faker.address.city(),
    "id": id,
    "name": "listing name " + faker.lorem.words(),
    "user_first_name": faker.name.firstName(),
    "user_thumbnail_url": faker.image.avatar(),
    "bathrooms": getRandomInt(7),
    "bedrooms": getRandomInt(7),
    "beds": getRandomInt(7),
    "cancellation_policy": faker.finance.transactionType(),
    "person_capacity": getRandomInt(12),
    "property_type": faker.commerce.product(),
    "room_type": faker.commerce.productAdjective(),
    "room_type_category": faker.commerce.productAdjective(),
    "access": "access" + faker.lorem.words(),
    "amenities": ["TV", "Cable TV"],
    "amenities_ids": [1, 2],
    "description": "Description " + faker.lorem.sentence(),
    "interaction": "interaction " + faker.lorem.words(),
    "listing_security_deposit_native": getRandomInt(400),
    "notes": "notes " + faker.lorem.words(),
    "security_deposit_formatted": "$" + getRandomInt(300).toString(),
    "space": "space " + faker.lorem.words(),
    "summary": "summary " + faker.lorem.words(),
    "additional_house_rules": "house rules " + faker.lorem.words(),
  };
  return JSON.stringify(entry);
};

function writeChunk(writer){
  let i = 1e7 + 1;
  write();
  function write(){
    let ok = true;
    do {
      i--;
      let entry = randomEntry(i)
      if (i ===0){
        //last time
        writer.write(entry + ']')
        let end = process.hrtime(start);
        console.log(`this process took ${end[0]} seconds`)
      } else if (i === 1e7) {
        writer.write('[' + entry)
      } else {
        // see if we should continue or wait
        //don't do the callback, we're not done yet.
        ok = writer.write(entry + ', \n')
      }
    } while (i > 0 && ok);
    if (i > 0){
      //had to stop early!
      //write some more once it drains
      writer.once('drain', write)
    }
  }
}


writeChunk(file)
