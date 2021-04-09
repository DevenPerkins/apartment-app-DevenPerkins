 users = [
    {
        email: 'deven@findapt.com',
        password: 'p@@pieShoe'
    },

    {
        email: 'redvine@delicious.com',
        password: 'l@zysunday'
    },

    {
        email: 'dog@doggo.com',
        password: 'Too$hort'

    }
 ]
 users.each do |attributes|
    User.create attributes
    puts "creating User #{attributes}"
  end

  apartments = [

    {
        street:"123 Main",
        city:"Keene",
        state:"NH",
        manager:"Clam Lord",
        email:"clamlord@gmail.com",
        price:"over priced" ,
        bedrooms: 2,
        bathrooms: 2,
        pets:"no",
        user_id: 2,
     },
     {

        street:"1188 Reed",
        city:"San Diego",
        state:"CA",
        manager:"Ben",
        email:"coolben@gmail.com",
        price:"Cheap" ,
        bedrooms: 2,
        bathrooms: 2,
        pets:"yes",
        user_id: 6,
     },

     {

        street:"1122 Reed",
        city:"San Diego",
        state:"CA",
        manager:"Ben",
        email:"coolben@gmail.com",
        price:"Cheap" ,
        bedrooms: 2,
        bathrooms: 2,
        pets:"yes",
        user_id: 6,
     }

 ]
 apartments.each do |attributes|
    Apartment.create attributes
    puts "creating Apartment #{attributes}"
  end