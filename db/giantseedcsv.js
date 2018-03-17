const faker = require('faker');
const fs = require('fs');
const file = fs.createWriteStream('./giantdata.csv')
let start = process.hrtime();

let getRandomInt = function(max){
  return Math.floor(Math.random() * Math.floor(max));
}
let randomEntry = (id) => {
    var city = faker.address.city();
    var name = "listing name " + faker.lorem.words();
    var user_first_name = faker.name.firstName();
    var user_thumbnail_url=  faker.image.avatar();
    var bathrooms =  getRandomInt(7);
    var bedrooms=  getRandomInt(7);
    var beds =  getRandomInt(7);
    var cancellation_policy=  faker.finance.transactionType();
    var person_capacity=  getRandomInt(12);
    var property_type=  faker.commerce.product();
    var room_type =  faker.commerce.productAdjective();
    var room_type_category = faker.commerce.productAdjective();
    var access = "access" + faker.lorem.words();
    var amenities = "Cable TV";
    var amenities_ids = 1;
    var description = "Description " + faker.lorem.sentence();
    var interaction = "interaction " + faker.lorem.words();
    var listing_security_deposit_native =  getRandomInt(400);
    var notes = "notes " + faker.lorem.words();
    var security_deposit_formatted = "$" + getRandomInt(300).toString();
    var space = "space " + faker.lorem.words();
    var summary = "summary " + faker.lorem.words();
    var additional_house_rules =  "house rules " + faker.lorem.words();
  return (`"${city}",${id},"${name}","${user_first_name}","${user_thumbnail_url}",${bathrooms},${bedrooms},${beds},"${cancellation_policy}",${person_capacity},"${property_type}","${room_type}","${room_type_category}","${access}","${amenities}",${amenities_ids},"${description}","${interaction}",${listing_security_deposit_native},"${notes}","${security_deposit_formatted}","${space}","${summary}","${additional_house_rules}"`);
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
        writer.write(entry)
        let end = process.hrtime(start);
        console.log(`this process took ${end[0]} seconds`)
      } else if (i === 1e7) {
        writer.write(`city,id,name,user_first_name,user_thumbnail_url,bathrooms,bedrooms,beds,cancellation_policy,person_capacity,property_type,room_type,room_type_category,access,amenities,amenities_ids,description,interaction,listing_security_deposit_native,notes,security_deposit_formatted,space,summary,additional_house_rules`)
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
